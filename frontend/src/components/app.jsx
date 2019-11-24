import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';

import SplashContainer from './splash_container';

const App = () => (
    <Switch>
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/" component={SplashContainer} />
    </Switch>
);

export default App;