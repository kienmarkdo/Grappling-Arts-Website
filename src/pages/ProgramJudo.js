import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ProgramJudo() {
  return (
    <div className="page">
      <br />
      <Container>
        <Container>
          <h1>Judo</h1>
          <br />
          <h4>High Quality Judo Classes for Only $60 A Month Or Less</h4>
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
                The Judo team at uOttawa Grappling Arts prides itself on having
                strong instructors from different backgrounds. Our team of
                experienced coaches and athletes consists of former Olympians,
                current Team Ontario coaches, experienced black belts with NCCP
                Level 2 coaching certifications. We can guarantee that you will
                learn a lot, have a fun time, and be in a safe environment.
              </p>
              <br />
              <h3>Low prices</h3>
              <p>
                Our Judo program's prices are among the lowest in the province.
                Given the calibre of our instructors, we can guarantee that you
                will get great value out of every dollar you spend. If not, we
                will reimburse you within the first 2 weeks if you are not
                satisfied!
              </p>
              <br />
              <h3>Great for everyone</h3>
              <p>
                While our Judo program is primarily aimed towards university
                students, it is a sport that is perfect for all ages and
                backgrounds! Our program focuses on skill, fitness, and mental
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
                src="https://img.freepik.com/free-photo/two-young-judo-fighters-kimono-training-martial-arts-gym-with-expression-action-motion_155003-32869.jpg?w=1380&t=st=1654818997~exp=1654819597~hmac=6ea8f955b6904b58434990aad742bce2c27c5f2e6fc3fc1257082756e265012a"
                alt="https://www.freepik.com/free-photo/two-judokas-fighters-fighting-men_6858361.htm#&position=2&from_view=detail#&position=2&from_view=detail"
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
