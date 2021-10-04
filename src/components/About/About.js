import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="mt-5 pt-5 pb-5 about container">
            <div className="about-text">
                <h1>Know About <span>E-Learn</span> Learning Platform</h1>
                <h5>Cost Effective</h5>
                <p>Learnup is one of the cost effective learning centres from last decade.</p>
                <h5>Improves Performance And Productivity</h5>
                <p>Learnup helps learners to train quicker and the easiest way to increase performance.</p>
                <h5>Saves Time</h5>
                <p>Our instructor uploads the materials in time and shares the content with the learners in time.</p>
                <Button className="btn">Know More</Button>
            </div>
            <div>
                <img src="https://learnup.smartdemowp.com/wp-content/uploads/2021/05/edu_2.png" alt="" />
            </div>
        </div>
    );
};

export default About;