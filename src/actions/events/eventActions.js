import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENTS } from "../../types/Types";
import { asyncActionStart, asyncActionFinished, asyncActionError } from "../async/asyncAction";
import { fetchSampleData } from "../../data/mockApi";

export const createEvent = event => dispatch => {
  dispatch({
    type: CREATE_EVENT,
    payload: { event }
  });
};

export const updateEvent = event => dispatch => {
  dispatch({
    type: UPDATE_EVENT,
    payload: { event }
  });
};

export const deleteEvent = eventId => dispatch => {
  dispatch({
    type: DELETE_EVENT,
    payload: { eventId }
  });
};

export const loadEvents = () => async dispatch => {
  try {
      dispatch(asyncActionStart());
      const events = await fetchSampleData();
      dispatch({type: FETCH_EVENTS, payload: {events}});
      dispatch(asyncActionFinished())
  } catch (err) {
    console.error(err.message);
    dispatch(asyncActionError())
  }
}