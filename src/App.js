//* import packages and dependencies
import "bootstrap/dist/css/bootstrap.min.css"; // react bootstrap library

//* import components
import { Navbar, Container, Nav } from "react-bootstrap"; // react bootstrap library components

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
      <Navbar className="color-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">uOttawa Grappling Arts</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
