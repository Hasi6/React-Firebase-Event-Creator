import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "../../types/Types";

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
