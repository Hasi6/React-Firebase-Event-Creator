import { combineReducers } from "redux";

// Reducers
import eventsReducer from "./events/eventReducer";


const rootReducer = combineReducers({
    events : eventsReducer,
})

export default rootReducer;