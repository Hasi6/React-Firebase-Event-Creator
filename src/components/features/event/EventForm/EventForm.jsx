import React, { Fragment, useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import cuid from "cuid";

const EventForm = ({ isOpen, hideForm, newEvent, selectedEvent, updateEvents }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventHostedBy, setEventHostedBy] = useState("");

  const onChange = (e, name) => {
    name(e.target.value);
  };
  console.log(isOpen);
  const renderData = () => {
    if (selectedEvent !== undefined) {
      if(selectedEvent !== null){
        const { title, date, city, venue, hostedBy } = selectedEvent;
      setEventTitle(title);
      setEventDate(date);
      setEventCity(city);
      setEventVenue(venue);
      setEventHostedBy(hostedBy);
    } else {
      setEventTitle("");
      setEventDate("");
      setEventCity("");
      setEventVenue("");
      setEventHostedBy("");
    }
      }
  };

  useEffect(() => {
    renderData();
  }, [selectedEvent]);

  const onSubmit = e => {
    e.preventDefault();
    const body = {
      title: eventTitle,
      date: eventDate,
      city: eventCity,
      venue: eventVenue,
      hostedBy: eventHostedBy,
    };
    if(selectedEvent === null){
      body.hostPhotoURL= "./assets/images/user.png"
      body.id = cuid();
      return newEvent(body);
    }
    body.id = selectedEvent.id
    body.hostPhotoURL= selectedEvent.hostPhotoURL;
    return updateEvents(body);
  };

  const showForm = () => {
    if (isOpen || isOpen === undefined) {
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
            <Button
              type="button"
              onClick={() => {
                hideForm();
              }}
            >
              Cancel
            </Button>
          </Form>
        </Segment>
      );
    }
    return null;
  };

  return <Fragment>{showForm()}</Fragment>;
};
export default EventForm;
