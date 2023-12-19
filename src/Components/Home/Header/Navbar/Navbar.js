import React from 'react';
import './Navbar.css';
import logo from '../../../../Assets/Logo/logo.png';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const history = useNavigate();
  const goToLogin = () =>{
    history('/login')
  }
    return (
        <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo} alt="" width="150px" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link Login-btn" href="#" onClick={goToLogin}>Login</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;