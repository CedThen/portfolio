import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Projects, AboutMe } from './components/';
import { routeNames } from './components/shared'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routeNames.HOME} element={<Home />} />
        <Route path={routeNames.PROJECTS} element={<Projects />} />
        <Route path={routeNames.ABOUTME} element={<AboutMe />} />
      </Routes>
    </Router>
  )
};

export default App;
