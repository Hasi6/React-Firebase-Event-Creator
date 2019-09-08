import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import {reducer as ToastrReducer} from 'react-redux-toastr';

// Reducers
import eventsReducer from "./events/eventReducer";
import modalReducer from "./modal/modalReducer";
import authReducer from "./auth/authReducer";
import asyncReducer from "./async/asyncReducer";
import testReducer from '../components/features/testarea/testReducer';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  testReducer,
  events: eventsReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastrReducer
});

export default rootReducer;
