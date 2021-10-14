import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

function TweetFactory({ userData }) {
  const [tweet, setTweet] = useState('');
  const [imageFile, setImageFile] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    let uploadURL = '';
    if (imageFile !== '') {
      const fileRef = ref(storageService, `${userData.uid}/${uuidv4()}`);
      const uploadFile = await uploadString(fileRef, imageFile, 'data_url');
      uploadURL = await getDownloadURL(uploadFile.ref);
    }
    await addDoc(collection(dbService, 'tweets'), {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userData.uid,
      uploadURL,
    });
    setTweet('');
    setImageFile('');
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setTweet(value);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;

    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImageFile(result);
    };
    reader.readAsDataURL(file);
  };

  const onClearImageFile = () => setImageFile('');

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What's happening?"
        value={tweet}
        maxLength="120"
        onChange={onChange}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Tweet" />
      {imageFile && (
        <div>
          <img src={imageFile} alt="ImageFile" width="50px" height="50px" />
          <button onClick={onClearImageFile}>Clear</button>
        </div>
      )}
    </form>
  );
}

export default TweetFactory;
