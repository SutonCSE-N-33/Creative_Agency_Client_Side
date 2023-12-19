import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {MyContext } from '../../App';

const PrivateOutlet = () => {
    const [loggedUser,setLoggedUser] = useContext(MyContext);
    
      return loggedUser.email?<Outlet/>:<Navigate to="/login" />
};

export default PrivateOutlet;