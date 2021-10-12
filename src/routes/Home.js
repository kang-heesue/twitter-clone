import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'fbase';
import {
  addDoc,
  query,
  collection,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Tweet from 'components/Tweet';

function Home({ userObj }) {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const [imageFile, setImageFile] = useState('');

  useEffect(() => {
    const dbTweets = query(
      collection(dbService, 'tweets'),
      orderBy('createdAt', 'desc'),
    );
    onSnapshot(dbTweets, (snapshot) => {
      const tweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArr);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    let uploadURL = '';
    if (imageFile !== '') {
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const uploadFile = await uploadBytes(fileRef, imageFile, 'data_url');
      uploadURL = await getDownloadURL(uploadFile.ref);
    }
    await addDoc(collection(dbService, 'tweets'), {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
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
    <div>
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
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
