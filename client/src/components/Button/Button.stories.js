import React from "react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  children: "Log In",
};

export const CreateAccount = Template.bind({});
CreateAccount.args = {
  main: true,
  children: "Create Account",
};

export const CreateRun = Template.bind({});
CreateRun.args = {
  children: "Create Run",
};
