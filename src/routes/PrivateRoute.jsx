import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuhtenticated, component: Component, ...rest }) => {
  console.log(rest);

  return (
    <Route
    exact
      {...rest}
      component={(props) => {
        console.log(Component);

        return isAuhtenticated ? 
        <Component {...props} /> :
         <Redirect to="/login" />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuhtenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
export default PrivateRoute;
