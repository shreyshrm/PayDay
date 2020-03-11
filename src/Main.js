import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import StatementPage from './Statement';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path ='/statement' component={StatementPage}></Route>
    </Switch>
  );
}

export default Main;