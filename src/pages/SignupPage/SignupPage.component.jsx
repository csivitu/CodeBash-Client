import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import { api } from '../../api/api';
import '../../assets/css/styles.css';
import '../../assets/css/gradient.css';
import hash from '../../assets/icons/hash.png';
import semicolon from '../../assets/icons/semicolon.png';
import bg from '../../assets/bg/bg.png';


const SignupPage = ({setCurrentUser}) => {
    const [fullName, setFullName] = useState('');
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonText, setButtonText] = useState('Sign Up');

    const history = useHistory();

    const signup = async (event) => {
        event.preventDefault();
        setButtonText('Signing Up...');
        const res = await api.post('/signup', { fullName, userName, email, password });
        if (res.data.status === 'success') {
            setCurrentUser(res.data.user._doc);
            setButtonText('Sign Up');
            history.push('/join');
        } else {
            swal('Error Signing Up');
            setButtonText('Sign Up');
        }
    }

    return (
    <>
        <div className="left">
            <div className="bg">
                <img src={bg} alt="Background" className="background-image" />
            </div>
            <div className="heading-text">
                <h1>
                    A messaging platform
                    <br />
                    <span className="GradientAnimationText">for coders.</span>
                </h1>
            </div>
            <div className="icons">
                <div className="hash-icon-div">
                    <img src={hash} alt="Hash" className="hash-icon" />
                </div>
                <div className="semicolon-icon-div">
                    <img src={semicolon} alt="semicolon" className="semicolon-icon" />
                </div>
            </div>
        </div>
        <div className="right">
            <div id="card" className="GradientAnimation">
                <div className="inner-card" style={{ height: 450 }}>
                    <form className='form' onSubmit={signup}>
                        <h1>SIGN UP</h1>
                        <input
                            type="text"
                            name="fullname"
                            className="textbox"
                            placeholder="full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="username" 
                            className="textbox"
                            placeholder="username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="email"
                            className="textbox"
                            placeholder="e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="password"
                            name="password"
                            className="textbox"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" id="SignIn" className="GradientButton" disabled={buttonText === 'Signing Up...' ? true : false} > {buttonText} </button>
                        <br />
                    </form>
                    <Link to="/login">Already have an account? Log In</Link>
                    <br />
                </div>
            </div>
        </div>
    </>
    )
};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => (dispatch(setCurrentUser(user)))
})

export default connect(null,mapDispatchToProps)(SignupPage);
