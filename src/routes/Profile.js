import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { authService, dbService } from 'fbase';
import { query, collection, where, orderBy, getDocs } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

function Profile({ userData, refreshUser }) {
  const history = useHistory();
  const [newName, setNewName] = useState(userData.displayName);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userData.displayName !== newName) {
      await updateProfile(authService.currentUser, {
        displayName: newName,
      });
      refreshUser();
    }
  };

  const onLogoutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const getMyTweets = async () => {
    const myTweets = query(
      collection(dbService, 'tweets'),
      where('creatorId', '==', userData.uid),
      orderBy('createdAt', 'desc'),
    );
    const getTweets = await getDocs(myTweets);
    console.log(getTweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMyTweets();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          value={newName}
          onChange={onChange}
        />
        <input type="submit" placeholder="Update Profile" />
      </form>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
}

export default Profile;
