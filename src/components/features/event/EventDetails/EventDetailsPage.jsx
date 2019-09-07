import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailsHeader from './EventDetailsHeader';
import EventDetailsInfo from './EventDetailsInfo';
import EventsDetailsChat from './EventsDetailsChat';
import EventDetailsSideBar from './EventDetailsSideBar';

const EventDetailsPage = ()=>{
    return(
        <Grid>
            <Grid.Column width={10}>
                <EventDetailsHeader />
                <EventDetailsInfo />
                <EventsDetailsChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailsSideBar />
            </Grid.Column>
        </Grid>
    )
}
export default EventDetailsPage;