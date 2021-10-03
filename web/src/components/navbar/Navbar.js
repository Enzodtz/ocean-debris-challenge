import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function DefaultNavbar() {
  return (
    <Navbar className="navbar shadow-sm" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Clean Ocean
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default DefaultNavbar;
