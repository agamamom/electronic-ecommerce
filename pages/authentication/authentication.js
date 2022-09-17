import SignInForm from '../../components/SignIn/SignIn';
import SignUpForm from '../../components/SignUp/SignUp';
import './authentication.module.scss';

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
