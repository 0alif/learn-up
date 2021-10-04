import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <img className="hero-image" src="https://learnup.smartdemowp.com/wp-content/uploads/2021/05/banner-2-1.jpg" alt="" />
            <div className="hero-text">
                <h1>Learn On Your Schedule</h1>
                <p>Study any topic, anytime. Explore thousands of courses for the lowest price ever!</p>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="secondary">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Header;