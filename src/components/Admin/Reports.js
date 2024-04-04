import React, { useState, useEffect } from "react";
import { fetchCourseReports } from "../services/report";

const Reports = () => {
  const [courseReports, setCourseReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await fetchCourseReports();
        setCourseReports(data);
      } catch (error) {
        console.error("Error fetching course reports:", error.message);
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Course Reports</h2>
      <ul>
        {courseReports.map((report) => (
          <li key={report.id}>
            <p>Course: {report.course}</p>
            <p>Enrollment: {report.enrollment}</p>
            <p>Waitlist: {report.waitlist}</p>
            {/* Display other report details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
