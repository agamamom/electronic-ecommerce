import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

import './SignIn.module.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const navigate = useNavigate();
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

        await auth.signInWithPopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password)
            navigate("/");
        } catch (error) {
            console.log('user sign in failed', error);
        }
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
                    <button type='submit' className="remove-item">Sign In</button>

                    <button type='button' onClick={signInWithGoogle} className="remove-item">
                        Sign In With Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;