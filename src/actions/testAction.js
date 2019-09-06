import { INCREMENT_COUNTER } from "../types/Types";

const testAction = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNTER
  });
};

export default testAction;
