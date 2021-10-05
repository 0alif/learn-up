import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    // click and back to home
    const history = useHistory();
    const backToHome = () => {
        history.push('/home');
    }
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <Button onClick={backToHome} variant="secondary mt-5">Back To Home</Button>
        </div>
    );
};

export default NotFound;