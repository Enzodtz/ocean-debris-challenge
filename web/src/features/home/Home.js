import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import MapChart from "./MapChart.js";
import TheProblem from "./TheProblem.js";
import TheIdea from "./TheIdea.js";
import OceanData from "./OceanData.js";
import How from "./How.js";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <MapChart />
      <TheProblem />
      <TheIdea />
      <OceanData />
      <How />
      <Footer />
    </div>
  );
}

export default Home;
