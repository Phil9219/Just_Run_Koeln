import React from "react";
import GlobalStyle from "../src/GlobalStyle";
require("dotenv").config();
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^cn[A-Z].*" },
  layout: "fullscreen",
};
