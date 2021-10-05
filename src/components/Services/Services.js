import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // load data form public folder as fakedb
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="mt-5 pt-3">
            {/* send data to Service component */}
            <Container className="m-5">
                <h1 className="services text-start mb-5">Our Services</h1>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(product => <Service key={product.id} product={product}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;