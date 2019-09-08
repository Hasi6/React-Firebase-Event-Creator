import React, { Fragment } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

// created Components
import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsInfo from "./EventDetailsInfo";
import EventsDetailsChat from "./EventsDetailsChat";
import EventDetailsSideBar from "./EventDetailsSideBar";

const EventDetailsPage = ({ event }) => {
  console.log(event);
  return (
    <Fragment>
      {event !== undefined ? (
        <Grid>
          <Grid.Column width={10}>
            <EventDetailsHeader events={event} />
            <EventDetailsInfo events={event} />
            <EventsDetailsChat />
          </Grid.Column>
          <Grid.Column width={6}>
            <EventDetailsSideBar attendees={event.attendees} />
          </Grid.Column>
        </Grid>
      ) : 'No Event Found'}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  console.log(state.firestore.ordered.events);
  if (eventId && state.firestore.ordered.events && state.firestore.ordered.events.length > 0) {
    console.log('Hasi');
    event = state.firestore.ordered.events.filter(event => event.id === eventId)[0];
  }
  console.log(eventId);
  return { event };
};

export default connect(mapStateToProps)(EventDetailsPage);
