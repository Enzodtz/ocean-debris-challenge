import { Container } from "react-bootstrap";

export default function OceanData() {
  return (
    <section className="ocean-data">
      <Container>
        <h3 className="ocean-data-title text-center">
          Ocean Plastic Polution by year
        </h3>
        <p className="ocean-data-chart"></p>
      </Container>
    </section>
  );
}
