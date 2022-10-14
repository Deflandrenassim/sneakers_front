import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sneakers from './container/Sneakers';
import Sneaker from './component/Sneaker';
import Inscription from './container/Connect/Inscription';
import Login from './container/Connect/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/comment/:id" element={<Sneaker />} />
          <Route exact path="/" element={<Sneakers />} />
          <Route exact path="/inscription" element={<Inscription />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
