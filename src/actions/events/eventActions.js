import {
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENTS
} from "../../types/Types";
import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError
} from "../async/asyncAction";
import { fetchSampleData } from "../../data/mockApi";
import { toastr } from "react-redux-toastr";

export const createEvent = event => async dispatch => {
  try {
    dispatch({
      type: CREATE_EVENT,
      payload: { event }
    });
    toastr.success("Success!", "New Event has been Created");
  } catch (err) {
    console.error(err.message);
    toastr.error("Oops!", "Something went Wrong Please Try Again Later");
  }
};

export const updateEvent = event => async dispatch => {
  try {
    dispatch({
      type: UPDATE_EVENT,
      payload: { event }
    });
    toastr.success("Success!", "Successfully Update the event");
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteEvent = eventId => dispatch => {
  dispatch({
    type: DELETE_EVENT,
    payload: { eventId }
  });
  toastr.warning("Success!", "Event has been Deleted");
};

export const loadEvents = () => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const events = await fetchSampleData();
    dispatch({ type: FETCH_EVENTS, payload: { events } });
    dispatch(asyncActionFinished());
  } catch (err) {
    console.error(err.message);
    dispatch(asyncActionError());
  }
};
