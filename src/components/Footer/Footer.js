import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-h">
            <nav className="text-light bg-primary">
                <div >
                    <h1 >Dhaka Health Care</h1>
                    <p>Our Diagnostic lab very famous in dhaka. Many kinds of tests are done here. Our Diagnostic lab very famous in dhaka. Many kinds of tests are done here. </p>
                    <ul class="nav justify-content-center ">
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="/home">Home</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="/doctors">Doctors</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="contact">Contact</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Footer;