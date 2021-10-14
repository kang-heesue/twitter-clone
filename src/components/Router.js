import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';

function Router({ isSignIn, userData, refreshUser }) {
  return (
    <HashRouter>
      {isSignIn && <Nav userData={userData} />}
      <Switch>
        {!isSignIn ? (
          <Route exact path="/">
            <Auth />
          </Route>
        ) : (
          <>
            <div
              style={{
                maxWidth: 890,
                width: '100%',
                margin: '0 auto',
                marginTop: 80,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Route exact path="/">
                <Home userData={userData} />
              </Route>
              <Route exact path="/profile">
                <Profile userData={userData} refreshUser={refreshUser} />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </HashRouter>
  );
}

export default Router;
