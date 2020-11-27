import SplashPage from "./components/Page/SplashPage";
import AppHeader from "./components/AppHeader/AppHeader";
import GlobalStyle from "./GlobalStyle";
import { Buttons } from "./components/Button/Button";
import React, { useState } from "react";
import Calendar from "./components/Calendar/calendar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <SplashPage />
      <Buttons />
      <Calendar />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
