import { INCREMENT_COUNTER, DECREMENT_COUNTER, ASYNC_ACTION_START } from "../types/Types";
import { asyncActionStart, asyncActionFinished } from "./async/asyncAction";

export const incrementCounter = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNTER
  });
};

export const decrementCounter = ()=> dispatch =>{
  dispatch({
    type: DECREMENT_COUNTER
  });
}

const delay = (ms) => {
  return new Promise(res => setTimeout(res, ms))
}

export const incrementAsync = (name)=> {
  return async dispatch => {
    dispatch({type: ASYNC_ACTION_START, payload: name})
    await delay(1000)
    dispatch(incrementCounter());
    dispatch(asyncActionFinished());
  }
}

export const decrementAsync = (name)=> {
  return async dispatch => {
    dispatch({type: ASYNC_ACTION_START, payload: name})
    await delay(1000)
    dispatch({type: DECREMENT_COUNTER});
    dispatch(asyncActionFinished());
  }
}