import React, { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";

// created components
import EventList from "../EventList/EventList";


import { Link } from "react-router-dom";

const EventDashboard = ({ events, deleteEvent }) => {

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button
          as={Link}
          to="/createEvent"
          positive
          content={"Create Event"}
        ></Button>
        
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(
  mapStateToProps
)(EventDashboard);
