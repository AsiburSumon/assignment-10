import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, photo, details, id } = course;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{height: "200px"}} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {
                details.length > 100 ?
                <p>{details.slice(0,120) + "..."}
                <Link to={`/allcourses/${id}`}>Read More</Link>
                </p>
                :
                <p>{details}</p>
            }
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
