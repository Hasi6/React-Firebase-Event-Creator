import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Created Components
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import NavBar from "./nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import HomePage from "./features/home/HomePage";
import EventDetailsPage from "./features/event/EventDetails/EventDetailsPage";
import PeopleDashBoard from "./user/PeopleDashBoard/PeopleDashBoard";
import SettingsDashBoard from "./user/Settings/SettingsDashBoard";
import UserDetailedPage from "./user/UserDetailed/UserDetailedPage";
import EventForm from "./features/event/EventForm/EventForm";

// Redux Store
import { configureStore } from "../store/configureStore";
const store = configureStore;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/(.+)"
            render={() => (
              <Fragment>
                <NavBar />
                <Container className="main">
                  <Switch>
                    <Route path="/events" exact component={EventDashboard} />
                    <Route
                      path="/events/:id"
                      exact
                      component={EventDetailsPage}
                    />
                    <Route path="/people" exact component={PeopleDashBoard} />
                    <Route
                      path="/profile/:id"
                      exact
                      component={UserDetailedPage}
                    />
                    <Route path="/settings" component={SettingsDashBoard} />
                    <Route
                      path={["/createEvent", "/manage/:id"]}
                      exact
                      component={EventForm}
                    />
                  </Switch>
                </Container>
              </Fragment>
            )}
          />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
