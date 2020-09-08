import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'

class Header extends Component{
render(){
    return(
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
}

export default header;