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
  });

  return (
    <div className="container">
      <form className="profileForm" onSubmit={onSubmit}>
        <input
          className="formInput"
          type="text"
          placeholder="Display Name"
          value={newName}
          onChange={onChange}
          autoFocus
        />
        <input
          className="formBtn"
          type="submit"
          value="Update Profile"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logout" onClick={onLogoutClick}>
        Logout
      </span>
    </div>
  );
}

export default Profile;
