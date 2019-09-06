import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from "../reducers";

const middleware = [thunk]

export const configureStore = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
);
export default configureStore;