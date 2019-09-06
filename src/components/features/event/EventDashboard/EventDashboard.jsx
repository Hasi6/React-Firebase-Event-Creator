import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

// created components
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";


import Events from "./EventListArray";


class EventDashboard extends Component {

  state = {
    events: Events,
    isOpen: false,
    selectedEvent: null
  }
  

   handleNewEvent = (newEvent)=>{
    const {events} = this.state
    this.setState({
      events: [...events,newEvent],
      isOpen: false,
    });
  }
  

  //  formOpen = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   })
  // };

  handleCreateFormOpen = ()=>{
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleFormCancel = ()=>{
    this.setState({
      isOpen: false,
      selectEvent: null
    })
  }

  handleUpdateEvents = (updatedEvent)=>{
    this.setState(({events})=>({
      events: events.map(event => {
        if(event.id === updatedEvent.id){
          return {...updatedEvent}
        }return event
      }),
      isOpen: false,
      selectedEvent: null
    }))
  }
  handleSelectEvent = (event)=>{
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  }

  deleteEvent = (deleteEvent)=>{
    let allEvents = this.state.events
    allEvents.map((event, index) => {
        if(event.id === deleteEvent.id){
          allEvents.splice(index,1);
          return this.setState({
            events: allEvents,
            isOpen: false,
      selectedEvent: null
          })
        }return this.setState({
          isOpen: false,
      selectedEvent: null
        })
      })
  }

  render () {
    const {events, isOpen, selectedEvent} = this.state
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} selectEvent={this.handleSelectEvent} deleteEvent={this.deleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={() => this.handleCreateFormOpen()}
            positive
            content={'Create Event'}
          ></Button>
          <EventForm isOpen={isOpen} hideForm={this.handleFormCancel} newEvent={this.handleNewEvent} selectedEvent={selectedEvent} updateEvents={this.handleUpdateEvents}/>
        </Grid.Column>
      </Grid>
    );
  }
};

export default EventDashboard;
