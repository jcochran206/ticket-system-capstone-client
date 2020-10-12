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
                <div className="box-preview">
                    <h6>Service</h6>
                    <h2>Customer Support</h2>
                </div>
                <div className="box-info">
                    <h2>Remote Customer Service</h2>
                    <p>LeafDesk provides remote customer service techs available around the clock to assist with your needs</p>
                    <button class="btn-info">Read More</button>
                </div>
            </div>

            <div className="box">
                <div className="box-preview">
                    <h6>Coming Soon</h6>
                    <h2>Asset Support</h2>
                </div>
                <div className="box-info">
                    <h2>Asset Management Service </h2>
                    <p>LeafDesk provides asset managment with remote customer service. Providing you one location for all your assets</p>
                    <button class="btn-info">Read More</button>
                </div>
            </div>

            <div className="box">
                <div className="box-preview">
                    <h6>Coming Soon</h6>
                    <h2>Dashboards</h2>
                </div>
                <div className="box-info">
                    <h2>Dashboard Service </h2>
                    <p>LeafDesk provides you with more stats and health of your assets and who is on the task</p>
                    <button class="btn-info">Read More</button>
                </div>
            </div>
        </div>
        
    </div>
    )
}