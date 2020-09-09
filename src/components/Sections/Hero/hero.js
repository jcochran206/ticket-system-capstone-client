import React from 'react';
import { Link } from 'react-router-dom';
import '../../Sections/Hero/hero.css';

export default function Hero(){
    return(
        <div className="hero">
            <div className="banner">
            <h1>Customer Support and Asset management done right!</h1>
            <p>Looking for help managing your customers or assets We've got you covered</p>
            <Link to="/" className="btn-hero">Signup Now!</Link>
            </div>
        </div>
    )
}