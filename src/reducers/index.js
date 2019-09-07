import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

// Reducers
import eventsReducer from "./events/eventReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  form: FormReducer
});

export default rootReducer;
