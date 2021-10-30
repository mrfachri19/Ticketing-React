import React from "react";
import { Route, Redirect } from "react-router-dom";
// import BasicReact from "../../pages/basic/React";

const PublicRoute = ({ component: Component, restricted, ...props }) => {
  const isAuthenticated = localStorage.getItem("token");
  //   console.log(rest);
  // isAuthenticated = true
  // restricted = false
  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated && restricted ? <Redirect to="/basic-home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
