import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProgramBJJ() {
  const navigate = useNavigate(); // react router dom v6 hook
  const routeToMembership = () => {
    navigate("/membership");
  };
  return (
    <div className="page">
      <br />
      <Container>
        <Container>
          <h1>Brazilian Jiu-Jitsu (BJJ)</h1>
          <br />
          <h4>High Quality BJJ Classes for Only $60 A Month Or Less</h4>
          <ul>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              No contracts
            </li>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              Pay as you go with no cancellation fee
            </li>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              Realistic live sparring
            </li>
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              2-week money back guarantee for new members
            </li>
          </ul>
          <hr />
          <br />
          <Row>
            <Col sm={8}>
              <h3>High quality instructors</h3>
              <p>
                The BJJ team at uOttawa Grappling Arts prides itself on having
                strong instructors from different backgrounds. Our team of
                experienced coaches and athletes consists of current BJJ black
                belt champions, and highly experienced black belts with NCCP
                Level 2 coaching certifications as well as cross-training from
                Judo. We can guarantee that you will learn a lot, have a fun
                time, and be in a safe environment.
              </p>
              <br />
              <h3>Low prices</h3>
              <p>
                Our BJJ program's prices are among the lowest in the province.
                Given the calibre of our instructors, we can guarantee that you
                will get great value out of every dollar you spend. If not, we
                will reimburse you within the first 2 weeks if you are not
                satisfied!
              </p>
              <br />
              <h3>Great for everyone</h3>
              <p>
                BJJ is among the most popular grappling martial arts for working
                adults and has proven to be significantly safer than striking
                sports such as boxing or muay thai, as well as other grappling
                martials arts that require more explosive energy like Judo or
                wrestling. Our program focuses on skill, fitness, and mental
                toughness and is developed to guarantee the improvement of those
                aspects within the first 2 weeks, while also providing a
                well-structured program for long-term development.
              </p>
              <br />
              <h3>Flexible schedule</h3>
              <p>
                Started as a single-location club at the University of Ottawa,
                we now have 5 locations across the city of Ottawa, each with
                their own flexible schedule that will allow you to fit it around
                any study or work schedule that you have.
              </p>
            </Col>
            <Col sm={4}>
              <Image
                fluid="true"
                src="https://contents.mediadecathlon.com/b69568/k$078d9ae4f1c802cccdc1de1c7f068706/1180x0/1106pt834/2213xcr1660/default.jpg?format=auto&quality=80"
                alt="https://www.domyos.co.uk/what-is-brazilian-jiu-jitsu"
              />
            </Col>
          </Row>
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
        </Container>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
