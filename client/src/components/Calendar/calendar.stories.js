import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "./calendar";

export default {
  title: "Example/Calendar",
  component: Calendar,
};

export const CalendarDropDown = (args) => <DatePicker {...args} />;

// export const Login = Template.bind({});
// Login.args = {
//   title: "Login",
// };
