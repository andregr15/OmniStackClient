import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact Component={Feed}/>
      <Route path="/new" Component={New}/>
    </Switch>
  );
}

export default Routes;