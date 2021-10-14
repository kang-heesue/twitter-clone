import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

function TweetFactory({ userData }) {
  const [tweet, setTweet] = useState('');
  const [imageFile, setImageFile] = useState('');

  const onSubmit = async (e) => {
    if (tweet === '') {
      return;
    }
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
    <form className="factoryForm" onSubmit={onSubmit}>
      <div className="factoryInput_container">
        <input
          className="factoryInput_input"
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="What's happening?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput_arrow" />
      </div>
      <label htmlFor="attach-file" className="factoryInput_label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      {imageFile && (
        <div className="factoryForm_image">
          <img
            src={imageFile}
            alt="imageFile"
            style={{
              backgroundImage: imageFile,
            }}
          />
          <div className="factoryForm_clear" onClick={onClearImageFile}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
}

export default TweetFactory;
