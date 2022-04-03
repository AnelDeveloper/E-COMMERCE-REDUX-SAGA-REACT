import React, { useState }from 'react';

import FormInput from '../form-input/form-input';

// import { connect } from 'react-redux';

import Button from '../buttom-component/buttom-comp';


import './sign-up.style.scss';

 const SignUp = ({ signUpStart }) => {

    const [userDetails , setUserDetails ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName , email ,password, confirmPassword } = userDetails;



 const handleSubmit = async event => {
        event.preventDefault();

        if ( password !== confirmPassword ) {
            alert("password dont match");
            return;
        }

        signUpStart({ displayName , email , password });



    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserDetails({...userDetails, [name]: value });

    };

        return (
        
            <div className='sign-up'>
            
            <h2 className='title'>I do not have account</h2>

            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>


            <FormInput
            type='text'
            name='displayName'
            value={ displayName}
            onChange={handleChange}
            label='display name'
            required
            />

            <FormInput
            type='text'
            name='email'
            value={ email }
            onChange={handleChange}
            label='Email'
            required
            />
        

            <FormInput
            type='password'
            name='password'
            value={ password}
            onChange={handleChange}
            label='Password'
            required
            />
        

            <FormInput
            type='passowrd'
            name='confirmPassword'
            value={ confirmPassword }
            onChange={handleChange}
            label='Confirm Password'
            required
            />            
            
            <Button type="submit" > Sign up</Button>
            
            </form>
            
            
            
            </div>
        )
    };

    //const mapDispatchToProps = dispatch => ({
     //   signUpStart: userDetails => dispatch(signUpStart(userDetails))
    //});

export default SignUp;