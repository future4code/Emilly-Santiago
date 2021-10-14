import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";

export const Router=()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/LoginPage">
          <LoginPage />
        </Route>

        <Route exact path="/AdminHomePage">
          <AdminHomePage />
        </Route>

        <Route exact path="/CreateTripPage">
          <CreateTripPage />
        </Route>

        <Route exact path="/TripDetailsPage/:id">
          <TripDetailsPage />
        </Route>

        <Route exact path="/ListTripsPage">
          <ListTripsPage />
        </Route>

        <Route exact path="/ApplicationFormPage">
          <ApplicationFormPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

