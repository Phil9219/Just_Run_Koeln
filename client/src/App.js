import SplashPage from "../src/components/Page/SplashPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <SplashPage />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
