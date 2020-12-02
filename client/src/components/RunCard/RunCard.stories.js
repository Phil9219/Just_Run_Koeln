import React from "react";
import RunCard from "./RunCard";

export default {
  title: "Components/RunCard",
  component: RunCard,
};

const Template = (args) => <RunCard {...args} />;

export const Favorite = Template.bind({});
Favorite.args = {
  isFavorite: true,
};
export const NotFavorite = Template.bind({});
NotFavorite.args = {
  isFavorite: false,
};

export const Date = Template.bind({});
Date.args = {
  date: "06.12.2020",
};

export const Time = Template.bind({});
Time.args = {
  time: "18:30",
};

export const Distance = Template.bind({});
Distance.args = {
  distance: "10km",
};
