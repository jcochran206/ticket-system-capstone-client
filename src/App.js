import React from 'react';
import ReactDom from 'react-dom';
// import {Route, Switch, Link} from 'react-router-dom';
import Header from './components/Header/header'; 
import Footer from './components/Footer/footer';
import Hero from './components/Sections/Hero/hero';
import Service from './components/Sections/Services/service';
import HowTo from './components/Sections/HowTo/howTo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <HowTo />
      <Footer />
    </div>
  );
}

export default App;
