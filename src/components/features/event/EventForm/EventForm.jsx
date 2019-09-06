import React, { Fragment, useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const EventForm = ({isOpen, hideForm})=>{

    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [eventVenue, setEventVenue] = useState('');
    const [eventHostedBy, setEventHostedBy] = useState('');

    const onChange = (e, name)=>{
        name(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(eventTitle, eventDate, eventCity, eventVenue, eventHostedBy);
    }

    const showForm = ()=>{
        if(isOpen){
            return (
                <Segment>
                <Form onSubmit={(e)=>onSubmit(e)}>
                  <Form.Field>
                    <label>Event Title</label>
                    <input value={eventTitle}  placeholder="Event Title" onChange={(e)=>onChange(e, setEventTitle)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <input value={eventDate} type="date" placeholder="Event Date" onChange={(e)=>onChange(e, setEventDate)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>City</label>
                    <input value={eventCity} placeholder="City event is taking place" onChange={(e)=>onChange(e, setEventCity)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Venue</label>
                    <input value={eventVenue} placeholder="Enter the Venue of the event" onChange={(e)=>onChange(e, setEventVenue)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Hosted By</label>
                    <input value={eventHostedBy} placeholder="Enter the name of person hosting" onChange={(e)=>onChange(e, setEventHostedBy)}/>
                  </Form.Field>
                  <Button positive type="submit">
                    Submit
                  </Button>
                  <Button type="button" onClick={()=>{hideForm()}} >Cancel</Button>
                </Form>
              </Segment>
            )
        }return null
    }

    return (
          <Fragment>{showForm()}</Fragment>    
    )
}
export default EventForm