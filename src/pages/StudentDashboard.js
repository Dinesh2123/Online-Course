import React from "react";
import CourseCatalog from "./CourseCatalog";
import CourseSearch from "./CourseSearch";
import CourseReservation from "./CourseReservation";

const StudentDashboard = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CourseSearch />
      <CourseCatalog />
      <CourseReservation />
    </div>
  );
};

export default StudentDashboard;
