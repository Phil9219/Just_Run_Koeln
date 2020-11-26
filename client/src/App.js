import SplashPage from "./components/Page/SplashPage";
import AppHeader from "./components/AppHeader/AppHeader";
import GlobalStyle from "./GlobalStyle";
import { Buttons } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppHeader />
      <SplashPage />
      <Buttons />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
