import React,{useState} from 'react';
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

const LoginPage = ({setCurrentUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonText, setButtonText] = useState('Log In');

    const history = useHistory();

    const login = async (event) => {
        event.preventDefault();
        console.log('hello');
        setButtonText('Logging In...');
        const res = await api.post('/login', { email, password });
        if (res.data.status === 'success') {
            setCurrentUser(res.data.user._doc);
            setButtonText('Log In');
            history.push('/join');
        } else {
            swal('Error Logging In');
            setButtonText('Log In');
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
                <div className="inner-card">
                    <form className='form' onSubmit={login}>
                        <h1>LOG IN</h1>
                        <input 
                            type="email"
                            name="email"
                            className="textbox"
                            placeholder="email"
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
                        <button type="submit" id="SignIn" className="GradientButton" disabled={buttonText==='Logging In...' ? true : false} > {buttonText} </button>
                        <br />
                        <Link to="/signup" style={{zIndex: 10}}>No account yet? Sign Up</Link>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    </>
)};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => (dispatch(setCurrentUser(user)))
})

export default connect(null,mapDispatchToProps)(LoginPage);
