import React, { Fragment } from 'react';

// Created Components
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

const App = () =>{
    return (
        <Fragment>
        <NavBar />
        <Container className="main">
            <EventDashboard />
        </Container>
        </Fragment>
    )
}
export default App;