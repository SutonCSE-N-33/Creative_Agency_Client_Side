import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './MakeAdmin.css';
import Swal from 'sweetalert2';
const MakeAdmin = () => {
  const [admin,setAdmin] = useState({
    email:""
  })
  console.log(admin)
  const takeInput = e =>{
    const newAdmin = {...admin};
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  }

  const handleSubmit = e =>{
    e.preventDefault();
    fetch('http://localhost:5000/addAdmin',{
      method:"POST",
      headers:{
        'accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(admin)
    })
    .then(res => res.json())
        .then(data => {
          if(data === true){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Admin made Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  }
    return (
        <section className='pt-3 w-75'>
          <div className="make-admin w-100 rounded-3 ms-3 p-3">
            <form onSubmit={handleSubmit} className='w-75'>
              <label htmlFor="" className='fw-semibold fs-4'>Email</label><br />
              <div className="d-flex">
              <input type="email" name="email" onBlur={takeInput} className='form-control' placeholder='Email' />
              <input type="submit" value="Submit" className='btn btn-success' />
              </div>
            </form>
          </div>
        </section>
    );
};

export default MakeAdmin;