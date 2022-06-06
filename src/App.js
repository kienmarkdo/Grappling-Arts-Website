//* import components
import { Navbar, Container, Nav } from "react-bootstrap"; // react bootstrap library components
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom"; // browser router v6 package

//* Import main pages (sections of website)
import About from "./pages/About";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import LocationsSchedule from "./pages/Locations_Schedule";
import Membership from "./pages/Membership";
import Programs from "./pages/Programs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbarStyle" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              uOttawa Grappling Arts
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/membership">
                Membership
              </Nav.Link>
              <Nav.Link as={Link} to="/locations_schedule">
                Locations & Schedule
              </Nav.Link>
              <Nav.Link as={Link} to="/programs">
                Programs
              </Nav.Link>
              <Nav.Link as={Link} to="/instructors">
                Our Instructors
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/locations_schedule" element={<LocationsSchedule />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/instructors" element={<Instructors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
