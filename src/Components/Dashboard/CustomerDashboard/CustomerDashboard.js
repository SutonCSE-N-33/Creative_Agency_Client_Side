import React, { useState } from 'react';
import './CustomerDashboard.css';
import CustomerOrder from './CustomerOrder/CustomerOrder';
import CustomerReview from './CustomerReview/CustomerReview';
import CustomerServiceList from './CustomerServiceList/CustomerServiceList';
import CustomerSidebar from './CustomerSidebar/CustomerSidebar';
import logo from '../../../Assets/Logo/logo.png';
const CustomerDashboard = ({name}) => {
    const [categories,setCategories] = useState('Order')
    const handleCategories = (toCategories) =>{
        setCategories(toCategories)
    }
    let customerWork;
    if(categories === 'Order'){
        customerWork = <CustomerOrder></CustomerOrder>
    }else if(categories === 'Service List'){
        customerWork = <CustomerServiceList></CustomerServiceList>
    }else if(categories === 'Review'){
        customerWork = <CustomerReview></CustomerReview>
    }
    return (
        <div className='customerDashboard'>
            <div className="container-fluid mt-4 mb-3">
              <div className="row">
              <div className="col-md-2 col-12">
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
                <div className="col-md-2 col-12">
                   <CustomerSidebar handleCategories={handleCategories}></CustomerSidebar>
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

export default CustomerDashboard;