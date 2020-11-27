import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onSelect={(date) => setStartDate(date)} />
  );
}
