import { Container } from "react-bootstrap";
import logo from "../../assets/images/team_logo.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="text-center footer-text">
        <img width="50" src={logo} alt="On Fire logo" />
        On fire robotics team from Atitude Terra makerspace in São Paulo, Brasil
      </div>
    </section>
  );
}
