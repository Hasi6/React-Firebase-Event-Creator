import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

// Reducers
import eventsReducer from "./events/eventReducer";
import modalReducer from "./modal/modalReducer";
import authReducer from "./auth/authReducer";
import asyncReducer from "./async/asyncReducer";
import testReducer from '../components/features/testarea/testReducer';

const rootReducer = combineReducers({
  testReducer,
  events: eventsReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
});

export default rootReducer;
