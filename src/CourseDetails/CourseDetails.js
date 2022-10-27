import React from "react";
import "./CourseDetails.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, photo, details, id} = courseDetails;
  return (
    <div className="heading">
        <h3 className="text-center" >{title} <Button variant="primary">Download Details of {title}</Button></h3>
      <div>
        <Card className="course-details" style={{ width: "500px" }}>
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
