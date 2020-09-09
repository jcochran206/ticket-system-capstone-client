import React from 'react';
import ReactDom from 'react-dom';
// import {Route, Switch, Link} from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/footer';
import Hero from './components/Sections/Hero/hero';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
