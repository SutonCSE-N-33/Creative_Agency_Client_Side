import React, { useEffect, useState } from 'react';
import './AdminServiceList.css';
const AdminServiceList = () => {
   const [serviceList,setServiceList] = useState([]);

   useEffect(()=>{
       fetch('http://localhost:5000/getOrder')
       .then(res =>res.json())
       .then(data =>{
           setServiceList(data)
       })
   },[])
   
    return (
        <section className='service-list pt-4 ps-3'>
            <div className="serviceList-table p-3 mt-3 rounded-1">
               <table className='table'>
                  <thead >
                      <tr>
                      <th>Name</th>
                      <th>Email Id</th>
                      <th>Service</th>
                      <th>Project Details</th>
                      <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                     serviceList.map(service =>{
                       
                        const handleResponse = e =>{
                           const response = e.target.value;
                           const id = service._id;
                           const doc ={
                              name:service.name,
                              email:service.email,
                              course:service.course,
                              details:service.details,
                              price:service.price,
                              image:service.image,
                              response:response
                           }
                           fetch(`http://localhost:5000/updateOrder/${id}`,{
                              method:"PATCH",
                              headers:{
                                 'Accept':'application/json',
                                 'Content-Type':'application/json'
                              },
                              body:JSON.stringify(doc)
                           })
                        }
                               return <tr>
                               <td>{service.name}</td>
                               <td>{service.email}</td>
                               <td>{service.course}</td>
                               <td>{service.details}</td>
                               <td>
                               <select name="response" onChange={handleResponse} class="form-select" id="inputGroupSelect01">
                               <option value="">Select</option>
                               <option value="send">Send</option>
                               <option value="pending">Pending</option>
                             </select>
                               </td>
                            </tr>
                     })
                  }
                     
                  </tbody>
               </table>
            </div>
        </section>
    );
};

export default AdminServiceList;