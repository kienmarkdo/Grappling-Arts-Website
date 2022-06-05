//* import packages and dependencies
import "bootstrap/dist/css/bootstrap.min.css"; // react bootstrap library

//* Import main pages (sections of website)
import About from "./pages/About";
import Instructors from "./pages/Instructors";
import LocationsSchedule from "./pages/LocationsSchedule";
import Membership from "./pages/Membership";
import Programs from "./pages/Programs";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <About></About>
    </div>
  );
}

export default App;
