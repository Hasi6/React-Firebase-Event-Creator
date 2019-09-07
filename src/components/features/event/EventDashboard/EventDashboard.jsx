import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

// created components
import EventList from "../EventList/EventList";

const EventDashboard = ({ events, deleteEvent }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Feed</h2>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(EventDashboard);
