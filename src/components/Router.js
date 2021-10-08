import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HashRouter>
      <Switch>
        {isLogin ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </HashRouter>
  );
}

export default Router;
