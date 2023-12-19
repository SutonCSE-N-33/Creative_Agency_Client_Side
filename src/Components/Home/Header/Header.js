import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import bgImg from '../../../Assets/Images/Rectangle 274.png';
import MainHeader from './MainHeader/MainHeader';
const Header = () => {
    return (
       <header className="header" style={{backgroundImage:`url(${bgImg})`}}>
          <Navbar></Navbar>
          <MainHeader></MainHeader>
       </header>
    );
};

export default Header;