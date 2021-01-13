import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import SplashPage from "./components/Page/SplashPage";
import LoginPage from "./components/Page/LoginPage";
import ChooseYourRunPage from "./components/Page/ChooseYourRunPage";
import CreatedRunPage from "./components/Page/CreatedRunPage";
import RunsDonePage from "./components/Page/RunsDonePage";
import RunSetupPage from "./components/Page/RunSetupPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState(true);

  useEffect(() => {
    setTimeout(() => setPage(false), 4000);
  }, []);

  return (
    <>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route exact path="/">
            {page ? <SplashPage /> : <LoginPage />}
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route path="/choose_your_run">
            <ChooseYourRunPage />
          </Route>
          <Route path="/setup_run">
            <RunSetupPage />
          </Route>
          <Route path="/runs/:_id">
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
