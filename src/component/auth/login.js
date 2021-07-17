import React, { Fragment } from "react";
import {Link} from 'react-router-dom'; 
import propTypes from 'prop-types';

const Login = () => {
    
    return (
        <Fragment >
            <div className="col-12">
                <div className="container">


                <div className=' text-center  login_form mt-4'>
                <h1 className='large text-danger text-center'>Sign In</h1>
            <p className='lead text-center'>
                <i className='fas fa-user'></i> Sign Into Your Account
            </p>
            <form className='form text-center'>
               
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        
                        
                        required
                    />
                   
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password' 
                        minLength='6'
                    />
                </div>
               
                <input
                    type='submit'
                    className='btn btn-danger'
                    value='Login'
                />
            </form>
            
            <p className='my-1 text-center'>
                Don't have an account? <Link to ='/register' className="text-danger">Sign Up</Link>
            </p>

                </div>
                </div>
            </div>

            

       
        </Fragment>
    )}; 

Login.propTypes = {
    login : propTypes.func.isRequired,
    isAuthenticated : propTypes.bool
}


export default Login;