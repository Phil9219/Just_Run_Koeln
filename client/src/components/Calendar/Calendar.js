import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components/macro";
import "./Calendar.css";
const StyledDatePicker = styled(DatePicker)`
  height: 40px;
  width: 100%;
  border: solid 2px var(--secondary-color);
  background: none;
  color: var(--secondary-color);
  font-family: "Heiti SC", adobe-heiti-std, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  text-align: center;

  ::placeholder {
    color: var(--inputfield-color);
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4%;
`;

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <InputContainer>
      <StyledDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        minDate={new Date()}
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd MMMM, HH:mm"
      />
    </InputContainer>
  );
}
