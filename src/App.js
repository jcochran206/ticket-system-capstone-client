import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={landingPage}/>
    </div>
  );
}

export default App;
