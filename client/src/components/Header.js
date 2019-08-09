import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'
const Header = () => {
  return (
<nav className="navbar  navbar-expand-md bg-light justify-content-between" data-spy="affix" data-offset-top="197"> 
    <div className="container-fluid">
      
        <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <ul className="navbar-nav active">
                
                    <div className="nav-link active pl-0">Menu <span className="sr-only">Menu</span></div>
</ul>
        </div>
        <Link to="/" className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">We are Cocomposte</Link>
        <div className="navbar-collapse collapse dual-nav w-50 order-2">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><div className="nav-link" href="">Suggestions</div></li>
                <li className="nav-item"><div className="nav-link" href="">Contacts</div></li>
            </ul>
        </div>
    </div>
</nav>
  )
}
export default Header