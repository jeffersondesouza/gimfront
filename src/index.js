import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Artigo from './artigos/Artigo';
import Artigos from './artigos/Artigos';

import {Router, Route, browserHistory} from 'react-router';

import './index.css';



ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="" component={App}>
        <Router path="/" component={Artigos} />
        <Router path="/artigo/:id" component={Artigo} />
    </Route>
  </Router>),
  document.getElementById('root')
);
