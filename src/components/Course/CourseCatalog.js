import React, { useState, useEffect } from "react";
import { fetchCourseCatalog } from "../services/course";

import "./CourseCatalog.css"

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await fetchCourseCatalog();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching course catalog:", error.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course Catalog</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            {/* Display other course details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCatalog;
