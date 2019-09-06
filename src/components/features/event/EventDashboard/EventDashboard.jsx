import React, { useState, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";

// created components
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

// Redux
import {
  createEvent,
  deleteEvent,
  updateEvent
} from "../../../../actions/events/eventActions";

const EventDashboard = ({ events, updateEvent, createEvent, deleteEvent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const handleNewEvent = newEvent => {
    createEvent(newEvent);
    setIsOpen(false);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setIsOpen(true);
  };

  const handleFormCancel = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  const handleUpdateEvents = updatedEvent => {
    updateEvent(updatedEvent);
    setSelectedEvent(null);
    setIsOpen(false);
  };
  const handleSelectEvent = event => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const deleteEvents = deleteEvents => {
    deleteEvent(deleteEvents);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={handleSelectEvent}
          deleteEvent={deleteEvents}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button
          onClick={() => handleCreateFormOpen()}
          positive
          content={"Create Event"}
        ></Button>
        <EventForm
          isOpen={isOpen}
          hideForm={handleFormCancel}
          newEvent={handleNewEvent}
          selectedEvent={selectedEvent}
          updateEvents={handleUpdateEvents}
        />
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
  mapStateToProps,
  { createEvent, deleteEvent, updateEvent }
)(EventDashboard);
