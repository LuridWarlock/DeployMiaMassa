import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom';
import "./index.css"

ReactDOM.render(
  <Router>
    <Route exact path="/" Component={App} />
  </Router>,
  document.getElementById('root')
);
