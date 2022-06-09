import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import PurchaseConfirmation from "./PuchaseConfirmation";

export default function Membership() {
  const [locationVal, setLocationVal] = useState();
  const [programTypeVal, setProgramTypeVal] = useState();
  const [durationVal, setDurationVal] = useState();
  const [instructorVal, setInstructorVal] = useState();
  const [fullNameVal, setFullNameVal] = useState();
  const [emailAddressVal, setEmailAddressVal] = useState();

  const [purchaseConfirmation, setPurchaseConfirmation] = useState();

  const [showFormError, setShowFormError] = useState(false);

  const handleCloseErrorForm = () => setShowFormError(false);
  const handleShowErrorForm = () => setShowFormError(true);

  //* Returns true if all form fields on the page are filled in
  const isAllFilledIn = () => {
    return (
      typeof locationVal !== "undefined" &&
      typeof programTypeVal !== "undefined" &&
      typeof durationVal !== "undefined" &&
      typeof instructorVal !== "undefined" &&
      typeof fullNameVal !== "undefined" &&
      typeof emailAddressVal !== "undefined"
    );
  };

  return (
    <div className="page">
      <br />
      <br />
      <Container>
        <Container>
          <Row>
            <Col sm={4}>
              <h2>Membership Details</h2>
            </Col>
            <Col sm={6}>
              <>
                <Form.Group className="mb-3" id="locationForm">
                  <Form.Select
                    onChange={(e) => {
                      setLocationVal(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      -- Location --
                    </option>
                    <option value="0">uOttawa Campus - Minto</option>
                    <option value="0">Gatineau</option>
                    <option value="0">Orléans</option>
                    <option value="0">Nepean</option>
                    <option value="0">Kanata</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="programTypeForm">
                  <Form.Select
                    onChange={(e) => {
                      setProgramTypeVal(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      -- Program Type --
                    </option>
                    <option value="0">Judo</option>
                    <option value="0">Brazilian Jiu-Jitsu</option>
                    <option value="0">Wrestling</option>
                    <option value="0">Women's Class</option>
                    <option value="0">Open Mat</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="durationForm">
                  <Form.Select
                    onChange={(e) => {
                      setDurationVal(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      -- Duration --
                    </option>
                    <option value="10">
                      Open-mat Drop-in (one payment per session)
                    </option>
                    <option value="5">1 class</option>
                    <option value="25">1 week</option>
                    <option value="40">2 weeks</option>
                    <option value="60">1 month</option>
                    <option value="200">4 months</option>
                    <option value="350">8 months</option>
                    <option value="500">1 year</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="instructorForm">
                  <Form.Select
                    onChange={(e) => {
                      setInstructorVal(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      -- Instructor --
                    </option>
                    <option value="0">Kien Do - Judo Enthusiast</option>
                    <option value="0">Ella Smith - Judo/BJJ Coach</option>
                    <option value="0">
                      Bob McBobby - Former Canadian Judo Olympian
                    </option>
                    <option value="0">
                      Geneviève Boudreau - BJJ World Champion
                    </option>
                    <option value="0">Nate Diaz - NCAA D2 Wrestler</option>
                    <option value="0">
                      Sarah Kim - Judo and BJJ black belt
                    </option>
                  </Form.Select>
                </Form.Group>
              </>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={4}>
              <h3>Total Price: </h3>
            </Col>
            <Col sm={6}>
              {/* // TODO: If the user selects an option then selects the default option again, the form will not go back to "Please Select All Options Above". Also, as it stands, only the durationVal affects the total price at the moment. */}
              <h3 style={{ color: "#90EE90" }}>
                {typeof locationVal === "undefined" ||
                typeof programTypeVal === "undefined" ||
                typeof durationVal === "undefined" ||
                typeof instructorVal === "undefined"
                  ? "Please Select All Options Above"
                  : "$ " + durationVal + " CAD"}
              </h3>
            </Col>
          </Row>
        </Container>
        <br />
        <hr />
        <br />
        <Container>
          <Row>
            <Col sm={4}>
              <h2>Personal Information</h2>
            </Col>
            <Col sm={6} className="darkFont">
              <>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Full Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={(e) => {
                      setFullNameVal(e.target.value);
                    }}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    onChange={(e) => {
                      setEmailAddressVal(e.target.value);
                    }}
                  />
                </FloatingLabel>
              </>
              <Button
                variant="success"
                style={{ float: "right" }}
                onClick={() =>
                  isAllFilledIn()
                    ? setPurchaseConfirmation(true)
                    : handleShowErrorForm()
                }
              >
                Confirm Purchase
              </Button>
            </Col>
          </Row>
        </Container>
        <PurchaseConfirmation
          show={purchaseConfirmation}
          onHide={() => setPurchaseConfirmation(false)}
        />
      </Container>

      <Modal show={showFormError} onHide={handleCloseErrorForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>ERROR: Cannot Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have not filled in all of the fields in this form.
          <br />
          <br />
          Please fill in all information before clicking purchase.
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#8f001a", borderStyle: "none" }}
            onClick={handleCloseErrorForm}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
