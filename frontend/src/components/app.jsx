import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';

import ImgurContainer from './imgur/imgur_container'
import Splash from './splash';

const App = () => (
  <Switch>
    {/* <AuthRoute exact path="/" component={Splash} /> */}
    <AuthRoute exact path="/" component={ImgurContainer} />
  </Switch>
);

export default App;