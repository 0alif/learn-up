import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, author, img, duration } = props.product;
    return (
        <div>
            <Col>
                <Card className="bg-light">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Author: {author}</Card.Text>
                        <p>Duration: {duration}</p>
                        <p>Price ${price}</p>
                        <Button variant="secondary">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;