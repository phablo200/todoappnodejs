import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';


export default props => (
    <Router history={browserHistory}>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos" />
    </Router>
);
