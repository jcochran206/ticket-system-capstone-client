import React from 'react';


export default function HowTo() {
    return(
        <div className="HowTo">
            <div className="title">
                <h1>LeafDesk App</h1>
            </div>
            <br/>
            <div className="step-container"> 
                <div className="steps">
                    <h2>How to use the application</h2>
                    <ol>
                        <li>Sign in</li>
                        <li>Go to tickets section</li>
                        <li>Add a ticket by clicking the Add Button</li>
                        <li>Enter text in required fields </li>
                        <li>Click the submit button </li>
                        <li>Review ticket is in list</li>
                    </ol>
                </div>
                <div className="steps">
                    <h2>How to delete</h2>
                    <ul>
                        <li>Sign in</li>
                        <li>Go to tickets section</li>
                        <li>Review Table of items</li>
                        <li>Click the delete button to remove unwanted item</li>
                    </ul>
                </div>
                <div className="steps">
                    <h2>How to update</h2>
                    <ul>
                        <li>Sign in</li>
                        <li>Go to tickets section</li>
                        <li>Review Table of items</li>
                        <li>Click the update button to update item</li>
                        <li>fill in text</li>
                        <li>submit</li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <h2>Key Features</h2>
                <span> * </span>
                <h2>Customer Support</h2>
                <p>This app allows users to input tickets in to the system while technicians review and resolve their issues</p>
                <br/>
                <h2>Coming Soon Features</h2>
                <span> * </span>
                <h3>Asset management and support</h3>
                <p>This feature will allow the user to store is asset information in our database and have the latest information requirements for their device</p>
                <br/> 
                <h3>Admin Dashboards</h3>
                <p>This feature will allow tech to see that amount of tickets, various types of issues, and much more</p>
            </div>
        </div>
    )
}