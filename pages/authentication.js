import React from 'react'
import SignInForm from '../components/SignIn/SignIn'
import SignUpForm from '../components/SignUp/SignUp';


const Authentication = () => {
    return (
        <div className='authentication-container'>
            <div className="signInForm">
                <SignInForm />
            </div>
            <div className="signUpForm">
                <SignUpForm />
            </div>
        </div>
    );
};

export default Authentication;
