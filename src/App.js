import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import withSplashScreen from "./components/withSplashScreen";
import { CursorProvider } from "react-cursor-custom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";

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
        <Experience />
        <Projects />
        <Footer />
      </CursorProvider>
    </div>
  );
}

export default withSplashScreen(App);
