import React, { Fragment } from 'react';

import Business from '../../images/Business_Standard1.png';
import Brand from '../../images/Brand_Trust_Report.png';
import Eye_for_Travel from '../../images/Eye_for_Travel1.png';

const Award = () => {
  return (
    <Fragment>
      <div className='col-12'>
      <h2 className='text-center my-4'>AWARDS & RECOGNITION</h2>
        <div className='container d-flex justify-content-around'>
          <div className="row">

          <div className='card awards '>
              <img className='card-img-award-top' alt="Award-1" src={Business}  />
              <div className='card-body'>
                <p className='card-text my-4'>
                 Most Inovative Company
                </p>
              </div>
            </div>

            {/* 2 */}

            <div className='card awards' >
              <img className='card-img-award-top' alt="Award-2" src={Brand}  />
              <div className='card-body'>
                <p className='card-text my-4'>
                Most Inovative Brand
                </p>
              </div>
            </div>

            {/*  3 */}

            <div className='card awards' >
              <img className='card-img-award-top text-center' alt="Award-3" src={Eye_for_Travel}  />
              <div className='card-body'>
                <p className='card-text my-4'>
                  Mobile Inovative Award
                </p>
              </div>
            </div>

          </div>
            
          
            


          </div>
        
      </div>
    </Fragment>
  );
};

export default Award