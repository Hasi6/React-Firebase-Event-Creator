import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import rootReducer from "../reducers";

import firebase from "../config/firebase";

const react_redux_firebase_config = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

const middlewares = [thunk.withExtraArgument({getFirestore, getFirebase })];

const composeWithEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares),
        reactReduxFirebase(firebase, react_redux_firebase_config),
        reduxFirestore(firebase)
      )

export const configureStore = createStore(
  rootReducer,
  composeWithEnhancer
);
export default configureStore;
