import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/Footer.js";
import MapChart from "./MapChart.js";
import TheProblem from "./TheProblem.js";
import TheIdea from "./TheIdea.js";
import OceanData from "./OceanData.js";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <MapChart />
      <TheProblem />
      <TheIdea />
      <OceanData />
      <Footer />
    </div>
  );
}

export default Home;
