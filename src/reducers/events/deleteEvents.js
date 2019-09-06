import Events from "../../components/features/event/EventDashboard/EventListArray";
import { createReducer } from "../../common/util/reducerUtil";
import { DELETE_EVENT } from "../../types/Types";

const initialState = Events;

const deleteEvent = (state)=>{
    
}

export default createReducer(initialState, {
    [DELETE_EVENT] : deleteEvent
});