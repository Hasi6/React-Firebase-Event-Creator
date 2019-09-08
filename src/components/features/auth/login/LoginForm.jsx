import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import {connect} from 'react-redux'
import TextInput from "../../../../common/form/TextInput";

// Redux
import { login } from "../../../../actions/auth/authActions";

const LoginForm = ({ login, handleSubmit }) => {
  console.log(login);
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  { login }
)(reduxForm({ form: "loginForm" })(LoginForm));
