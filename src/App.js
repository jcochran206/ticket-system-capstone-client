import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
//landing page components
import Hero from './components/Sections/Hero/hero';
import HowTo from './components/Sections/HowTo/howTo';
import Service from './components/Sections/Services/service';
import Login from './components/Login/login';
import Nav from './components/Nav/nav'; 
import Footer from './components/Footer/footer';
import SignUp from './components/SignupForm/signUpForm';
import Error from './components/Sections/Error/error';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
       <Switch>
          <Route exact path='/' component={Hero} />
          <Route path='/hero/:howto' component={HowTo} />
          <Route path="/hero/:services" component={Service} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
