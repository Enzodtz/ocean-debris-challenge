import Navbar from "../../components/navbar/Navbar.js";
import MapChart from "./MapChart.js";
import TheProblem from "./TheProblem.js";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <MapChart />
      <TheProblem />
    </div>
  );
}

export default Home;
