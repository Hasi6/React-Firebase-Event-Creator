import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

const EventList = ({events, selectEvent,deleteEvent})=>{
    return(
        <Fragment>
            {events.map((event)=>{
                return <EventListItem key={event.id} events={event} deleteEvent={deleteEvent}/>
            })}
        </Fragment>
    )
}
export default EventList;