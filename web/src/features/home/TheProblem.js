import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/the_problem.jpeg";

export default function TheProblem() {
  return (
    <section className="the-problem">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <h3 className="the-problem-title">Understanding the Problem</h3>
            <p className="the-problem-paragraph">
              Each year, approximately 10 million tons of garbage end up in the
              sea. Among several types of garbage, plastic is by far or the main
              type of debris found. Unlike the materials shipped, plastic takes
              a long time time to disappear from nature, making that there is a
              large accumulation of debris. This accumulation ends up causing
              many problems for marine fauna and flora, such as deaths of fish,
              mammals and birds.
            </p>
          </Col>
          <Col>
            <img
              className="the-problem-img"
              src={img}
              alt="The problem image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
