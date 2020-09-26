import React, {Component} from 'react';
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
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup">
                        Signup
                    </Link>
                    <Link to="/tickets">
                        tickets
                    </Link>
                </ul>
             </div>
          )
      }
    }