import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Course from '../Course/Course';

const Courses = () => {
    // load data form public folder
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    // slicing data
    let product = courses.slice(1, 5);
    // click button to go services
    const history = useHistory();
    const handleClick = () => {
        history.push('/services');
    }
    return (
        <div className="m-5">
            {/* send data to Course component */}
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        product.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
                <Button onClick={handleClick} variant="secondary mt-5">See More &#10140;</Button>
            </Container>
        </div>
    );
};

export default Courses;
