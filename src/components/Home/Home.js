import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            {/* Header component */}
            <Header></Header>
            {/* Courses component */}
            <Courses></Courses>
        </div>
    );
};

export default Home;