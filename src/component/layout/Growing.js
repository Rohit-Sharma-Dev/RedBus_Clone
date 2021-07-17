import React, { Fragment } from 'react';

export const Growing = () => {
  return (
    <Fragment>
      <div className='col-12'>
        <h2 className='mt-5  text-center'> THE NUMBERS ARE GROWING!</h2>
        <div className='container mb-5 global-content d-flex justify-content-around '>
          <div className="row justify-content-around">

          <div className='card col-md-3'>
            <div className='card-body'>
              <p className='card-text text-center'>CUSTOMERS</p>
              <h2 className="text-center text-danger">36 M</h2>
              <p className='card-text text-center'>
                redBus is trusted by over 36 million happy customers globally
              </p>
            </div>
          </div>

          {/* 2 */}


          <div className='card col-md-3 '>
            <div className='card-body'>
              <p className='card-text text-center'>OPERATORS</p>
              <h2 className="text-center text-danger">3500</h2>
              <p className='card-text text-center'>
              network of over 3500 bus operators worldwide
              </p>
            </div>
          </div>


          {/* 3 */}

          <div className='card col-md-3'>
            <div className='card-body'>
              <p className='card-text text-center'>BUS TICKETS</p>
              <h2 className="text-center text-danger">220+ M</h2>
              <p className='card-text text-center'>
              Over 220 million trips booked using redBus
              </p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Growing;
