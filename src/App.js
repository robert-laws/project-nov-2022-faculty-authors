import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Publications, Publication } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/publication/:id' element={<Publication />} />
      </Routes>
    </Router>
  );
}

export default App;
