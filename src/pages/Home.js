import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../index.scss";

export default function Home() {
  const navigate = useNavigate(); // react router dom v6 hook

  const routeToMembership = () => {
    navigate("/membership");
  };

  return (
    <>
      <header className="homeStyle">
        <Card className="homeCardStyle">
          <Card.Body>
            <Card.Title style={{ fontSize: "50px", color: "white" }}>
              uOttawa Grappling Arts
            </Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text style={{ fontSize: "40px", color: "#aca39a" }}>
              Judo - BJJ - Wrestling
            </Card.Text>
            <Button
              variant="dark"
              style={{ fontSize: "30px" }}
              onClick={routeToMembership}
            >
              Book A Class
            </Button>
          </Card.Body>
        </Card>
      </header>
    </>
  );
}
