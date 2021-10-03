import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/ocean_data.png";

export default function OceanData() {
  return (
    <section id="why" className="ocean-data">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <h3 className="ocean-data-title">Why we need this?</h3>
            <p className="ocean-data-paragraph">
              Recent studies suggest that we're continuously diminuting the
              percentage of plastics that goes into ocean. So, why is monitoring
              it necessary? First of all, the techniques that exist today for
              recognizing the pollution aren't able to detect every single
              amount of it. And if you start looking at the absolute values,
              even with recycling and incineration rates growing, we are still
              making more ocean plastic discards every year. This number tends
              to grow exponentially, as we're needing plastic more plastic
              everyday in our lives. Monitoring how the debris rates increase,
              and where are they camming from is the key to prevent it and
              depollute the oceans.
            </p>
          </Col>
          <Col>
            <img className="ocean-data-img" src={img} alt="Ocean data image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
