import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className='contact mt-2'>
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="instruction mt-5">
                        <h2 className='fw-bold fs-1'>Let us handle your <br /> project, professionally.</h2>
                        <p className='mt-5' style={{color:"#707070"}}>With well written codes, we build amazing apps for all <br />
                         platforms, mobile and web apps in general.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-form mt-5 pt-3">
                        <form className='contact-input'>
                          <input type="email" style={{outline:"none !important"}} className='form-control p-3 rounded-0 border-0 contact-input'  placeholder='Your Email Address'/><br />
                          <input type="text" className='form-control p-3 rounded-0 border-0' placeholder='Your Name/Company Name'/><br />
                          <textarea name="" className='form-control rounded-0 border-0' placeholder='Your Message' id="" cols="30" rows="8"></textarea>
                          <input type="submit" value="Send" className='submit-btn fw-bold rounded' />
                        </form>
                    </div>
                </div>
            </div>
          </div>
       </section>
    );
};

export default Contact;