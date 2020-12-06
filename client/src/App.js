import React from "react";
// import LoginPage from "../src/components/Page/LoginPage";
import GlobalStyle from "./GlobalStyle";
// import Datepicker from "../src/components/Calendar/Calendar";
// import ChooseYourRunPage from "../src/components/Page/ChooseYourRunPage";
// import CreatedRunPage from "./components/Page/CreatedRunPage";
import RunsDonePage from "./components/Page/RunsDonePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <RunsDonePage />
      </div>
    </>
  );
}

export default App;
