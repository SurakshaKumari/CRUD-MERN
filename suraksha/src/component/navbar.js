import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='mb-5'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <NavLink to={'/'}><a className="navbar-brand" href="#">Home</a></NavLink> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink to="/register"> <a className="nav-link active" aria-current="page" href="#">Register</a> </NavLink>
        </li>
       
       
      
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>
  )
}

export default Navbar;