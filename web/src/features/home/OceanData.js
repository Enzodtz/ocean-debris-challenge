import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/ocean_data.png";

export default function OceanData() {
  return (
    <section className="ocean-data">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <h3 className="ocean-data-title">Ocean Plastic Polution by Year</h3>
            <p className="ocean-data-paragraph">a</p>
          </Col>
          <Col>
            <img className="ocean-data-img" src={img} alt="Ocean data image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
