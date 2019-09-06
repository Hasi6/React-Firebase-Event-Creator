import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = ({ events, selectEvent, deleteEvent }) => {
  return <Segment.Group>
  <Segment>
    <Item.Group>
      <Item>
        <Item.Image
          size="tiny"
          circular
          src={events.hostPhotoURL}
        />
        <Item.Content>
          <Item.Header as="a">{events.title}</Item.Header>
          <Item.Description>
            Hosted by <span>{events.hostedBy}</span>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
  <Segment>
    <span>
      <Icon name="clock" /> {events.date} |
      <Icon name="marker" /> {events.venue}
    </span>
  </Segment>
  <Segment secondary>
  <List horizontal>
    {events.attendees && events.attendees.map((attendees)=>{
      return (
      <EventListAttendee key={attendees.id} attendees={attendees} />
      )
    })}
    </List>
  </Segment>
  <Segment clearing>
    <span>{events.description}</span>
    <Button as="a" color="red" floated="right" content="Delete" onClick={()=>deleteEvent(events)}/>
    <Button as="a" color="teal" floated="right" content="View" onClick={()=>selectEvent(events)}/>
  </Segment>
</Segment.Group>;
};
export default EventListItem;
