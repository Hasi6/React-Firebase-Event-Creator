import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea rows={rows} width={width} {...input} placeholder={placeholder} type={type}></textarea>
      {touched && error && <Label basic color='red' pointing>{error}</Label>}
    </Form.Field>
  );
};

export default TextArea;
