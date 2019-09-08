import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

// Reducers
import eventsReducer from "./events/eventReducer";
import modalReducer from "./modal/modalReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  form: FormReducer,
  modals: modalReducer
});

export default rootReducer;
