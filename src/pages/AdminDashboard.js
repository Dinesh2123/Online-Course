import React from "react";
import CourseForm from "./CourseForm";
import Reports from "./Reports";

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
