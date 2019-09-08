import React, { Fragment } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

// created components
import EventList from "../EventList/EventList";
import { loadEvents } from "../../../../actions/events/eventActions";
import LoadingComponent from "../../../../common/loading/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";

const EventDashboard = ({ events, loadEvents, loading }) => {
  console.log(events);
  return (
    <Fragment>
      {events && <Grid>
        {loading ? (
          <LoadingComponent inverted={false} />
        ) : (
          <Grid>
            <Grid.Column width={10}>
              <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
              <EventActivity />
            </Grid.Column>
          </Grid>
        )}
      </Grid>}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    events: state.firestore.ordered.events,
    loading: state.async.loading
  };
};

export default connect(
  mapStateToProps,
  { loadEvents }
)(firestoreConnect([{collection: 'events'}])(EventDashboard));
