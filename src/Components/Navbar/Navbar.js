import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
    return (
        <div>
    <nav class="navbar navbar-expand-lg main-menu">
  <div class="container-fluid">
    <Link to="/"><a style={{color:"white"}} class="navbar-brand" href="#">OMAR FARUK</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse menuBar" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
       
       <Link to='/'>
       <li class="nav-item">
          <a class="nav-link " href="#">Home</a>
        </li>
       </Link>
       
     <Link to="/about">
     <li class="nav-item">
          <a class="nav-link " href="">About</a>
        </li>
     </Link>

    
     
       <Link to='/project'>
       <li class="nav-item">
          <a class="nav-link " href="#">Project</a>
        </li>
       </Link>
       <Link to='/Blog'>
       <li class="nav-item">
          <a class="nav-link " href="#">Blog</a>
        </li>
       </Link>
       <Link to='/resume'>
       <li class="nav-item">
          <a class="nav-link " href="#">Resume</a>
        </li>
       </Link>
       <Link to="/contact">
     <li class="nav-item">
          <a class="nav-link " href="">Contact</a>
        </li>
     </Link>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;