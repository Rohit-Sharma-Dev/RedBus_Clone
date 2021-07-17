import React, { Fragment } from 'react';
import Journey from '../../images/Journey_for_dream.png'
import Donate from '../../images/donate.png'
import Guideline from '../../images/guideline.png'


const Cards = (props) => {
  return (
    <Fragment>
      <div className='col-12 card-info d-flex '>
        <div className="container d-flex"> 
        <div className="row justify-content-around">
            

        <div className='card col-md-3 card1 w-50 card-1'>
       
       <div className='card-body'>
       <h5 className='card-title card-title-1 text-center'>Save up to Rs 150 on bus tickets</h5>
       <img src={Journey} className='Journey journey_for_dream' alt="card-3"  />
         <p className='card-text card_text_2 text-center'>
          Use Code FIRST
         </p>
         
       </div>
     </div>

     <div className='card card1 col-md-3 w-50 mx-4 card-2 '>
     <div className='card-body'>
       <h5 className='card-title card-title-1 text-center'>Care</h5>
       <img src={Donate} className='Journey Donate' alt="card-1" />
         <p className='card-text text-center card_text_2'>
          Use Code FIRST
         </p>
        
       </div>
     </div>

     <div className='card card1 col-md-3 w-50 card-3'>
     <div className='card-body'>
       <h5 className='card-title card-title-1 text-center'>Save up to Rs 150 on bus tickets</h5>
       <img src={Guideline} className='Journey Guideline text-center' alt="card-2"/>
         <p className='card-text text-center card_text_2'>
          check here the First
         </p>
         
       </div>
     </div>


        </div>
        
      </div>
      </div>
    </Fragment>
  );
};

export default Cards;
