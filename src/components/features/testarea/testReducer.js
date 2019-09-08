import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../../../types/Types";
import { createReducer } from "../../../common/util/reducerUtil";

const initialState = 42;

  const incrementCounter = (state)=>{
      return state + 1 ;
  }
  const decrementCounter = (state)=>{
    return state - 1 ;
}

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
});
