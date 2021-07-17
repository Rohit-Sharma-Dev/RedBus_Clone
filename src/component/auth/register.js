import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom'; 



const Register=()=>{
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: "",
});

const { name, email, password, password2 } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value});

// const onSubmit = async e => {
//     e.preventDefault();
//     if(password !== password2){
//         setAlert('Passwords do not match','danger');
//     }else{
//         register({name, email, password});

//     }};

// if(isAuthenticated){
//     return <Redirect to='/dashboard'/>;
// }

return (
    <Fragment>
        <div className="col-12">
            <div className="container">

            <div className=' text-center register_form mt-4'>
        <h1 className='large text-danger text-center'>Sign Up</h1>
        <p className='lead text-center'>
            <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form text-center ' >  {/*  onSubmit={e => onSubmit(e)} */} 
            <div className='form-group '>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange = {e => onChange(e)}
                />
            </div>
            <div className='form-group'>
                <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value = {email}
                    onChange = {e => onChange(e)}
                   
                />
                
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value = {password}
                    onChange = {e => onChange(e)}
                   
                />
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    value = {password2}
                    onChange = {e => onChange(e)}
                    
                />
            </div>
            <input
                type='submit'
                className='btn btn-danger '
                value='Register'
            />
        </form>
        <p className='my-1  text-center'>
            Already have an account? <Link to='/login' className="text-danger">Sign In</Link>
        </p>
        </div>

            </div>
        </div>
        
    </Fragment>
);
}
export default Register