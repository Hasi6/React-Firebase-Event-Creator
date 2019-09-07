import React, { Fragment } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import cuid from "cuid";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
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

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({message: 'Event Title is Required'}),
  category: isRequired({message: 'Category is Required'}),
  description: composeValidators(
    isRequired({message: 'Please Enter a Description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 Characters'})
  )(),
  city: isRequired('city'),
  venues: isRequired('venue'),
  date: isRequired('date')
})

const EventForm = ({
  history,
  createEvent,
  updateEvent,
  handleSubmit,
  initialValues,
  invalid,
  submitting,
  pristine
}) => {

  const formatDate = (date)=>{
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const onSubmit = values => {

    const formatedDate = formatDate(values.date);

    values.date = formatedDate

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
      return history.push(`/events/${value.id}`);
    }
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
              <Field name="city" component={TextInput} placeholder="Location" />
              <Field name="venue" component={TextInput} placeholder="Venue" />
              <Field name="date" component={DateInput} placeholder="Date" />
              <Button positive type="submit" disabled={invalid || submitting || pristine}>
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
