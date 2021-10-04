import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {

    return (
        <div className="mt-5 mb-5 pt-5 bg-light">
            <Container className="contact">
                <div>
                    <h3>Fillup The Form</h3>
                    <Row className="g-2 mb-3">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Email">
                                <Form.Control type="email" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectGrid" label="Name">
                                <Form.Control type="text" />
                            </FloatingLabel>
                        </Col>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Row>
                    <Button variant="secondary">Submit Request</Button>
                </div>
                <div>
                    <h3>Reach Us</h3>
                    <h2>Get In Touch</h2>
                    <h5>Reach Us</h5>
                    <p>2512, New Market,
                        Eliza Road, Sincher 80 CA,
                        Canada, USA
                    </p>
                    <h5>Drop A Mail</h5>
                    <p>support@Rikada.com
                        <br />
                        Rikada@gmail.com</p>
                    <h5>Call Us</h5>
                    <p>(41) 123 521 458
                        <br />
                        +91 235 548 7548</p>
                </div>
            </Container>
            <div className="newsletter">
                <h1>Join Thousand Of Happy Students!</h1>
                <p>Subscribe our newsletter & get latest news and updation!</p>
                <div className="d-flex justify-content-center">
                    <InputGroup className="mb-3 w-25">
                        <FormControl aria-describedby="basic-addon2" placeholder="Your Email Address" />
                        <Button variant="secondary" id="button-addon2">Subscribe</Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Contact;