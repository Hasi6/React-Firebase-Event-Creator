import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

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
import ModalManager from "./features/modals/ModalManager";
import TestComponent from "./features/testarea/TestComponent";
import { loadEvents } from "../actions/events/eventActions";
const store = configureStore;

store.dispatch(loadEvents())

const App = ({ location }) => {
  return (
    <Provider store={store}>
      <Fragment>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <ReduxToastr
                position="bottom-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                timeOut={5000}
                progressBar
                preventDuplicates
                closeOnToastrClick
              />
              <ModalManager />
              <NavBar />
              <Container className="main">
                <Switch key={location.key}>
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
                  <Route path="/test" exact component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    </Provider>
  );
};
export default withRouter(App);
