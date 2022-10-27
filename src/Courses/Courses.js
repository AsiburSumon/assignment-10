import React from "react";
import "./Courses.css";
import RightSideContainer from "../RightSideContainer/RightSideContainer";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="courses-container">
      <div className="all-courses">
        <h3>All Courses</h3>
        <div className="courses">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
      <RightSideContainer></RightSideContainer>
    </div>
  );
};

export default Courses;
