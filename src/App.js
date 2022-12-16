import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CursorProvider } from "react-cursor-custom";
import { NavBar } from "./components/NavBar";
// ADD CUSTOM CURSOR
function App() {
  return (
    <div className="App">
     <CursorProvider
        color={'grey'}
        ringSize={25}
        transitionTime={75}
      >
        <NavBar />
      </CursorProvider>
    </div>
  );
}

export default App;
