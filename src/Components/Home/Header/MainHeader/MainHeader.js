import React from 'react';
import './MainHeader.css';
import frame from '../../../../Assets/Images/Frame.png';
const MainHeader = () => {
    return (
        <main className='main-header'>
              <div className="row main-header-row">
                  <div className="col-md-5 col-sm-5">
                         <div className="text-box">
                            <h1>Let’s Grow Your <br /> 
                            Brand To The  <br />
                            Next Level</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur <br />
                             adipiscing elit. Purus commodo ipsum duis <br />
                              laoreet maecenas. Feugiat 
                            </p>
                            <button type="button" class="btn btn-dark hire-btn">Hire us</button>
                         </div>
                  </div>
                  <div className="col-md-7 col-sm-7">
                      <div className="frame-image">
                         <img src={frame} alt="" class="img-fluid" width="550px" />
                      </div>
                  </div>
              </div>
        </main>
    );
};

export default MainHeader;