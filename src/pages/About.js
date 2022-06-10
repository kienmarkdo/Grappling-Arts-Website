import React from "react";
import { Container, Row, Col, Image, Accordion, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate(); // react router dom v6 hook
  const routeToMembership = () => {
    navigate("/membership");
  };

  return (
    <div className="page">
      <br />
      <Container>
        <Container>
          <h1>Purpose</h1>
          <br />
          <Row>
            <Col sm={8}>
              <p>
                The uOttawa Grappling Arts club was created by Kien Do in 2022,
                a Computer Science student at uOttawa and a practitioner of
                judo. Kien wanted to do judo at the university but the only
                grappling club that was offered was no-gi BJJ. Unfortunately,
                due to the COVID-19 pandemic, he could not even join the club.
              </p>
              <p>
                When life slowly returned to normal, Kien started the uOttawa
                Grappling Arts club, a place for all grappling enthusiasts and
                practitioners from all skill levels, all countries, and walks of
                life. The club is perfect for those who wish to start learning,
                continue, or teach the big three grappling martial arts - judo,
                bjj, and wrestling whether it be for fitness and recreational
                purposes, or to make friends.
              </p>
              <p>
                Since grappling is a niche sport and does not attract as many
                people as soccer, basketball, or hockey, having a club that
                represented all three disciplines and gave the opportunity for
                adults to cross-train and have access to all three martial arts
                while having a strong community was a dream come true.
              </p>
            </Col>
            <Col sm={4}>
              <Image
                fluid="true"
                src="https://img.freepik.com/free-photo/two-judokas-fighters-posing-gray_155003-4190.jpg?w=1380&t=st=1654654796~exp=1654655396~hmac=67db3dd92f3d07d3860623db517e5991e8cb764e727e5d784f33b6f65b57f5ea"
                alt="https://www.freepik.com/free-photo/two-judokas-fighters-posing-gray_7540254.htm#query=karate%20club&position=40&from_view=keyword"
              />
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <h1>What is grappling?</h1>
          <br />
          <p>
            Grappling is the art of subduing your opponent without striking them
            (no punching, no kicking) and is a perfectly safe sport that allows
            practictioners to train at 100% of their capacity without hurting
            their partners or themselves. This can be achieved by:
          </p>
          <ul>
            <li>Throwing on opponent onto the ground with force</li>
            <li>
              Subduing your opponent on the ground by pinning, choking, or
              applying a joint lock
            </li>
          </ul>
          Three main sports that represent this idea are judo, BJJ, and
          wrestling - each sport specializing in a different aspect of
          grappling. To understand what each sport is about and which one is
          right for you, click on the menu below.
        </Container>
        <br />
        <Container>
          {/* <Row>
            <Col sm={8}> */}
          <Accordion
            alwaysOpen
            style={{
              backgroundColor: "#80746c",
              color: "black",
            }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Judo</strong>
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <Col sm={8}>
                      {" "}
                      Judo is a Japanese martial art and Olympic sport whose
                      goal is to throw the opponent onto their back with force.
                      Judo participants often wear a gi and a belt that provide
                      a mechanism for grabbing and throwing. In addition, judo
                      also provides a strong set of skills for its practitioners
                      to subdue an opponent on the ground via pins, chokes, or
                      armlocks. Due to the Olympics, the judo ruleset has been
                      restricted to provide safety to its practitioners. The
                      most controversial rules include the prohibition of
                      touching the legs and leg locks.
                      <br />
                      <br />
                      NOTE: uOttawa Grappling Arts will allow leg grabs and leg
                      locks as we are not an official organization under the
                      Olympics.
                      <br />
                      <br />
                      <strong>Main concepts:</strong> Throwing, Submissions
                      (chokes, armlocks, hold downs), moderately-paced
                    </Col>
                    <Col sm={4}>
                      <Image
                        fluid="true"
                        src="https://www.bosshunting.com.au/wp-content/uploads/2020/03/cgs_9924-1538402825-1538402825.jpg"
                        alt="https://www.bosshunting.com.au/sport/case-every-man-should-learn-brazilian-jiu-jitsu/"
                        // Another cool picture: https://www.google.com/search?q=judo+throws&rlz=1C1CHBF_enCA880CA880&sxsrf=ALiCzsaCGAE8MRK8G3EZCC5QVOYhNBj_vw:1654654504599&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjF1OOv5Jz4AhV6t4QIHfXLAvEQ_AUoAXoECAEQAw&biw=1920&bih=969#imgrc=wiZCW_RJ_XuITM
                      />
                    </Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>Brazilian Jiu-Jitsu (BJJ)</strong>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col sm={8}>
                    {" "}
                    Originating from Brazil with Japanese lineage, BJJ is a
                    martial art and sport specialized in ground grappling - that
                    is, what to do when a fight is taken to the ground. In
                    competition, BJJ has rules that are much more relaxed and
                    slow-paced compared to judo and athletes tend to spend their
                    time on the ground, trying to submit either via chokes,
                    joint locks, or gaining a dominant position over their
                    opponent. The sport mainly revolves around the use of the
                    "guard" - how to defend yourself with it, and how to attack
                    it. BJJ is among the safest sport out of the three grappling
                    arts as it is slow-paced and does not involve strong impact
                    to the ground via throws.
                    <br />
                    <br />
                    <strong>Main concepts:</strong> Groundwork, Submissions
                    (chokes, all joint locks), Gi/No-gi, slow-paced
                  </Col>
                  <Col sm={4}>
                    <Image
                      fluid="true"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/22/GABRIEL_VELLA_vs_ROMINHO_51.jpg"
                      alt="https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu"
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong>Wrestling</strong>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col sm={8}>
                    {" "}
                    Wrestling is as it says, wrestling. It is a common sport in
                    high schools and colleges in the United States and is also a
                    big sport in Eastern Europe. Wrestling does not involve a gi
                    - instead, participants can wear their everyday clothes in
                    training or wear a{" "}
                    <a
                      href="https://www.google.com/search?q=singlet&rlz=1C1CHBF_enCA880CA880&oq=singlet&aqs=chrome..69i57j69i59l2j69i60j69i65j69i60l3.530j0j7&sourceid=chrome&ie=UTF-8"
                      target="_blank"
                      rel="noreferrer noopener"
                      alt=""
                    >
                      singlet
                    </a>
                    . This makes wrestling the least expensive sport out of the
                    three as it does not require any special clothing. Wrestling
                    is primarily focused on taking the opponent down onto the
                    ground and pinning them there - that is, the transition
                    between standing and groundwork. The usage of chokes and
                    armlocks are strictly prohibited in wrestling. This is the
                    most fast-paced sport out of the three due to the
                    explosiveness and lack of gripping material on the
                    participants.
                    <br />
                    <br />
                    <strong>Main concepts:</strong> Transitioning from standing
                    to groundwork, leg grabs, hold downs
                  </Col>
                  <Col sm={4}>
                    <Image
                      fluid="true"
                      src="https://img.olympicchannel.com/images/image/private/t_16-9_1240-700/f_auto/v1538355600/primary/tqhcmgfnncinaoxxkvnc"
                      alt="https://olympics.com/en/news/indian-wrestling-history-legacy-olympics-medals-world-championships"
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* </Col>

            <Col sm={4}>
              <Image
                fluid="true"
                src="https://www.bjjee.com/wp-content/uploads/2015/10/gregor-gracie-cross-training.jpg"
                alt=""
              />
            </Col>
          </Row> */}
        </Container>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Container>
          <h1>Insurance Package</h1>
          <p>
            Our club is committed to safety of our members. That is why our
            instructors are NCCP Level 2 certified coaches and are licenced in
            providing CPR. Additional Insurance Packages are available for each
            program. For participants who wish to purchase an additional
            insurance package, please call one of our locations to discuss your
            package. For those who wish to sign-up for the judo program, you may
            visit https://www.judoontario.ca/ to purchase a provincial insurance
            package in the event that you encounter an unexpected
            grappling-related injury on the mats.
          </p>
        </Container>
        <br />
        <hr />
        <br />
        <Container>
          <h1>Interested? Book a class with us today!</h1>
          <br />
          <Button
            variant="dark"
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
      <br />
      <br />
    </div>
  );
}
