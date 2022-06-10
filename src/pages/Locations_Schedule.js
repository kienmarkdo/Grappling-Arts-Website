import React, { useState, Suspense } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Spinner,
  Table,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Locations_Schedule() {
  const navigate = useNavigate(); // react router dom v6 hook
  const routeToMembership = () => {
    navigate("/membership");
  };
  const [mapMarker, setMapMarker] = useState(
    "https://maps.google.com/maps?q=university%20of%20ottawa%20minto&t=&z=13&ie=UTF8&iwloc=&output=embed" // uOttawa - Minto
  );
  const [location, setLocation] = useState("Ottawa - Minto");
  const [phone, setPhone] = useState("613-555-0001");
  const [schedule, setSchedule] = useState([
    [
      "Wrestling\nNate Diaz\n17:30 - 19:00",
      "Women's\nElla Smith\n17:30 - 19:00",
      "Wrestling\nNate Diaz\n17:30 - 19:00",
      "Women's\nElla Smith\n17:30 - 19:00",
      "Wrestling\nNate Diaz\n17:30 - 19:00",
      "Wrestling\nNate Diaz\n9:00 - 10:30",
      "N/A",
    ],
    [
      "Judo\nKien Do\n19:00 - 20:30",
      "Judo\nKien Do\n19:00 - 20:30",
      "Judo\nBob McBobby\n19:00 - 20:30",
      "Open-mat\n19:00 - 22:00",
      "Judo\nBob McBobby\n19:00 - 20:30",
      "Judo/BJJ hybrid\n10:30 - 12:00",
      "N/A",
    ],
    [
      "BJJ\nGeneviève Boudreau\n20:30 - 22:00",
      "BJJ\nSarah Kim\n20:30 - 22:00",
      "BJJ\nElla Smith\n20:30 - 22:00",
      "N/A",
      "BJJ\nSarah Kim\n20:30 - 22:00",
      "Women's\nElla Smith\n10:30 - 12:00",
      "N/A",
    ],
  ]);

  return (
    <div className="page">
      <br />
      <Container>
        <Row>
          <Col sm={3}>
            <h1>View Locations</h1>
            <br />
            <br />
            <Form.Group className="mb-3" id="locationForm">
              <Form.Select
                onChange={(e) => {
                  let selectedLocation = "";
                  let selectedPhone = "";
                  let selectedSchedule = "";
                  let selectedMapsUrl = "";

                  switch (e.target.value) {
                    case "1":
                      selectedLocation = "Ottawa - Minto";
                      selectedPhone = "613-555-0001";
                      selectedSchedule = [
                        [
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n9:00 - 10:30",
                          "N/A",
                        ],
                        [
                          "Judo\nKien Do\n19:00 - 20:30",
                          "Judo\nKien Do\n19:00 - 20:30",
                          "Judo\nBob McBobby\n19:00 - 20:30",
                          "Open-mat\n19:00 - 22:00",
                          "Judo\nBob McBobby\n19:00 - 20:30",
                          "Judo/BJJ hybrid\n10:30 - 12:00",
                          "N/A",
                        ],
                        [
                          "BJJ\nGeneviève Boudreau\n20:30 - 22:00",
                          "BJJ\nSarah Kim\n20:30 - 22:00",
                          "BJJ\nElla Smith\n20:30 - 22:00",
                          "N/A",
                          "BJJ\nSarah Kim\n20:30 - 22:00",
                          "Women's\nElla Smith\n10:30 - 12:00",
                          "N/A",
                        ],
                      ];

                      selectedMapsUrl =
                        "https://maps.google.com/maps?q=university%20of%20ottawa%20minto&t=&z=13&ie=UTF8&iwloc=&output=embed";
                      break;
                    case "2":
                      selectedLocation = "Gatineau";
                      selectedPhone = "819-555-0002";
                      selectedSchedule = [
                        [
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "N/A",
                          "Women's\nGeneviève Boudreau\n17:30 - 19:00",
                          "N/A",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nGeneviève Boudreau\n9:00 - 10:30",
                          "N/A",
                        ],
                        [
                          "Women's\nGeneviève Boudreau\n19:30 - 20:30",
                          "N/A",
                          "Judo\nSarah Kim\n19:00 - 20:30",
                          "N/A",
                          "Judo\nSarah Kim\n19:00 - 20:30",
                          "Judo/BJJ hybrid\n10:30 - 12:00",
                          "N/A",
                        ],
                        [
                          "BJJ\nGeneviève Boudreau\n20:30 - 22:00",
                          "N/A",
                          "BJJ\nGeneviève Boudreau\n20:30 - 22:00",
                          "N/A",
                          "BJJ\nGeneviève Boudreau\n20:30 - 22:00",
                          "N/A",
                          "N/A",
                        ],
                      ];
                      selectedMapsUrl =
                        "https://maps.google.com/maps?q=gatineau&t=&z=13&ie=UTF8&iwloc=&output=embed";
                      break;
                    case "3":
                      selectedLocation = "Orléans";
                      selectedPhone = "613-555-0003";
                      selectedSchedule = [
                        [
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nGeneviève Boudreau\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "N/A",
                          "Women's\nGeneviève Boudreau\n19:00 - 20:30",
                          "Women's\nGeneviève Boudreau\n9:00 - 10:30",
                          "N/A",
                        ],
                        [
                          "Judo\nSarah Kim\n19:00 - 20:30",
                          "BJJ\nGeneviève Boudreau\n19:00 - 20:30",
                          "Judo\nSarah Kim\n19:00 - 20:30",
                          "N/A",
                          "BJJ\nGeneviève Boudreau\n19:00 - 20:30",
                          "Open-mat\n10:30 - 12:00",
                          "N/A",
                        ],
                      ];
                      selectedMapsUrl =
                        "https://maps.google.com/maps?q=orleans&t=&z=13&ie=UTF8&iwloc=&output=embed";
                      break;
                    case "4":
                      selectedLocation = "Nepean";
                      selectedPhone = "613-555-0004";
                      selectedSchedule = [
                        [
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n9:00 - 10:30",
                          "N/A",
                        ],
                        [
                          "Judo\nSarah Kim\n19:00 - 20:30",
                          "Judo\nSarah Kim\n19:00 - 20:30",
                          "Judo\nKien Do\n19:00 - 20:30",
                          "Open-mat\n19:00 - 22:00",
                          "Judo\nKien Do\n19:00 - 20:30",
                          "Judo/BJJ hybrid\n10:30 - 12:00",
                          "N/A",
                        ],
                        [
                          "BJJ\nElla Smith\n20:30 - 22:00",
                          "BJJ\nElla Smith\n20:30 - 22:00",
                          "BJJ\nSarah Kim\n20:30 - 22:00",
                          "N/A",
                          "BJJ\nSarah Kim\n20:30 - 22:00",
                          "Women's\nElla Smith\n10:30 - 12:00",
                          "N/A",
                        ],
                      ];
                      selectedMapsUrl =
                        "https://maps.google.com/maps?q=nepean&t=&z=13&ie=UTF8&iwloc=&output=embed";
                      break;
                    case "5":
                      selectedLocation = "Kanata";
                      selectedPhone = "613-555-0005";
                      selectedSchedule = [
                        [
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "N/A",
                          "Women's\nElla Smith\n9:00 - 10:30",
                          "N/A",
                        ],
                        [
                          "BJJ\nElla Smith\n19:00 - 20:30",
                          "Judo\nBob McBobby\n19:00 - 20:30",
                          "BJJ\nElla Smith\n19:00 - 20:30",
                          "Judo\nBob McBobby\n19:00 - 22:00",
                          "N/A",
                          "Wrestling\nNate Diaz\n10:30 - 12:00",
                          "N/A",
                        ],
                      ];
                      selectedMapsUrl =
                        "https://maps.google.com/maps?q=kanata&t=&z=13&ie=UTF8&iwloc=&output=embed";
                      break;
                    default:
                      selectedLocation = "Ottawa - Minto";
                      selectedPhone = "613-555-0006";
                      selectedSchedule = [
                        [
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Women's\nElla Smith\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n17:30 - 19:00",
                          "Wrestling\nNate Diaz\n9:00 - 10:30",
                          "N/A",
                        ],
                        [
                          "Judo\nKien Do\n19:00 - 20:30",
                          "Judo\nKien Do\n19:00 - 20:30",
                          "Judo\nBob McBobby\n19:00 - 20:30",
                          "Open-mat\n19:00 - 22:00",
                          "Judo\nBob McBobby\n19:00 - 20:30",
                          "Judo/BJJ hybrid\n10:30 - 12:00",
                          "N/A",
                        ],
                        [
                          "BJJ\nGeneviève Boudreau\n20:30 - 22:00",
                          "BJJ\nSarah Kim\n20:30 - 22:00",
                          "BJJ\nElla Smith\n20:30 - 22:00",
                          "N/A",
                          "BJJ\nSarah Kim\n20:30 - 22:00",
                          "Women's\nElla Smith\n10:30 - 12:00",
                          "N/A",
                        ],
                      ];
                      selectedMapsUrl =
                        "https://maps.google.com/maps?q=university%20of%20ottawa%20minto&t=&z=13&ie=UTF8&iwloc=&output=embed";
                      break;
                  }
                  setLocation(selectedLocation);
                  setPhone(selectedPhone);
                  setSchedule(selectedSchedule);
                  setMapMarker(selectedMapsUrl);
                }}
              >
                <option selected disabled>
                  Search Location
                </option>
                <option value="1">uOttawa Campus - Minto</option>
                <option value="2">Gatineau</option>
                <option value="3">Orléans</option>
                <option value="4">Nepean</option>
                <option value="5">Kanata</option>
              </Form.Select>
            </Form.Group>
            <Suspense fallback={<Spinner animation="border" />}>
              <div>
                <iframe
                  title="Embedded Google Maps"
                  width={"100%"}
                  height={350}
                  src={mapMarker}
                />
              </div>
            </Suspense>
          </Col>
          {/* ======================================================================================================================= */}
          <Col sm={0}></Col>
          {/* ======================================================================================================================= */}
          <Col sm={8}>
            <h1>{location}</h1>
            <h3>{phone}</h3>
            <br />
            <Table striped bordered style={{ backgroundColor: "white" }}>
              <thead>
                <tr className="text-center">
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody style={{ whiteSpace: "pre-line" }}>
                {schedule.map((day) => {
                  return (
                    <tr>
                      {day.map((row) => {
                        return <td>{row}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <br />
            <br />
            <hr />
            <br />
            <h1>Interested? Book a class with us today!</h1>
            <br />
            <Button
              variant="success"
              style={{ fontSize: "30px" }}
              onClick={routeToMembership}
            >
              Sign Me Up!
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
