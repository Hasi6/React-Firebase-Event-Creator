import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

// created components
import EventList from "../EventList/EventList";
import { loadEvents } from "../../../../actions/events/eventActions";
import LoadingComponent from "../../../../common/loading/LoadingComponent";

const EventDashboard = ({ events, loadEvents, loading }) => {
  return (
    <Grid>
      {loading ? (
        <LoadingComponent inverted={false}/>
      ) : (
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Activity Feed</h2>
          </Grid.Column>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events,
    loading: state.async.loading
  };
};

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventDashboard);
