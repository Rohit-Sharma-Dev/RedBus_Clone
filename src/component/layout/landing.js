import React from 'react';
import {  Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  Route,
} from "react-router-dom";
import ticket from '../Tickets/ticket'

const Landing = () => {
 
  return (

    <section className='landing '>
      <div className='dark-overlay'>
        <div className='landing-inner text-center'>
          <h1 className='x-large'>πΊπππ ππππ πππ ππππππ ππ</h1>
          <p className='lead'>
            Go Greyhound and leave the driving to us! We're on our way.
            Connecting people with people. The passenger professionals.
          </p>
          <Route exact path="/" component={ticket}/>
          
        
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: propTypes.bool,
};

// const mapStateToProps =  state =>({
//     isAuthenticated : state.auth.isAuthenticated
//   });

export default Landing;
