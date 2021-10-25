import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';

const Register = () => {
    return (
        <div>
            <Header></Header>
            <div className="signin">
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input className="input" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="" id="" placeholder="password" />
                    <br />
                    <input className="input" type="password" name="" id="" placeholder="re-enter password" />
                    <br />
                    <input className="input" type="submit" value="submit" />
                </form>
                <p>Already have an Account <Link to="/login">Log In</Link></p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;