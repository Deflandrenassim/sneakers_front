import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inscription from './container/Connect/Inscription';
import Login from './container/Connect/Login';
import { Header } from './container/header/Header';
import PageSneakers from './container/Page/PageSneakers';
import PageHome from './container/Page/PageHome';
import Footer from './container/footer/Footer';
import PageComment from './container/Page/PageComment';
import AuthProvider from './authContext/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/comment/:id" element={<PageComment />} />
              <Route exact path="/sneakers" element={<PageSneakers />} />
              <Route exact path="/" element={<PageHome />} />
              <Route exact path="/inscription" element={<Inscription />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
