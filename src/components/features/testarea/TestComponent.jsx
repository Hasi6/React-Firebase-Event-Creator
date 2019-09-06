import React from 'react';
import {connect} from 'react-redux';

// Redux
import testAction from '../../../actions/testAction';
import testAction2 from '../../../actions/testAction2';


const TestComponent = ({testReducer, testAction , testAction2}) => {
    console.log(testReducer);


    const onClick = (type)=>{
        if(type === 'plus'){
            testAction();
        }else{
            testAction2();
        }
    }

    return (
        <div>
            <h1>What is the most Meaningful Number between 40 and 50 ?</h1>
            <h1>Answer is {testReducer}</h1>
            <button className="ui button primary" onClick={()=>onClick('minus')}><i className="ui icon minus"></i></button>
            <button className="ui button primary" onClick={()=>onClick('plus')}> <i className="ui icon plus"></i> </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        testReducer: state.testReducer
    }
}

export default connect(mapStateToProps, {testAction, testAction2})(TestComponent)
