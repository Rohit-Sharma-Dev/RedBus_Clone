import React, { Fragment } from 'react';
import India from '../../images/india.jpeg';
import Indonesia from '../../images/indonesia.jpg';
import Peru from '../../images/peru.jpg';
import Colambia from '../../images/colambia.png';
import Malasia from '../../images/malasia2.png';
import Singapore from '../../images/singapore2.jpg';

export const Global = () => {
  return (
    <Fragment>
      <div className='col-12'>
        <h2 className='my-4 text-center'> OUR GLOBAL PRESENCE </h2>
        <div className='container global-content d-flex justify-content-around '>
          <div className='row  text-center justify-content-around'>
            <div className='card mx-4 col-md-3   Global '>
              <img
                className='card-img-global-top'
                src={India}
                alt='countru-1'
              />
              <div className='card-body'>
                <p className='card-text text-center'>India</p>
              </div>

              <div className='row'></div>
            </div>

            {/* 2 */}

            <div className='card mx-4 col-md-3 Global'>
              <img
                className='card-img-global-top'
                src={Indonesia}
                alt='countru-2'
              />
              <div className='card-body'>
                <p className='card-text text-center'>Indonesia</p>
              </div>
            </div>

            {/* 3 */}

            <div className='card mx-4  col-md-3 Global '>
              <img
                className='card-img-global-top'
                src={Peru}
                alt='countru-3'
              />
              <div className='card-body'>
                <p className='card-text text-center'>Peru</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd cointainer */}

        <div className='container global-content d-flex justify-content-around '>
          <div className='row  text-center justify-content-around'>
            <div className='card mx-4 col-md-3   Global '>
              <img
                className='card-img-global-top'
                src={Colambia}
                alt='country-4'
              />
              <div className='card-body'>
                <p className='card-text text-center'>colambia</p>
              </div>

              <div className='row'></div>
            </div>

            {/* 2 */}

            <div className='card mx-4 col-md-3 Global'>
              <img
                className='card-img-global-top'
                src={Malasia}
                alt='country-5'
              />
              <div className='card-body'>
                <p className='card-text text-center'>Malasia</p>
              </div>
            </div>

            {/* 3 */}

            <div className='card mx-4  col-md-3 Global '>
              <img
                className='card-img-global-top'
                src={Singapore}
                alt='country-6'
              />
              <div className='card-body'>
                <p className='card-text text-center'>Singapore</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default Global;
