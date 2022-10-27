import React from 'react';
import Courses from '../Courses/Courses';
import RightSideContainer from '../RightSideContainer/RightSideContainer';
import './Home.css'

const Home = () => {
    return (
        <div className='courses-container'>
            <Courses></Courses>
            <RightSideContainer></RightSideContainer>
        </div>
    );
};

export default Home;