import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    render(){
        return (
            <div className="nav">
                <div className="logo">
                    LOGO Here
                </div>
                <ul className="navLinks">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/hero/:howto">
                        How To
                    </Link>
                    <Link to="/hero/:services">
                        Services
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup">
                        Signup
                    </Link>
                </ul>
             </div>
          )
      }
    }