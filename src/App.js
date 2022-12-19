import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import withSplashScreen from "./components/withSplashScreen";
import { CursorProvider } from "react-cursor-custom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills"

function App() {
  return (
    <div className="App">
     <CursorProvider
        color={'grey'}
        ringSize={25}
        transitionTime={75}
      >
        <NavBar />
        <Banner />
        <Skills />
      </CursorProvider>
    </div>
  );
}

export default withSplashScreen(App);
