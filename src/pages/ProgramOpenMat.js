import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ProgramOpenMat() {
  return (
    <div className="page">
      <br />
      <Container>
        <Container>
          <h1>Open-mat Program</h1>
          <br />
          <h4>High Quality Open-Mat Sessions For Only $5</h4>
          <ul>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              No forms or contracts
            </li>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              Pay at the door
            </li>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              Go at your own pace
            </li>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              Strong and safe community
            </li>
          </ul>
          <hr />
          <br />
          <Row>
            <Col sm={8}>
              <h3>What's great about it?</h3>
              <br />
              <h4>Cross-training</h4>
              <p>
                Are you a judoka who wishes to grapple with BJJ practioners, or
                a a wrestler who has always wondered if you could throw a
                judoka? Open mats are a GREAT way to experiment with your skills
                and techniques and to test your limits without being restricted
                by a specific sport's ruleset. Train with other practitioners
                from other grappling disciplines, challenge them to see who
                comes out on top! Ever had the debate of "which sport is the
                best? Judo, BJJ, or wrestling?" Worry not, for you can test that
                on the mats at your own pace.
              </p>
              <h4>It's a social event!</h4>
              <p>
                We offer refreshments at our open-mats! You can spar, roll,
                grapple, or simply have conversations with other grappling
                lovers... AND have refreshments.
              </p>
              <h4>Large facilities</h4>
              <p>
                Open-mats are not fun when there's no room left on the mat.
                That's why all of our locations are equipped with large mats
                that can house up to 50 people at a once!
              </p>
              <br />
              <h3>Low price</h3>
              <p>It's $5. What more is there to say!</p>
              <br />
              <h3>Great for everyone</h3>
              <p>
                Open-mats are like social-events but with spice added to them!
                Anyone, regardless of whether you are a member or not, can
                participate in our open-mat sessions on a first-come first-serve
                basis! Come and train with others at your own pace, learn from
                other grappling arts and develop yourself to become a
                well-rounded grappler.
              </p>
              <br />
              <h3>Frequent and safe</h3>
              <p>
                Never check the calendar again as our open-mats are offered
                every week at most locations. You do not need to cancel that
                important date or decide between exams or grappling (if you do,
                choosing grappling would be the obvious decision).
              </p>
              <p>
                We understand that having an open-door policy could welcome
                individuals with malicious intent on the mats. That is why we
                are committed to having rules, NCCP Level 2 certified coaches,
                and stringent supervision during these open-mat sessions to
                ensure that every person feels safe on the mats.
              </p>
            </Col>
            <Col sm={4}>
              <Image
                fluid="true"
                src="https://elitejiujitsu.com/wp-content/uploads/2020/03/brazilian-jiu-jitsu-friends.jpg"
                alt="https://elitejiujitsu.com/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
