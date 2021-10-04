import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-light pt-4 pb-2">
            <div className="footer-text">
                <div>
                    <img className="mb-4" src="https://learnup.smartdemowp.com/wp-content/themes/learnup/assets/images/logo.png" width="200px" alt="" />
                    <p>4967 Sardis Sta, Victoria 8007, Montreal.</p>
                    <p>+1 246-345-0695</p>
                    <p>Info@Learnup.Com</p>
                </div>
                <div className="footer-nav">
                    <h3>Navigations</h3>
                    <NavLink className="text-decoration-none"
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink className="text-decoration-none"
                        to="/services"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Services
                    </NavLink>
                    <NavLink className="text-decoration-none"
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink className="text-decoration-none"
                        to="/contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Contact
                    </NavLink>
                </div>
                <div>
                    <SocialIcon className="social-icon" url="https://facebook.com/" />
                    <br />
                    <SocialIcon className="social-icon" url="https://twitter.com/" />
                    <br />
                    <SocialIcon className="social-icon" url="https://linkdin.com/" />
                </div>
            </div>
            <p className="mt-5">&#169;All rights reserved</p>
        </div>
    );
};

export default Footer;