import React from "react";
import { Buttons } from "./Button";

export default {
  title: "Example/Button",
  component: Buttons,
};

const Template = (args) => <Buttons {...args} />;

export const Login = Template.bind({});
Login.args = {
  title: "Login",
};

export const CreateAccount = Template.bind({});
CreateAccount.args = {
  title: "Create Account",
};

export const CreateRun = Template.bind({});
CreateRun.args = {
  title: "Create Run",
};
