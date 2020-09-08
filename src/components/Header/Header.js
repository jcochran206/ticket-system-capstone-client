import React, {Component} from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'


export default function Header() {
      return (
        <div className="nav">
            <div className="logo">
                LOGO
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