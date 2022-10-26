import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Row>
                <Col lg='10'>
                    <Courses></Courses>
                </Col>
                <Col lg='2'>
                    <h3>Side bar</h3>
                </Col>
            </Row>
        </div>
    );
};

export default Home;