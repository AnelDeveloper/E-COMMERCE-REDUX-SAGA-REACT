import React , {useState} from 'react';
import FormInput from '../form-input/form-input';
import './sing-in..scss';

import {  signInWithGoogle } from '../../firebase/firebase.utils';

import Button from '../buttom-component/buttom-comp';




const  SignIn =  ({ emailSignInStart, googleSingInStart }) => {

    const [userDetails, setUserDetails] = useState({
         email: '',
          password: '' })

    const { email , password } = userDetails; 


const handleSubmit = async event => {
    event.preventDefault();


    emailSignInStart(email, password)


};

const handleChange = event => {
    const { value, name } = event.target;

    setUserDetails({...userDetails, [name]: value })

};

    return (
        <div className='sign-in'> 
        <h2>I already Have Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>

        <FormInput 
        name="email"  
        type="email" 
        handleChange={handleChange}
        value={email} 
        label='email'
        required />
        

        <FormInput
         name="password"  
         type="password" 
         value={password}
         handleChange={handleChange}
         label='password'
         required />
        
<div className='buttons-edit'>
        <Button type="submit" > Sign in</Button>
        <Button onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google</Button>
</div>

        
        </form>
        
        </div>
    );
};

export default SignIn;

