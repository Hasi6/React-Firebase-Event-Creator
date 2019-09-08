import React from "react";
import { connect } from "react-redux";

// Redux
import TestPlaceApi from "./TestPlaceApi";
import {
  incrementCounter,
  decrementCounter,
  decrementAsync,
  incrementAsync
} from "../../../actions/testAction";
import { Button } from "semantic-ui-react";

const TestComponent = ({
  testReducer,
  incrementCounter,
  decrementCounter,
  decrementAsync,
  incrementAsync,
  loading,
  buttonName
}) => {

  return (
    <div>
      <h1>What is the most Meaningful Number between 40 and 50 ?</h1>
      <h1>Answer is {testReducer}</h1>
      <Button
        name="decrement"
        loading={loading && buttonName === 'decrement'}
        className="ui button primary"
        onClick={(e) => decrementAsync(e.target.name)}
      >
        <i className="ui icon minus"></i>
      </Button>
      <Button
        name="increment"
        loading={loading && buttonName === 'increment'}
        className="ui button primary"
        onClick={(e) => incrementAsync(e.target.name)}
      >
        {" "}
        <i className="ui icon plus"></i>{" "}
      </Button>
      <TestPlaceApi />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    testReducer: state.testReducer,
    loading: state.async.loading,
    buttonName: state.async.name
  };
};

export default connect(
  mapStateToProps,
  { incrementCounter, decrementCounter, decrementAsync, incrementAsync }
)(TestComponent);
