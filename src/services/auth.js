// This file would contain functions for handling user authentication (e.g., login, registration) using API calls to the backend server.

// Example of loginUser function using Axios for API requests
import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("/api/login", { email, password });
    // Handle successful login (e.g., store user token in local storage)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Example of registerUser function using Axios for API requests
export const registerUser = async (userData) => {
  try {
    const response = await axios.post("/api/register", userData);
    // Handle successful registration
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
