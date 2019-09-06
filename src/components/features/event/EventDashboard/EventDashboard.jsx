import React, { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

import Events from "./EventListArray";

const events = Events;

const EventDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button
          onClick={() => formOpen()}
          positive
          content={isOpen ? 'Hide Form' : 'Create Event'}
        ></Button>
        <EventForm isOpen={isOpen} hideForm={formOpen}/>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
