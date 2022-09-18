import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import FormInput from '../FormInput/FormInput';
import { auth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import { useRouter } from 'next/router';


const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const router = useRouter();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const signIn = e => {
    //     e.preventDefault();

    //     auth.signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             navigate("/");
    //         })
    //         .catch(error => alert(error.message))
    // }
    const signInWithGoogle = async (event) => {
        event.preventDefault();

        await signInWithGooglePopup();
        router.push('/');
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            router.push('/');
        } catch (error) {
            console.log('user sign in failed', error);
        }
        toast.success('Login Successfully!');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <button type='submit' className="signIn-button">Sign In</button>

                    <button type='button' onClick={signInWithGoogle} className="google-signIn-button">
                        Sign In With Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;