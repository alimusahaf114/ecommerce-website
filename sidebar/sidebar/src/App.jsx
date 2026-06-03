import React from 'react';
import Navbar from './components/Navbar';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      <Routes>
        <Route path='/' ></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
