import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Splash from './splash';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={Splash} />
    </Switch>
);

export default App;