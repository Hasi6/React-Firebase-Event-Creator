/*global google */
import React, { Fragment, useState } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import cuid from "cuid";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";

// Redux
import {
  createEvent,
  updateEvent
} from "../../../../actions/events/eventActions";

// Redux Reusable Forms
import TextInput from "../../../../common/form/TextInput";
import TextArea from "../../../../common/form/TextArea";
import SelectInput from "../../../../common/form/SelectInput";
import DateInput from "../../../../common/form/DateInput";
import PlaceInput from "../../../../common/form/PlaceInput";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "Event Title is Required" }),
  category: isRequired({ message: "Category is Required" }),
  description: composeValidators(
    isRequired({ message: "Please Enter a Description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 Characters"
    })
  )(),
  city: isRequired("city"),
  venues: isRequired("venue"),
  date: isRequired("date")
});

const EventForm = ({
  history,
  createEvent,
  updateEvent,
  handleSubmit,
  initialValues,
  invalid,
  submitting,
  pristine,
  change
}) => {
  const [cityLatLng, setCityLatLng] = useState({});
  const [venueLatLng, setVenueLatLng] = useState({});

  const formatDate = date => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latLng => setCityLatLng(latLng))
      .then(() => {
        change("city", selectedCity);
      })
      .catch(error => console.error("Error", error));
  };

  const handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latLng => setVenueLatLng(latLng))
      .then(() => {
        change("venue", selectedVenue);
      })
      .catch(error => console.error("Error", error));
  };

  const onSubmit = values => {
    const formatedDate = formatDate(values.date);
    values.date = formatedDate;
    values.venueLatLng = venueLatLng;

    if (initialValues.id) {
      updateEvent(values);
      return history.push(`/events/${initialValues.id}`);
    } else {
      let value = {
        ...values,
        hostPhotoURL: "./assets/images/user.png",
        id: cuid(),
        attendees: []
      };
      createEvent(value);
      console.log(value);
      return history.push(`/events/${value.id}`);
    }
    console.log(values);
  };

  const showForm = () => {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Field
                name="title"
                component={TextInput}
                placeholder="Event Title"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                // multiple={true}
                placeholder="Event Category"
              />
              <Field
                name="description"
                component={TextArea}
                rows={10}
                placeholder="Event Description"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                component={PlaceInput}
                options={{ types: ["(cities)"] }}
                onSelect={handleCitySelect}
                placeholder="Location"
              />
              <Field
                name="venue"
                options={{ location: new google.maps.LatLng(cityLatLng),
                radius: 1000,
                types: ['establishment']
                }}
                onSelect={handleVenueSelect}
                component={PlaceInput}
                placeholder="Venue"
              />
              <Field name="date" component={DateInput} placeholder="Date" />
              <Button
                positive
                type="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  };

  return <Fragment>{showForm()}</Fragment>;
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { initialValues: event };
};

export default connect(
  mapStateToProps,
  { createEvent, updateEvent }
)(reduxForm({ form: "eventForm", validate })(EventForm));
