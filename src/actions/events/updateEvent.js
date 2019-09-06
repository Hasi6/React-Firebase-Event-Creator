import { UPDATE_EVENT } from "../../types/Types";

const updateEvent = (event) => dispatch =>{
    dispatch({
        type: UPDATE_EVENT,
        payload: event
    })
}

export default updateEvent;