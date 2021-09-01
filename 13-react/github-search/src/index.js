import React from 'react';
import ReactDOM from 'react-dom';

// TODO: compare with browserRouter
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// Not a component! Not a function, not a class. This is just some JSX.
const Routes = (
  <Router>
    <Route exact path="/" component={ Home } />
    <Route exact path="/search" component={ Search } />
    <Route path="/details/:username" component={ Profile } />
  </Router>
);

ReactDOM.render(Routes, document.body);
