import React from "react";
import GlobalStyle from "../src/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

export const decorators = [
  (Story) => (
    <Router>
      <GlobalStyle />
      <Story />
    </Router>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^cn[A-Z].*" },
  layout: "fullscreen",
};
