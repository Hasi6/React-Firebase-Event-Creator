import Events from "../../components/features/event/EventDashboard/EventListArray";

import { createReducer } from "../../common/util/reducerUtil";
import { CREATE_EVENT } from "../../types/Types";

const initialState = Events;

const createEvents = (state, payload) => {
    return [...state, payload.event]
}

export default createReducer(initialState, {
    [CREATE_EVENT] : createEvents
});

