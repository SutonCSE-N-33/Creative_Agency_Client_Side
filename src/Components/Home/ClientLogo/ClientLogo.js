import React from 'react';
import './ClientLogo.css';
import air from '../../../Assets/Logo/airbnb.png';
import google from '../../../Assets/Logo/google.png';
import netflix from '../../../Assets/Logo/netflix.png';
import slack from '../../../Assets/Logo/slack.png';
import uber from '../../../Assets/Logo/uber.png';
const ClientLogo = () => {
    return (
        <section className='client-logo'>
           <div className="container">
              <div className="row d-flex">
                <div className="col-sm-2 col-2">
                    <div className="client-image">
                      <img src={google} alt="" width="100px" />
                    </div>
                </div>
                <div className="col-md-2 col-2">
                    <div className="client-image">
                       <img src={air} alt="" width="100px" />
                    </div>
                </div>
                <div className="col-md-2 col-2">
                    <div className="client-image">
                       <img src={netflix} alt="" className='netflix' width="100px" />
                    </div>
                </div>
                <div className="col-md-2 col-2">
                    <div className="client-image">
                       <img src={slack} alt="" width="100px" />
                    </div>
                </div>
                <div className="col-md-2 col-2">
                    <div className="client-image">
                       <img src={uber} alt="" className='uber' width="100px" />
                    </div>
                </div>
              </div>
           </div>
        </section>
    );
};

export default ClientLogo;