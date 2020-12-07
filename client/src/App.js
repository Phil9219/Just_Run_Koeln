import React from "react";
import GlobalStyle from "./GlobalStyle";
import SplashPage from "./components/Page/SplashPage";
import LoginPage from "./components/Page/LoginPage";
import ChooseYourRunPage from "./components/Page/ChooseYourRunPage";
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
          <Route path="/choose_your_run">
            <ChooseYourRunPage />
          </Route>
          <Route path="/setup_run">
            <RunSetupPage />
          </Route>
          <Route path="/created_run">
            <CreatedRunPage />
          </Route>
          <Route path="/runs_done">
            <RunsDonePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
