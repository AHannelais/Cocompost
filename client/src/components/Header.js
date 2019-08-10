import React from 'react'
import { Link } from "react-router-dom"
import DropdownMenu from "./DropdownMenu"
import './Header.css'
const Header = () => {
  return (
<nav className="navbar navbar-expand-sm  bg-light " role="navigation" > 
                    <div className="navbar-brand ">
                    
                      <DropdownMenu/>
                      
                      </div>     
     <Link to="/" className="navbar-brand mx-auto h1 logo" ><p>We are Cocomposte</p></Link>
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><div className="nav-link" href="">Suggestions</div></li>
                <li className="nav-item"><div className="nav-link" href="">Contacts</div></li>
            </ul>
        </div>
    
</nav>
  )
}
export default Header