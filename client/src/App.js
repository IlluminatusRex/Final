import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/views/Home/Home';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import CoursePage from './components/views/CoursePage/CoursePage';
import Cart from './components/views/Cart/Cart';
import Checkout from './components/views/Checkout/Checkout';
import Login from './components/features/Login/Login';
import Register from './components/features/Register/Register';
import OrderSentPage from './components/views/OrderSentPage/OrderSentPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/order/sent" element={<OrderSentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
