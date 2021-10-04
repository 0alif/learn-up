import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="m-5">
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
