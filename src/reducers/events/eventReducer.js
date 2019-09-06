import Events from "../../components/features/event/EventDashboard/EventListArray";
import { createReducer } from "../../common/util/reducerUtil";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "../../types/Types";

const initialState = Events;

const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
    let newState = state;
    const index = newState.findIndex((x)=> x.id === payload.event.id)
    newState[index] = payload.event
    return newState
};

const deleteEvent = (state, payload) => {
    const index = state.filter((x)=> x.id !== payload.eventId.id)
    return index
  
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
