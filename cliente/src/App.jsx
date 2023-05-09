import React from 'react'
import {
  HashRouter as Router,
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
        <Route exact path="/" Component={FrontPage} />
        <Route exact path="/administrador" Component={Administrador} />
      </Routes>
    </Router>
  );
}

export default App;
