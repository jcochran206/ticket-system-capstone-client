import React, {Component} from 'react';
import '../Header/header.css';
import { Link } from 'react-router-dom';


export default function Header() {
      return (
        <div className="nav">
            <div className="logo">
                LOGO Here
            </div>
            <ul className="navLinks">
                <Link to="/">
                    Home
                </Link>
                <Link to="/">
                    About
                </Link>
                <Link to="/">
                    Login
                </Link>
            </ul>
         </div>
      )
    }