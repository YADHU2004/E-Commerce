import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuCircleUser } from "react-icons/lu";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EComm</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Product
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Men</a></li>
            <li><a className="dropdown-item" href="#">Women</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>    
      </ul>
      <div style={{position:"relative",display:"flex",justifyContent:"space-between",gap:"40px"}}>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <div style={{color:"white",position:"relative",display:"flex",gap:"15px"}}>
        <FiShoppingCart size={25}/>
        <LuCircleUser size={25}/>      
      </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Header;