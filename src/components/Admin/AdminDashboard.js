import React from "react";
import CourseForm from "./CourseForm";
import Reports from "./Reports";

import "./AdminDashboard.css"

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CourseForm />
      <Reports />
    </div>
  );
};

export default AdminDashboard;
