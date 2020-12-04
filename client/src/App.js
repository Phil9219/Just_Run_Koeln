import React from "react";
import LoginPage from "../src/components/Page/LoginPage";
import GlobalStyle from "./GlobalStyle";
import Datepicker from "../src/components/Calendar/Calendar";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <LoginPage />
      </div>
    </>
  );
}

export default App;
