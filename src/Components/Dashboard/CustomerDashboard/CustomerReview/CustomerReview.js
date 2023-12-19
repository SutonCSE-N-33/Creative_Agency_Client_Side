import React, { useState } from 'react';
import './CustomerReview.css';
import Swal from 'sweetalert2';
const CustomerReview = () => {
  const [photo,setPhoto] = useState();
  const [review,setReview] = useState({
    name:"",
    company:"",
    description:""
  })

  const handleInput = e =>{
   
     const newReview = {...review};
     newReview[e.target.name] = e.target.value;
     setReview(newReview)
  }
  const handleFile = e =>{
    const newPhoto = e.target.files[0];
    setPhoto(newPhoto)
  }
  const handleData = e =>{
    const image_key = '70944de7b2a2c0c13dd9bc6a3f7489a6';
      e.preventDefault();
      const formData = new FormData();
      formData.append('image',photo);
      fetch(`https://api.imgbb.com/1/upload?key=${image_key}`,{
        method:"POST",
        body:formData
      })
      .then(res => res.json())
      .then(data =>{
        if(data.success === true){
          const image = data.data.display_url;
          const doc = {
            name:review.name,
            company:review.company,
            description:review.description,
            image:image
          }
          fetch('http://localhost:5000/addReview',{
            method:"POST",
            headers:{
              'accept':'application/json',
              'content-type':'application/json'
            },
            body:JSON.stringify(doc)
          })
          .then(res => res.json())
          .then(data => {
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
        <div className="review-form w-50 ps-3 pt-5">
          <form onSubmit={handleData}>
            <input type="text" name="name" onBlur={handleInput} placeholder='Name' className='form-control p-3'/><br />
            <input type="text" name="company" onBlur={handleInput} placeholder='Company Name' className='form-control p-3'/><br />
            <textarea name="description" onBlur={handleInput} className='form-control' id="" cols="10" rows="3" placeholder='Description'></textarea><br />
            <input type="file" onChange={handleFile} />
            <input type="submit" value="Submit" className='btn btn-dark ms-5 submit-button' style={{marginLeft:"395px !important"}} />
          </form>
        </div>
        </section>
    );
};

export default CustomerReview;