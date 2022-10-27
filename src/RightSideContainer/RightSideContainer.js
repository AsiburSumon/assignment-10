import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const RightSideContainer = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://server-for-assignment10.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <h3>Courses: {courses.length}</h3>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/allcourses/${course.id}`}>{course.name}</Link>
                </p> )
            }
        </div>
    );
};

export default RightSideContainer;