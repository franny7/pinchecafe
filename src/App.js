import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Nav';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
