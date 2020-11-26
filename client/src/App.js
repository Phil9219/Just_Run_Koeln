import SplashPage from "./components/Page/SplashPage";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <SplashPage />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
