import Navbar from "../../components/navbar/Navbar.js";
import MapChart from "./MapChart.js";
import TheProblem from "./TheProblem.js";
import TheIdea from "./TheIdea.js";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <MapChart />
      <TheProblem />
      <TheIdea />
    </div>
  );
}

export default Home;
