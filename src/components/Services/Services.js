import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className="mt-5 pt-3">
            <Container className="m-5">
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