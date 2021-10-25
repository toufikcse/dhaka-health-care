import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import './Header.css';



const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>


            <nav className="navbar navbar-expand-sm navbar-dark bg-primary ">

                <Link className="navbar-brand" to="/home">
                    <div className="logo-link">
                        <img className="img-logo" src="https://image.flaticon.com/icons/png/512/809/809957.png" alt="logo" />
                        <h1>Dhaka Health Care</h1>
                    </div>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav resize-item">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Doctors">Doctors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/register">Register</Link>
                        </li>
                        <span className="name-u"> {user.displayName}</span>
                        {
                            user.email ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link " to="/login">Log in</Link>
                                </li>
                        }

                    </ul>
                </div>

            </nav>




        </div>
    );
};

export default Header;