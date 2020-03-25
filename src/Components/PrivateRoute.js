import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />
          // push to component prop
        } else {
          return <Redirect to="/" />
        }
      }}
    />
  )
}

export default PrivateRoute;