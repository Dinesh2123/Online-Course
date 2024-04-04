import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import StudentDashboard from "./pages/StudentDashboard.js";
import AdminDashboard from "./components/AdminDashboard.js";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/student" component={StudentDashboard} />
          <Route path="/admin" component={AdminDashboard} />
          {/* Add additional routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
