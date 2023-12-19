import React, { useContext,useEffect, useState} from 'react';
import { MyContext } from '../../App';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import './Dashboard.css';
const Dashboard = () => {
    const [loggedUser,setLoggedUser] = useContext(MyContext);
  
    const [admin,setAdmin] = useState([])
    
    useEffect(()=>{
           fetch('http://localhost:5000/getAdmin')
           .then(res => res.json())
           .then(data =>{
            setAdmin(data)
           })
    },[])

    const selectAdmin = admin.find(findAdmin => findAdmin.email === loggedUser.email);
    const selectDashboard = selectAdmin?<AdminDashboard name={loggedUser.name}></AdminDashboard>:<CustomerDashboard name={loggedUser.name}></CustomerDashboard>
    return (
        <div>
            {
                selectDashboard
            }
        </div>
    );
};

export default Dashboard;