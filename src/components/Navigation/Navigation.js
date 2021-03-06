import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navbar">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <img src="https://learnup.smartdemowp.com/wp-content/themes/learnup/assets/images/logo.png" width="150" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="me-4 text-decoration-none" to="/home" activeStyle={{
                            color: "red"
                        }}>Home</NavLink>
                        <NavLink className="me-4 text-decoration-none" to="/services" activeStyle={{
                            color: "red"
                        }}>Services</NavLink>
                        <NavLink className="me-4 text-decoration-none" to="/about" activeStyle={{
                            color: "red"
                        }}>About</NavLink>
                        <NavLink className="me-4 text-decoration-none" to="/contact" activeStyle={{
                            color: "red"
                        }}>Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;