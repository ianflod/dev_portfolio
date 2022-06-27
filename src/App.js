import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import './App.css';

function App() {


  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/portfolio" element={< Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
