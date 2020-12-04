import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components/macro";

const StyledDatePicker = styled(DatePicker)`
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
`;

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <StyledDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      minDate={new Date()}
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="dd MMMM, HH:mm"
    />
  );
}
