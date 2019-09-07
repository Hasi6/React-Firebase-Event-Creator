import React from 'react'
import { Form, Label } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

 
const DateInput = ({input, width, placeholder, dateFormat,meta: {touched, onBlur, error}}) => {
    console.log(typeof input.value);
    console.log(input.value);
    return (
        <Form.Field error={touched && error}>
            <DayPickerInput 
            inputProps={{readOnly: true}}
            dayPickerProps={{
                month: new Date(2018, 10),
                showWeekNumbers: true,
                todayButton: 'Today',
              }}
                placeholderText={placeholder}
                onDayChange={input.onChange}
                value={input.value ? new Date(input.value) : null}
                onBlur={input.onBlur}
                dateFormat={dateFormat}
                onChangeRaw = {(e)=> e.preventDefault(e)}
            />
            {onBlur && error && <Label basic color='red' pointing>{error}</Label>}
        </Form.Field>
    )
}

export default DateInput
