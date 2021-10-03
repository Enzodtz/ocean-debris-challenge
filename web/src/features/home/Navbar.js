import { Navbar, Nav, Container } from "react-bootstrap";

function DefaultNavbar() {
  return (
    <Navbar className="navbar shadow-sm" variant="dark">
      <Container fluid>
        <Navbar.Brand>Clean Ocean</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#theProblem">Problem</Nav.Link>
          <Nav.Link href="#theIdea">Idea</Nav.Link>
          <Nav.Link href="#why">Why</Nav.Link>
          <Nav.Link href="#how">How</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default DefaultNavbar;
