import React, { Fragment, useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
import { connect } from "react-redux";

// Redux
import {
  createEvent,
  updateEvent
} from "../../../../actions/events/eventActions";

const EventForm = ({ event, history, createEvent, updateEvent }) => {
  console.log(event.id);

  const [eventTitle, setEventTitle] = useState(event.title);
  const [eventDate, setEventDate] = useState(event.date);
  const [eventCity, setEventCity] = useState(event.city);
  const [eventVenue, setEventVenue] = useState(event.venue);
  const [eventHostedBy, setEventHostedBy] = useState(event.hostedBy);

  const onChange = (e, name) => {
    name(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const body = {
      title: eventTitle,
      date: eventDate,
      city: eventCity,
      venue: eventVenue,
      hostedBy: eventHostedBy
    };
    if (event.id === undefined) {
      body.hostPhotoURL = "./assets/images/user.png";
      body.id = cuid();
      body.attendees = [];
      return createEvent(body);
    }
    body.id = event.id;
    body.hostPhotoURL = event.hostPhotoURL;
    body.attendees = event.attendees;
    body.description = event.description;
    body.category = event.category;
    return updateEvent(body);
  };

  const showForm = () => {
    return (
      <Segment>
        <Form onSubmit={e => onSubmit(e)} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              value={eventTitle}
              placeholder="Event Title"
              onChange={e => onChange(e, setEventTitle)}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              value={eventDate}
              type="date"
              placeholder="Event Date"
              onChange={e => onChange(e, setEventDate)}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={eventCity}
              placeholder="City event is taking place"
              onChange={e => onChange(e, setEventCity)}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={eventVenue}
              placeholder="Enter the Venue of the event"
              onChange={e => onChange(e, setEventVenue)}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              value={eventHostedBy}
              placeholder="Enter the name of person hosting"
              onChange={e => onChange(e, setEventHostedBy)}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  };

  return <Fragment>{showForm()}</Fragment>;
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostBy: ""
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { event };
};

export default connect(
  mapStateToProps,
  { createEvent, updateEvent }
)(EventForm);
