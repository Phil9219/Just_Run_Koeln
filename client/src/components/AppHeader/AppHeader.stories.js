import React from "react";
import AppHeader from "./AppHeader";

export default {
  title: "Components/AppHeader",
  component: AppHeader,
};

export const Heading = (args) => <AppHeader {...args} />;
