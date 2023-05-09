import React from 'react'
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import FrontPage from './pages/FrontPage'
import Administrador from './pages/Administrador';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/administrador" component={Administrador} />
      </Routes>
    </Router>
  );
}

export default App;
