import React from "react";
import AllRunsPage from "./AllRunsPage";

export default {
  title: "Page/AllRunsPage",
  component: AllRunsPage,
};

const Template = (args) => <AllRunsPage {...args} />;

export const Favorite = Template.bind({});
Favorite.args = {
  isFavorite: true,
  date: "06.12.2020",
  time: "18:30",
  distance: "10km",
};
export const NotFavorite = Template.bind({});
NotFavorite.args = {
  isFavorite: false,
  date: "06.12.2020",
  time: "18:30",
  distance: "10km",
};
