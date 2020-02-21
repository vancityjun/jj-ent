import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Ticket from "../Pages/Ticket";
import VipBooth from "../Pages/VipBooth";

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ticket" component={Ticket} />
        <Route exact path="/vip-booth" component={VipBooth} />
      </Switch>
    </Fragment>
  );
};
