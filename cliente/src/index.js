import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"

ReactDOM.render(
 <Router>
    <Route path="/" Component={App} />
 </Router>,
  document.getElementById('root')
);
