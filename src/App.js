//* import components
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"; // react bootstrap library components
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
import ProgramJudo from "./pages/ProgramJudo";
import ProgramBJJ from "./pages/ProgramBJJ";
import ProgramWrestling from "./pages/ProgramWrestling";
import ProgramWomen from "./pages/ProgramWomen";
import ProgramOpenMat from "./pages/ProgramOpenMat";

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
              {/* =============================== */}
              <NavDropdown title="Programs">
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/program_judo"
                    style={{ color: "black", padding: "0" }}
                  >
                    Judo
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/program_bjj"
                    style={{ color: "black", padding: "0" }}
                  >
                    Brazilian Jiu-Jitsu
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/program_wrestling"
                    style={{ color: "black", padding: "0" }}
                  >
                    Wrestling
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/program_women"
                    style={{ color: "black", padding: "0" }}
                  >
                    Women's Program
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/program_open_mat"
                    style={{ color: "black", padding: "0" }}
                  >
                    Open-mat
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* =============================== */}
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
            <Route path="/program_judo" element={<ProgramJudo />} />
            <Route path="/program_bjj" element={<ProgramBJJ />} />
            <Route path="/program_wrestling" element={<ProgramWrestling />} />
            <Route path="/program_women" element={<ProgramWomen />} />
            <Route path="/program_open_mat" element={<ProgramOpenMat />} />
            <Route path="/instructors" element={<Instructors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
