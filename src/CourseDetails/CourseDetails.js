import React from "react";
import "./CourseDetails.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, photo, details } = courseDetails;
  return (
    <div>
        <Button id="heading" variant="primary">{title}</Button>
      <div>
        <Card className="course-details" style={{ width: "500px" }}>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
