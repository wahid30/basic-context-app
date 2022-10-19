// step:01: src er মধ্যে একটা routes name e folder create করবো and এটার মধ্যা PrivateRoute.js name e একটা js file create করবো

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  // step:02
  const { user, loading } = useContext(AuthContext); // step:03 & step:04 & step:10
  if (loading) {
    // step:11
    return (
      <div>
        <h2>Loading........</h2>
      </div>
    );
  }
  if (user && user.uid) {
    // step:05
    return children;
  }
  return <Navigate to="/login"></Navigate>; // step:05
};

export default PrivateRoute;
