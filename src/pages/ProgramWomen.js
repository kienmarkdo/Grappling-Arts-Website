import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProgramWomen() {
  const navigate = useNavigate(); // react router dom v6 hook
  const routeToMembership = () => {
    navigate("/membership");
  };
  return (
    <div className="page">
      <br />
      <Container>
        <Container>
          <h1>Women's Program</h1>
          <br />
          <h4>
            High Quality Women's Only Classes for Only $60 A Month Or Less
          </h4>
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
            <li>
              <Image
                style={{ height: "20px", width: "20px" }}
                src="https://w7.pngwing.com/pngs/328/444/png-transparent-check-mark-checkbox-green-checkbox-s-angle-text-rectangle.png"
              />{" "}
              Exclusive women's only classes to make you feel safe on the mats
            </li>
          </ul>
          <hr />
          <br />
          <Row>
            <Col sm={8}>
              <h3>Highly in-demand</h3>
              <p>
                With the rise of powerful female figures within the grappling
                community such as Jessica Klimkait, Daria Bilodid, Ronda Rousey,
                Holly Holm, Ffion Davies, and Mackenzie Dern (to name a few),
                more and more women are inspired to follow their path to join
                the male-dominated sport of grappling to enjoy its benefits.
              </p>
              <p>
                Too many women fall victim to scammy online self-defence
                programs and poorly taught defensive courses from high school,
                and are not properly equipped with the actual skills they need
                to protect themselves when necessary. Our Women's grappling
                program ensures that you will receive high quality, realistic
                instruction and training under experienced coaches that will
                signifcantly improve your self-defence, fitness, and confidence.
              </p>
              <br />
              <h3>High quality instructors</h3>
              <p>
                The team at uOttawa Grappling Arts prides itself on having
                strong instructors from different backgrounds with 50% of our
                instructors being women. Our team of experienced coaches and
                athletes consist of current and former athletes as well as NCCP
                Level 2 certified coaches that can ensure that you can stay fit,
                improve your self-defence, and have fun. We can guarantee that
                you will learn a lot, have a fun time, and be in a safe
                environment.
              </p>
              <br />
              <h3>Low prices</h3>
              <p>
                Our prices are among the lowest in the province. Given the
                calibre of our instructors, we can guarantee that you will get
                great value out of every dollar you spend. If not, we will
                reimburse you within the first 2 weeks if you are not satisfied!
              </p>
              <br />
              <h3>Great for women</h3>
              <p>
                Enjoy the sport and self-defence aspects of grappling. Pick up
                applicable skills, gain valuable mat experience with
                live-sparring rather than unrealistic scenarios like "kicking
                them in the balls", and be more confident than you've ever been.
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
                src="https://s3.amazonaws.com/prod.skimble/assets/895290/image_iphone.jpg"
                alt="https://www.skimble.com/exercises/7681-cable-chop-judo-throws-how-to-do-exercise"
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
