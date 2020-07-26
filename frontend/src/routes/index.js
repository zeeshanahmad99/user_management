import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CreateUser from '../pages/CreateUser';
import Home from '../pages/Home';
import UpdateUser from '../pages/UpdateUser';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/update_user/:id" component={UpdateUser} />
      <Route path="/new_user" component={CreateUser} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
