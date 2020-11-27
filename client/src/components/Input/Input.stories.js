import React from "react";
import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const NameYourRun = Template.bind({});
NameYourRun.args = {
  title: "Name Your Run",
};

export const ChooseStartAdress = Template.bind({});
ChooseStartAdress.args = {
  title: "Choose Start Adress",
};

export const ChooseDistance = Template.bind({});
ChooseDistance.args = {
  title: "Choose Distance ",
};
export const UserName = Template.bind({});
UserName.args = {
  title: "Username ",
};
export const Password = Template.bind({});
Password.args = {
  title: "Password ",
};
