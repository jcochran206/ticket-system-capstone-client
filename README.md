# Ticket System Capstone
This project is a ticketing system that allows users to post tickets.  Techs will answer the system tickets and provide customers status on work conducted and close out system tickets.  

## Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories (done)
This app is for four types of users: a visitor, tech, customer, and Admin

#### (Example) Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it



### Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)

## Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)

## Functionality (done)
The app's functionality includes:
* Every User has the ability to create an account
* Customers can create tickets in system (notes)
* Customers can view tickets they have created
* Customers can modify tickets they have created
* Customers can delete tickets they have created
* Techs can view a list of tickets in system based on categories
* Techs can select from list and assign ticket to their work queue 
* Techs can modify selected tickets they are are working on 
* Tech can close a ticket when completed with the required work
* Admins (supervisors) can create Tech accounts 
* Admins can view a list of techs in system
* Admins can delete tickets 
* Admins can modify priorities of tickets
* Admins can assign tickets to techs
* Admins can add customers into site if needed


## Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -

## Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


## API Documentation (to do later)
API Documentation details:
* (Example) get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality

## How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test