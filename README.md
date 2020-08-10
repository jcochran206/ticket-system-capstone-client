# Ticket System Capstone (LEAFDESK)
This project is a ticketing system that allows users to post tickets.  Techs will answer the system tickets and provide customers status on work conducted and close out system tickets.  

## Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories (done)
This app is for four types of users: a visitor, tech, customer, and Admin

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

#### Register Page
* as a visitor
* I want to register 
* so that I can use the application

#### Login Page
* as a visitor
* I want to login 
* so that I can use the application

#### Dashboard Page
* as a Registered User, Tech, Admin
* I want to view a list of items 
* so that I can have my issue fixed by remote tech 

#### Dashboard Page (Modify Ticket page)
* as an admin, tech 
* I want to assign ticket to myself or tech
* so I can work the ticket in the system until complete

#### Dashboard Page (Update ticket page)
* as an Admin, tech
* I want to modify the list of tickets
* so that I can fix errors in the ticket or raise the priority 

#### Dashboard Page (Delete ticket page)
* as an Admin, tech, registered user 
* I want to remove a ticket from the queue
* so it is removed from the list and database

#### Admin Portal Page
* as an Admin 
* I want to view all techs that are available
* so I can assign tickets on the overall list

#### Admin Portal page
* as an Admin
* I want to view the percentage of completed tickets
* so I can review the amount of tickets the team has closed 

#### New Ticket Page (create)
* as a Registered User, tech, admin
* I want to make a ticket 
* so that I can have my issue addressed by techs

#### New Tech Account Page
* as a tech (employee), admin
* I want to create an account in the system
* so I can work on assigned tickets 


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