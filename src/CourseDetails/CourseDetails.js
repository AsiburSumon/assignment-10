import React from "react";
import "./CourseDetails.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, photo, details, id} = courseDetails;
  return (
    <div className="heading text-center">
        <h3>{title}</h3>
        <Pdf targetRef={ref}>
            {({toPdf}) => <Button onClick={toPdf} variant="primary">Download Details of {title}</Button> }
        </Pdf>
      <div>
        <Card ref={ref} className="course-details">
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Button variant="primary"><Link className="text-white" to={`/checkout/${id}`}>Get premium access</Link> </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
