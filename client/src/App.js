import React from "react";
import GlobalStyle from "./GlobalStyle";
import SplashPage from "../src/components/Page/SplashPage";
import LoginPage from "../src/components/Page/LoginPage";
import ChooseYourRunPage from "../src/components/Page/ChooseYourRunPage";
import CreatedRunPage from "./components/Page/CreatedRunPage";
import RunsDonePage from "./components/Page/RunsDonePage";
import RunSetupPage from "./components/Page/RunSetupPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route exact path="/splash">
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/choose your run">
            <ChooseYourRunPage />
          </Route>
          <Route path="/setup run">
            <RunSetupPage />
          </Route>
          <Route path="/created run">
            <CreatedRunPage />
          </Route>
          <Route path="/runs done">
            <RunsDonePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
