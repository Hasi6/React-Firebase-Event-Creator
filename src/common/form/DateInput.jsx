import React from 'react'
import { Form, Label } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({input, width, placeholder, dateFormat,meta: {touched, onBlur, error}, ...rest}) => {
    return (
        <Form.Field error={touched && error}>
            <DatePicker 
            {...rest}
            dateFormat={dateFormat}
                placeholderText={placeholder}
                onDayChange={input.onChange}
                selected={input.value ? new Date(input.value) : null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                onChangeRaw = {(e)=> e.preventDefault(e)}
            />
            {touched && error && <Label basic color='red' pointing>{error}</Label>}
        </Form.Field>
    )
}

export default DateInput
