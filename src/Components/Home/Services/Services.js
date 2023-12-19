import React, { useEffect, useState } from 'react';
import './Services.css';
const Services = () => {
    const [services,setServices] = useState([]);
    console.log(services)
    useEffect(()=>{
        fetch('http://localhost:5000/getService')
        .then(res =>res.json())
        .then(data =>{
            setServices(data)
        })
    },[])
    return (
        <section className='services text-center mt-5 pb-5'>
          <h3 className='text-center pb-5 fw-semibold fs-1'>Provide awesome <span style={{color:"#7AB259"}}>services</span> </h3>
            <div className="container">
                <div className="row mt-2">
                    {
                        services.map(service =>{
                            return <div className="col-md-4 col-12">
                            <div className="service">
                               <img src={service.image} alt="" width="60px" />
                               <h5 className='mt-2 fw-semibold'>{service.title}</h5>
                               <p className='mt-3'>{service.description}</p>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;