import { DELETE_EVENT } from "../../types/Types";

const deleteEvents = event => dispatch => {
  dispatch({
    type: DELETE_EVENT,
    payload: event
  });
};
export default deleteEvents;
