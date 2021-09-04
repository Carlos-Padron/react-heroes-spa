import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import Login from "../components/login/Login";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import PublicRoute from "./PublicRoutes";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={Login}
            isAuhtenticated={user.logged}
          />


          <PrivateRoute
            path="/"
            isAuhtenticated={user.logged}
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
