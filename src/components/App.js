import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Created Components
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import HomePage from './features/home/HomePage';
import EventDetailsPage from './features/event/EventDetails/EventDetailsPage';
import PeopleDashBoard from './user/PeopleDashBoard/PeopleDashBoard';
import SettingsDashBoard from './user/Settings/SettingsDashBoard';
import UserDetailedPage from './user/UserDetailed/UserDetailedPage';
import EventForm from './features/event/EventForm/EventForm';

const App = () =>{
    return (
        <BrowserRouter>
        <NavBar />
        <Container className="main">
            <Route path="/" exact component={HomePage} />
            <Route path="/events" exact component={EventDashboard} />
            <Route path="/events/:id" exact component={EventDetailsPage} />
            <Route path="/people" exact component={PeopleDashBoard} />
            <Route path="/profile/:id" exact component={UserDetailedPage} />
            <Route path="/settings" exact component={SettingsDashBoard} />
            <Route path="/createEvent" exact component={EventForm} />
        </Container>
        </BrowserRouter>
    )
}
export default App;