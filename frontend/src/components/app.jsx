import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';

import SplashContainer from './splash_container';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
);

export default App;