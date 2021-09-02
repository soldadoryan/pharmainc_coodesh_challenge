import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Customers from './pages/Customers';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Customers} />
    </Switch>
  );
}

export default Routes;