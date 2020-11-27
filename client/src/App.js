import SplashPage from "./components/Page/SplashPage";
import AppHeader from "./components/AppHeader/AppHeader";
import GlobalStyle from "./GlobalStyle";
import Button from "./components/Button/Button";
import React from "react";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <SplashPage />
      <Button>Hallo Welt</Button>

      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
