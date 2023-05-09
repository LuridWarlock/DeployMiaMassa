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
        <Route basename="/" Component={FrontPage} />
        <Route basename="/"administrador" Component={Administrador} />
      </Routes>
    </Router>
  );
}

export default App;
