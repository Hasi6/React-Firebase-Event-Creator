import React from "react";
import { List, Image } from "semantic-ui-react";

const EventListAttendee = ({ attendees }) => {

  return (<List.Item>
  <Image as="a" size="mini" rounded src={attendees.photoURL} />
</List.Item>);
};
export default EventListAttendee;
