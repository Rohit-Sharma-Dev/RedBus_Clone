import React, { Fragment } from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';

export const ticket = () => {
  return (
    <Fragment>
      <div className='ticket my-5'>
      
        
          <div className='form-row my-5 m-5'>
            <div className='col'>
           
              <input
                type='text'
                className='form-control '
                placeholder='     from'
              />
              
            </div>
            <div className='col'>
            
              <input
                type='text'
                className='form-control '
                placeholder='     to'
              />
            </div>
            <div className='col'>
              <input type='Date' className='form-control' placeholder='to' />
            </div>
            <div className='btn '>
              <button className="btn-danger ">Search</button>
            </div>
          </div>
      
      </div>
    </Fragment>
  );
};

export default ticket