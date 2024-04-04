import React, { useState } from "react";
import { addCourse } from "../services/course";

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    instructor: "",
    schedule: "",
    prerequisites: "",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse(courseData);
      // Handle successful course addition
    } catch (error) {
      console.error("Error adding course:", error.message);
      // Handle course addition failure
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={courseData.name}
          onChange={handleChange}
          required
        />
        {/* Add input fields for other course details */}
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default CourseForm;
