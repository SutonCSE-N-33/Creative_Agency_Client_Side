import React, { useEffect, useState } from 'react';
import './FeedbackArea.css';
const FeedbackArea = () => {
    const [feedback,setFeedback] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getFeedback')
        .then(res =>res.json())
        .then(data =>{
            setFeedback(data)
        })
    },[])
    return (
        <section className="feedback-area mt-5 mb-5" >
            <h4 className='fs-2 fw-semibold text-center pb-5'>Clients <span style={{color:"#7AB259"}}>Feedback</span></h4>
            <div className="container feedback-container mt-5">
                <div className="row">
                       {
                        feedback.map((review)=>{
                           return<div className="col-md-4">
                            <div className="feedback">
                            <div className="name-image d-flex mb-3">
                            <img src={review.image} alt="" width="50px"/>
                            <div className='ms-3'>
                              <h5 className='fw-bold'>{review.name}</h5>
                              <h6 className='fw-semibold'>{review.company}</h6>
                            </div>   
                     </div>
                        <p>{review.description}</p>
                            </div>
                            </div>
                        })
                       }
                </div>
            </div>
        </section>
    );
};

export default FeedbackArea;