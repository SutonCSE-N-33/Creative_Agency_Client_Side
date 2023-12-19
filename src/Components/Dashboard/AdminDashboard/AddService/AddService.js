import React, { useState } from 'react';
import './AddService.css';
import Swal from 'sweetalert2';
const AddService = () => {
  const [photo,setPhoto] = useState()
  const [services,setServices] = useState({
        title:"",
        description:""
  })

  const handleInput = e =>{
    const newServices = {...services};
    newServices[e.target.name] = e.target.value;
    setServices(newServices)
  }

  const handleFile = e =>{
    const image = e.target.files[0];
    setPhoto(image)
  }

  const handleForm = (e) =>{
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
        const doc = {...services}
        doc.image = image;
        fetch('http://localhost:5000/addService',{
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
        <section className="addService pt-3 w-75">
           <div className="addService-form w-100 rounded-3 ms-3 p-3">
             <form action="" className='w-50'>
                <div className="d-flex justify-content-between">
                   <div>
                     <label htmlFor="" className='fw-semibold fs-5'>Service Title</label>
                     <input type="text" name="title" onBlur={handleInput} className='form-control' placeholder='Tile' />
                   </div>
                   <div className='ms-2'>
                     <label htmlFor="" className='fw-semibold fs-5'>Icon</label>
                     <input type="file" onChange={handleFile} className='form-control'/>
                   </div>
                </div><br />
                <label htmlFor="" className='fw-semibold fs-5'>Description</label><br />
                <textarea onBlur={handleInput} name="description" className='form-control' placeholder='Description' id="" cols="10" rows="5"></textarea>
             </form>
           </div>
           <button onClick={handleForm} className='btn btn-info add-btn fw-semibold'>Submit</button>
        </section>
    );
};

export default AddService;