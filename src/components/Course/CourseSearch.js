import React, { useState } from "react";

import "./CourseSearch.css"

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality (e.g., filter courses based on searchTerm)
  };

  return (
    <div>
      <h2>Search Courses</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CourseSearch;
