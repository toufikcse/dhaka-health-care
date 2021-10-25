import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../Hook/useAuth';
import useFirebase from '../Hook/useFirebase';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    // const { user, signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="signin">
                <h2>Login</h2>
                <form >
                    <input className="input" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="" id="" placeholder="password" />
                    <br />
                    <input className="input" type="submit" value="submit" />
                </form>
                <Link to="/register">Create Account</Link>
                <div>----------or--------</div>
                <button className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;