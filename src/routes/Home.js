import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import Tweet from 'components/Tweet';
import TweetFactory from 'components/TweetFactory';

function Home({ userData }) {
  const [tweets, setTweets] = useState([]);

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

  return (
    <div className="container">
      <TweetFactory userData={userData} />
      <div style={{ marginTop: 30 }}>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userData.uid}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
