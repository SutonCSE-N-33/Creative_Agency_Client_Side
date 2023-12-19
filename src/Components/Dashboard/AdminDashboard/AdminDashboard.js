import React, { useState } from 'react';
import AddService from './AddService/AddService';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import logo from '../../../Assets/Logo/logo.png';

const AdminDashboard = ({name}) => {
    const [categories,setCategories] = useState('Service List')
    const handleCategories = (toCategories) =>{
        setCategories(toCategories)
    }
    let customerWork;
    if(categories === 'Service List'){
        customerWork = <AdminServiceList></AdminServiceList>
    }else if(categories === 'Add Service'){
        customerWork = <AddService></AddService>
    }else if(categories === 'Make Admin'){
        customerWork =<MakeAdmin></MakeAdmin>
    }
    return (
        <div>
        <div className="container-fluid mt-4 mb-3">
        <div className="row">
        <div className="col-md-2">
        <div className="ps-3 site-logo">
          <h5 style={{marginLeft:"20px"}} className="me-4"><img src={logo} width="150px" alt="" /></h5>
        </div>
        </div>
        <div className="col-md-7 col-4">
        <div>
        <h5>{categories}</h5>
        </div>
        </div>
        <div className="col-md-3 col-8">
        <div className='ps-4'>
        <h5 style={{marginLeft:"80px"}} className="me-4">{name}</h5>
        </div>
        </div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-2">
             <AdminSidebar handleCategories={handleCategories}></AdminSidebar>
          </div>

          <div className="col-md-10 col-12">
             <div className="customer-work" style={{backgroundColor:"#F4F7FC",height:"85vh"}}>
                {customerWork}
             </div>
          </div>
      </div>

        </div>
    );
};

export default AdminDashboard;


