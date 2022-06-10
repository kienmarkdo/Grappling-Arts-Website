import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Instructors() {
  const navigate = useNavigate(); // react router dom v6 hook

  const routeToMembership = () => {
    navigate("/membership");
  };

  return (
    <>
      <Container
        style={{
          marginTop: "50px",
          display: "grid",
        }}
      >
        <Row>
          <Col>
            <Card className="instructorCardStyle">
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", fontWeight: "normal" }}
                >
                  Kien Do
                  <br />
                  Judo enthusiast
                </Card.Title>
                <Card.Img
                  className="instructorCardImgStyle"
                  variant="top"
                  src="https://media.discordapp.net/attachments/983190148206428190/983939097896828979/unknown.png"
                />
                <Card.Text>
                  Founder/Judo enthusiast
                  <br />
                  <br />
                  Kien is the founder of the uOttawa Grappling Arts club and
                  he's not even good at judo. He made this website for SEG 3525
                  so he can write whatever he wants.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="instructorCardStyle">
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", fontWeight: "normal" }}
                >
                  Ella Smith
                  <br />
                  Judo/BJJ Coach
                </Card.Title>
                <Card.Img
                  className="instructorCardImgStyle"
                  variant="top"
                  src="https://media.istockphoto.com/photos/head-shot-studio-portrait-millennial-pleasant-indian-ethnicity-worker-picture-id1199847347?k=20&m=1199847347&s=612x612&w=0&h=7EZjWU8ZqOe1EUxKMSPK0ey_5QuEJGfnVuD2Qa3y-zk="
                  alt="https://www.istockphoto.com/search/2/image?phrase=headshot"
                />
                <Card.Text>
                  Judo/BJJ/Women's instructor
                  <br />
                  <br />
                  Ella started BJJ when she was in her teens and later picked up
                  Judo in university. She has coached athletes from all
                  backgrounds and is NCCP 2 certified in Ontario.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="instructorCardStyle">
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", fontWeight: "normal" }}
                >
                  Bob McBobby
                  <br />
                  Former Canadian Olympian
                </Card.Title>
                <Card.Img
                  className="instructorCardImgStyle"
                  variant="top"
                  src="https://media.istockphoto.com/photos/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-picture-id1171169127?k=20&m=1171169127&s=612x612&w=0&h=DxYc1UDQagCiuuaiR1OMRztEsOnWBXwjLPlVqVnn4eY="
                />
                <Card.Text>
                  Competitive Judo instructor
                  <br />
                  <br />
                  Bob was a 3-time Olympian for Canada, earning our country a
                  silver medal at the Rio 2016 Olympics. Bob has 8 years of
                  experience in coaching athletes who show great potential and
                  interest in becoming a world-class judoka.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="instructorCardStyle">
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", fontWeight: "normal" }}
                >
                  Geneviève Boudreau
                  <br />
                  BJJ World Champion
                </Card.Title>
                <Card.Img
                  className="instructorCardImgStyle"
                  variant="top"
                  src="https://media.istockphoto.com/photos/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses-picture-id1144287292?k=20&m=1144287292&s=612x612&w=0&h=gaoqkiL6LFzghQfAQ9q8SbLUqtMIpzJNaKCegS3Wjmw="
                />
                <Card.Text>
                  Competitive/Women's BJJ instructor
                  <br />
                  <br />
                  Geneviève struggled in school as a teenager and decided to
                  pick up BJJ as a hobby. In 2019, she became the first Canadian
                  female world champion in her division. She continues to
                  compete and promote BJJ for young girls like her.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="instructorCardStyle">
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", fontWeight: "normal" }}
                >
                  Nate Diaz
                  <br />
                  NCAA D2 Wrestler
                </Card.Title>
                <Card.Img
                  className="instructorCardImgStyle"
                  variant="top"
                  src="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0="
                />
                <Card.Text>
                  Wrestling Instructor
                  <br />
                  <br />
                  Nate represented California as a wrestler during his
                  university studies in 2014 where he won one gold medal and two
                  silver medals. Nate believes he is a learner for life, and as
                  such, can teach students in a way that is relatable and easy
                  to understand.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="instructorCardStyle">
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", fontWeight: "normal" }}
                >
                  Sarah Kim
                  <br />
                  Judo and BJJ black belt
                </Card.Title>
                <Card.Img
                  className="instructorCardImgStyle"
                  variant="top"
                  src="https://media.istockphoto.com/photos/smiling-businesswoman-over-gray-background-picture-id557608545?k=20&m=557608545&s=612x612&w=0&h=uUpaak4oJHBJ86CUtJSt2fUaC3mucpHAzEbMrABglQU="
                />
                <Card.Text>
                  Judo/BJJ instructor (all skill-levels)
                  <br />
                  <br />
                  Sarah has over 15 years of experience on the mat, doing judo
                  since 2008 and picking up BJJ in 2014 while staying in Canada
                  as an international student at uOttawa. Sarah aims to teach
                  her students to be a well-rounded grappler who can dominate
                  the fight both standing and on the ground.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Container style={{ textAlign: "center" }}>
          <br />
          <h1>
            Interested? Book a class with us today!{" "}
            <Button
              variant="success"
              style={{ fontSize: "30px" }}
              onClick={routeToMembership}
            >
              Sign Me Up!
            </Button>
          </h1>
          <br />
        </Container>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
}
