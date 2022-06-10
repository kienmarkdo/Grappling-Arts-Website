import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ProgramWrestling() {
  return (
    <div className="page">
      <br />
      <Container>
        <Container>
          <h1>Wrestling</h1>
          <br />
          <h4>High Quality Wrestling Classes for Only $60 A Month Or Less</h4>
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
              <h3>Highly in-demand</h3>
              <p>
                With the rise of MMA and the UFC, more and more adults are
                looking to join wrestling but struggle to find local gyms as
                most wrestling clubs are geared towards middle to high school
                students. Our program is among the few wrestling programs that
                are offered and tailored towards working adults and full-time
                students.
              </p>
              <br />
              <h3>High quality instructors</h3>
              <p>
                The Wrestling team at uOttawa Grappling Arts prides itself on
                having strong instructors from different backgrounds. Our team
                of experienced coaches and athletes consists of former NCAA D2
                wrestlers and NCCP Level 2 certified coaches who cross-train
                other grappling arts Judo. We can guarantee that you will learn
                a lot, have a fun time, and be in a safe environment.
              </p>
              <br />
              <h3>Low prices</h3>
              <p>
                Our Wrestling program's prices are among the lowest in the
                province. Given the calibre of our instructors, we can guarantee
                that you will get great value out of every dollar you spend. If
                not, we will reimburse you within the first 2 weeks if you are
                not satisfied!
              </p>
              <br />
              <h3>Great for everyone</h3>
              <p>
                Wrestling is known to be a tough sport with a grind mentality,
                but it does not have to be that way! Our teaching methodology
                focuses on skill, fitness, and long-term development, rather
                than preparing for tournaments and competitions. We will ensure
                that you will get great wrestling lessons with the option to do
                recreational wrestling or competitive wrestling, depending on
                each year's group.
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
                src="https://img.olympicchannel.com/images/image/private/t_16-9_1240-700/f_auto/v1538355600/primary/w1eo4el8wr6prjicq5n4"
                alt="https://olympics.com/en/featured-news/top-five-facts-olympic-wrestling-tokyo-2020-games-2021"
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
