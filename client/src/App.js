import SplashPage from "./components/Page/SplashPage";
import AppHeader from "./components/AppHeader/AppHeader";
import GlobalStyle from "./GlobalStyle";
import Button from "./components/Button/Button";
import React from "react";
import { GoogleMap } from "@react-google-maps/api";

function App() {
  return (
    <div className="App">
      <GoogleMap />
      {/* <GlobalStyle />
      <AppHeader />
      <SplashPage />
      <Button>Hallo Welt</Button>

      <a href="/storybook">To Storybook</a> */}
    </div>
  );
}

export default App;
