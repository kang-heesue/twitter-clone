import React, { useEffect, useState } from 'react';
import Router from 'components/Router';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [userData, setUserData] = useState(null);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserData({
      displayName: user.displayName,
      uid: user.uid,
    });
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserData({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserData(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Router
          isSignIn={Boolean(userData)}
          userData={userData}
          refreshUser={refreshUser}
        />
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;
