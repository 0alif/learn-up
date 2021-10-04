import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    // load data form public folder
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    // slicing data
    let product = courses.slice(1, 5);

    return (
        <div className="m-5">
            <Container>
                {/* send data to Course component */}
                <Row xs={1} md={2} className="g-4">
                    {
                        product.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
