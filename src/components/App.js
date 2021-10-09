import React, { useEffect, useState } from 'react';
import Router from 'components/Router';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isSignIn, setisSignIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setisSignIn(true);
      } else {
        setisSignIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <Router isSignIn={isSignIn} /> : 'Initializing...'}
      <footer>&copy; {new Date().getFullYear()} Twitter-Clone</footer>
    </>
  );
}

export default App;
