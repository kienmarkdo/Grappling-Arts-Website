import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function PurchaseConfirmationMessage(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thank you for joining the uOttawa Grappling Arts family
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Purchase Confirmed!</h4>
        <p>
          The receipt of your purchase will be sent to your email shortly.
          Please refresh the page.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{ backgroundColor: "#8f001a", borderStyle: "none" }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
