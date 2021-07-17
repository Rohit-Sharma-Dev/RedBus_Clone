import React, { Fragment } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import Promise from '../../images/promise.png';
import safety_img from '../../images/safetyplus.svg';
import Customer from '../../images/customer_care.png';
import Fare from '../../images/lowest_Fare.png';
import Benefit from '../../images/benefits.png';


const promise = () => {
  return (
    <Fragment>
      <div className='card mt-5 promise'>
        <div className='card-body'>
          <div className='col-12 '>
            <img src={Promise} alt="image_promise" className='promise_img' />
            <h2 className='text-center'>WE PROMISE TO DELIVER</h2>
            <div className='container-fluid d-flex '>
            <div className="row mb-5 mt-4">
                <div className='card col-md-3'>{/* style="width: 18rem;" */}
                    <img className='card-img-promise-top my-3' alt="image_123" src={safety_img} />
                    <div className='card-body'>
                    <h5 className='card-title text-center'>Safety</h5>
                    <p className='card-text text-center'>
                    With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.
                    </p>
                   
                    </div>
                </div>


                {/* 2nd */}

                <div className='card col-md-3'>{/* style="width: 18rem;" */}
                    <img className='card-img-promise-top my-3' alt="image_12" src={Customer} />
                    <div className='card-body'>
                    <h5 className='card-title text-center'>SUPERIOR CUSTOMER SERVICE</h5>
                    <p className='card-text text-center'>
                    We put our experience and relationships to good use and are available to solve your travel issues.
                    </p>
                    </div>
                </div>


                {/*  3  */}

                <div className='card col-md-3'>{/* style="width: 18rem;" */}
                    <img className='card-img-promise-top my-3' alt="image_123" src={Fare} />
                    <div className='card-body'>
                    <h5 className='card-title text-center'>LOWEST PRICES</h5>
                    <p className='card-text text-center'>
                    We always give you the lowest price with the best partner offers.
                    </p>
                    </div>
                </div>

                {/* 4 */}

                <div className='card col-md-3'>{/* style="width: 18rem;" */}
                    <img className='card-img-promise-top my-4' alt="image_1234" src={Benefit} />
                    <div className='card-body'>
                    <h5 className='card-title text-center'>UNMATCHED BENEFITS</h5>
                    <p className='card-text text-center'>
                    We take care of your travel beyond ticketing by providing you with innovative and unique benefits.
                    </p>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default promise;
