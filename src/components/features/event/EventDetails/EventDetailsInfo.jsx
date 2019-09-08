import React, { useState, Fragment } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import EventDetailsMap from "./EventDetailsMap";
import { format, parseISO } from "date-fns";
import LoadingComponent from "../../../../common/loading/LoadingComponent";

const EventDetailsInfo = ({ events }) => {
  const [mapToggle, setMapToggle] = useState(true);
  console.log(events.data);
  return (
    <Fragment>
      {events.date === undefined ? (
        <LoadingComponent inverted={false} />
      ) : (
        <Segment.Group>
          <Segment attached="top">
            <Grid>
              <Grid.Column width={1}>
                <Icon size="large" color="teal" name="info" />
              </Grid.Column>
              <Grid.Column width={15}>
                <p>{events.description}</p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="calendar" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={15}>
                <span>
                  {format(parseISO(events.date), "EEEE do LLLL")} at{" "}
                  {format(parseISO(events.date), "h:mm a")}
                </span>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Grid verticalAlign="middle">
              <Grid.Column width={1}>
                <Icon name="marker" size="large" color="teal" />
              </Grid.Column>
              <Grid.Column width={11}>
                <span>{events.city}</span>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button
                  color="teal"
                  size="tiny"
                  content={mapToggle ? "Show Map" : "Hide Map"}
                  onClick={() => setMapToggle(!mapToggle)}
                />
              </Grid.Column>
              {!mapToggle && (
                <EventDetailsMap
                  lat={events.venueLatLng.lat}
                  lng={events.venueLatLng.lng}
                />
              )}
            </Grid>
          </Segment>
        </Segment.Group>
      )}
    </Fragment>
  );
};

export default EventDetailsInfo;
