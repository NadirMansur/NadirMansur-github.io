import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import data from './data/residents.json';
import Confirmation from './pages/Confirmation';
import FloorSelector from './pages/FloorSelector';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/floor/:floor" element={<FloorSelector residents={data.residents} />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
