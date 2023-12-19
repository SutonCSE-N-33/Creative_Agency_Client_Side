import React, { useEffect, useState } from 'react';
import './CustomerServiceList.css';
import service1 from '../../../../Assets/Icons/service1.png';
import service2 from '../../../../Assets/Icons/service2.png';
const CustomerServiceList = () => {
    const [serviceList,setServiceList] = useState([]);

   useEffect(()=>{
       fetch('http://localhost:5000/getOrder')
       .then(res =>res.json())
       .then(data =>{
           setServiceList(data)
       })
   },[])
    return (
        <section className='service-list w-75 ps-3 pt-4'>
          <div className="container-fluid">
            <div className="row">
            {
                serviceList.map(service =>{
                       return <div className="col-md-6">
                       <div className="service-type p-3 mt-3 rounded-2">
                       <div className="d-flex justify-content-between">
                       <img src={service.image} alt="" width="60px" />
                       <button className='btn btn-info p-2 confirm-btn mt-2 fw-semibold'>{service.response}</button>
                       </div>
                       <h5 className='mt-2 fw-semibold'>{service.course}</h5>
                       <p className='mt-3'>{service.details}</p>
                       </div>
                   </div>
                })
            }     
            </div>
          </div>
        </section>
    );
};

export default CustomerServiceList;