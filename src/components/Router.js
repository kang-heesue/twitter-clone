import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';

function Router({ isSignIn, userObj }) {
  return (
    <HashRouter>
      {isSignIn && <Nav />}
      <Switch>
        {isSignIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
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
