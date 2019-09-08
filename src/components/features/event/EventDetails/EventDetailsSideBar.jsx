import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";

const EventDetailsSideBar = ({ attendees }) => {
  const isHost = false;
  return (
    <Fragment>
      {attendees && (
        <Segment
          textAlign="center"
          style={{ border: "none" }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
          {attendees.length} {attendees.length === 1 ? "Person" : "Peoples"} are
          going
        </Segment>
      )}
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            Object.values(attendees).map((attendees, index) => {
              return (
                <Item key={index} style={{ position: "relative" }}>
                  {isHost && (
                    <Label
                      style={{ position: "absolute" }}
                      color="orange"
                      ribbon="right"
                    >
                      Host
                    </Label>
                  )}
                  <Item.Image size="tiny" rounded src={attendees.photoURL} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">{attendees.name}</Item.Header>
                  </Item.Content>
                </Item>
              );
            })}
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default EventDetailsSideBar;
