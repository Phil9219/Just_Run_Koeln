import React from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const NameYourRun = Template.bind({});
NameYourRun.args = {
  placeholder: "Name Your Run",
  value: "",
};

export const ChooseStartAdress = Template.bind({});
ChooseStartAdress.args = {
  placeholder: "Choose Start Adress",
  value: "",
};

export const ChooseDistance = Template.bind({});
ChooseDistance.args = {
  placeholder: "Choose Distance ",
  value: "",
};
export const UserName = Template.bind({});
UserName.args = {
  placeholder: "Username ",
  value: "",
};
export const Password = Template.bind({});
Password.args = {
  placeholder: "Password ",
  value: "",
};
