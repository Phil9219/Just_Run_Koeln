import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components/macro";
import "./Calendar.css";
import PropTypes from "prop-types";

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
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4%;
`;

export default function Calendar({ value, onChange }) {
  return (
    <InputContainer>
      <StyledDatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        minDate={new Date()}
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd MMMM, HH:mm"
      />
    </InputContainer>
  );
}

Calendar.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
