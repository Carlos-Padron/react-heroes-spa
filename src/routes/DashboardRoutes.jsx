import React from "react";
import { Route, Switch } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import Search from "../components/search/Search";
import { Navbar } from "../components/ui/Navbar";

const DashboardRoutes = ({ history }) => {
  return (
    <>
      <Navbar history={history} />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/hero/:heroId" component={HeroesScreen} />
          <Route exact path="/search" component={Search} />

          <Route component={MarvelScreen} />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
