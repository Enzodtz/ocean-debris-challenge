import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/river_detection.jpeg";

export default function How() {
  return (
    <section id="how" className="how">
      <Container>
        <Row>
          <Col>
            <img className="how-img" src={img} alt="River Detection image" />
          </Col>
          <Col md={12} lg={6} md={{ order: 1 }}>
            <h3 className="how-title">But how?</h3>
            <p className="how-paragraph">
              We already have done a few tests with AI recognizing river debris.
              As you can see in the image aside, the AI is recognizing plastic
              bags in a city river, even far away from it and with a bad camera.
              In a bigger scale, we want to use satellite data to map all the
              world's ocean in real time. This demonstrations allow us to think
              high and aspire strong and relevant information to be avaible for
              free in our website, as you can see in the demo chart above.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
