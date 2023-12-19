import React, { useState } from 'react';
import './CustomerOrder.css';
import Swal from 'sweetalert2';
const CustomerOrder = () => {
     const [photo,setPhoto] = useState()
     const [order,setOrder] = useState({
        name:"",
        email:"",
        courseName:"",
        details:"",
        price:""
     })
    
     const takeInput = (e) =>{
        const newOrder = {...order};
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder)
     }

     const handleFile = (e) =>{
      const newPhoto = e.target.files[0];
      setPhoto(newPhoto)
     }
     
     const handleFormData = e =>{
      const image_key = '70944de7b2a2c0c13dd9bc6a3f7489a6';
      e.preventDefault();
      const formData = new FormData();
      formData.append('image',photo);
      fetch(`https://api.imgbb.com/1/upload?key=${image_key}`,{
        method:"POST",
        body:formData
      })
      .then(res => res.json())
      .then(data => {
        if(data.success === true){
          const image = data.data.display_url;
          const doc = {
            name:order.name,
            email:order.email,
            course:order.courseName,
            details:order.details,
            price:order.price,
            image:image,
            response:'Pending'
          }
          fetch('http://localhost:5000/addOrder',{
            method:"POST",
            headers:{
              'accept':'application/json',
              'content-type':'application/json'
            },
            body:JSON.stringify(doc)
          })
          .then(res => res.json())
          .then(data =>{
             if(data === true){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Order Completed',
                showConfirmButton: false,
                timer: 1500
              })
             }
          })
        }
      })
     }
    return (
      <section>
         <div className="order-form ms-4 pt-4">
           <form onSubmit={handleFormData}>
              <input type="text" onBlur={takeInput} name="name" className='form-control p-3' placeholder='Your Name/Company Name' /><br />
              <input type="email" onBlur={takeInput} name="email" className='form-control p-3' placeholder='Email' /><br />
              <input type="text" onBlur={takeInput} name="courseName" className='form-control p-3' placeholder='Course Name' /><br />
              <textarea name="details" onBlur={takeInput} id="" cols="10" rows="3" className='form-control' placeholder='Project Details'></textarea><br />
              <div className='d-flex'><input type="text" onBlur={takeInput} name="price" className='form-control p-3 price' placeholder='Price' /> <input type="file" onChange={handleFile} className='p-3' placeholder='Upload Project File' /></div>
              <input type="submit" value="Send" className='btn btn-dark ps-4 pe-4 mt-2 fw-semibold' />
           </form>
         </div>
      </section>
    );
};

export default CustomerOrder;