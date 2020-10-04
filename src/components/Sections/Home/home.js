import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
    return(
    <div className="wrapper">
        <div className="hero">
            <div className="banner">
            <h1>Customer Support and Asset management done right!</h1>
            <p>Looking for help managing your customers or assets We've got you covered</p>
            <Link to="/" className="btn-hero">Signup Now!</Link>
            </div>
        </div>
        <div className="HowTo">
            <div className="title">
                <h2>How To Use</h2>
            </div>
            <br/>
            <div className="">
                <p>content explaining information on how to use system goes here</p>
            </div>
        </div>
        <div className="service-list">
            <div className="box">
            <h2>Customer Service</h2>
            <p>LeafDesk provides remote customer service techs available around the clock to assist with your needs</p>
            </div>
            <div className="box">
            <h2>Coming Soon</h2>
            <p>LeafDesk provides asset managment with remote customer service. Allowing you one location to see all your assets</p>
            </div>
        </div>
        
    </div>
    )
}