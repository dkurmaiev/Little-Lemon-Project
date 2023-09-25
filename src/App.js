
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


function App() {
  return (
    <Router>  
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
