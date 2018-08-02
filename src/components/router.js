import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Client from './client';

const Router = () => (
    
    <BrowserRouter>

        <Switch>
            <Route path="/" component={Client} exact />
            <Route path="/:category/:product" component={Client} exact />
        </Switch>

    </BrowserRouter>

);

export default Router;