import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sneaker from './component/Sneaker';
import Inscription from './container/Connect/Inscription';
import Login from './container/Connect/Login';
import { Header } from './component/header/Header';
import PageSneakers from './container/Page/PageSneakers';
import PageHome from './container/Page/PageHome';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">

          <Routes>
            <Route exact path="/comment/:id" element={<Sneaker />} />
            <Route exact path="/sneakers" element={<PageSneakers />} />
            <Route exact path="/" element={<PageHome />} />
            <Route exact path="/inscription" element={<Inscription />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
