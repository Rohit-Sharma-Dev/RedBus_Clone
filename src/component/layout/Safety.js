import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import safety_img from '../../images/safetyplus.svg';

const Safety = () => {
  return (
    <Fragment>
      <div className='col-12 my-5 '>
        <div className='container border d-flex'>
          <div className='row  '>
            <div className='col-md-2 mx-4 mt-5 '>
              <img src={safety_img}className="safety_img" alt='safety-1' />
            </div>
          </div>
          <div className='row my-5 ml-4'>
            <div className='col-md-10'>
              <h2>Safety+</h2>
              <h5>
                Opt to Travel Safe with redBus <Link to=''>KNOW MORE</Link>{' '}
              </h5>
              <p> Look for buses with tag while booking your journey,</p>
              <div className="row">
                <div className="col-md-4">
                  <p className="safety_card_text mt-4">Sanitized Bus </p>
                  <p className="safety_card_text1">Proper masks are mandatory for all passengers and bus staff..</p>
                </div>
                
                {/* 2 */}

                <div className="col-md-4">
                  <p className="safety_card_text mt-4">Mandatory masks </p>
                  <p className="safety_card_text1">All Safety+ buses are sanitized and disinfected before and after every trip.</p>
                </div>

                {/* 3 */}

                <div className="col-md-4">
                  <p className=" safety_card_text mt-4">Sanitized Bus </p>
                  <p className="safety_card_text1">All Safety+ buses are sanitized and disinfected before and after every trip.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Safety;

// {/* <div className='card bg-dark safety-card mt-5'>
//             <img src={safety_img} className='safety_img mt-3' />
//             <div className='card-img-overlay card-text-safety'>
//               <h5 className='card-title Safety-title '>Safety+</h5>
//               <p className='card-text'>
//                 Opt to Travel Safe with allRide
//                 <Link to='#' className='know_more_safety ml-3'>
//                   know more
//                 </Link>
//               </p>
//               <p className='card-text'>
//                 Opt to Travel Safe with allRide
//                 <Link to='#' className='know_more_safety ml-3'>
//                   know more
//                 </Link>
//               </p>

//               <div class='row'>
                
//               </div>
//             </div>
//           </div> */
// }
