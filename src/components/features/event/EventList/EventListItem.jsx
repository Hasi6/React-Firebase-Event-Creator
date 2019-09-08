import React, { Fragment } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

// Redux
import { deleteEvent } from "../../../../actions/events/eventActions";
import { format } from "date-fns";



const EventListItem = ({ events, deleteEvent }) => {
  return (<Fragment>
    {events && <Segment.Group>
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
          <Icon name="clock" /> {format(events.date.toDate(), 'EEEE do LLLL')} at {format(events.date.toDate(),'h:mm a')}
          <Icon name="marker" /> {events.venue}
        </span>
      </Segment>
      <Segment secondary>
      <List horizontal>
        {events.attendees && Object.values(events.attendees).map((attendees, index)=>{
          return (
          <EventListAttendee key={index} attendees={attendees} />
          )
        })}
        </List>
      </Segment>
      <Segment clearing>
        <span>{events.description}</span>
        <Button as="a" color="red" floated="right" content="Delete" onClick={()=>deleteEvent(events)}/>
        <Button as={Link} to={`/events/${events.id}`} color="teal" floated="right" content="View"/>
      </Segment>
    </Segment.Group>}
    </Fragment>);
};
export default connect(null, {deleteEvent})(EventListItem);
