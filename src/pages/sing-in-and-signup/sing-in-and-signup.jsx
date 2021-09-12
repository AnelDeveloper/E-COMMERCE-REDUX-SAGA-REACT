import React from 'react';

import './sing-in-and-signup.scss';


import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up.comp';


const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>


);

export default SignInAndSignUp;
