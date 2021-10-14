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
        {isSignIn ? (
          <>
            <Route exact path="/">
              <Home userData={userData} />
            </Route>
            <Route exact path="/profile">
              <Profile userData={userData} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </HashRouter>
  );
}

export default Router;
