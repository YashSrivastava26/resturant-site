import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import Chef from "./components/Chef";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodaysMenu from "./components/TodaysMenu";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <TodaysMenu />
      <Chef />
      <Awards />
    </div>
  );
}

export default App;
