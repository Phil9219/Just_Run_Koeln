import React from "react";
// import LoginPage from "../src/components/Page/LoginPage";
import GlobalStyle from "./GlobalStyle";
// import Datepicker from "../src/components/Calendar/Calendar";
import ChooseYourRunPage from "../src/components/Page/ChooseYourRunPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <ChooseYourRunPage />
      </div>
    </>
  );
}

export default App;
