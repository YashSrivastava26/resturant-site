import { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import Chef from "./components/Chef";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodaysMenu from "./components/TodaysMenu";
import axios from "axios";
import { Loader2 } from "lucide-react";
function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [restaurantData, setRestaurantData] = useState<any>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => {
        setRestaurantData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="bg-dark w-screen h-screen">
          <Loader2 className="text-golden w-16 h-16 animate-spin" />
        </div>
      ) : (
        <>
          <Navbar />
          <Home ambiance={restaurantData.ambiance} />
          <AboutUs />
          <TodaysMenu categories={restaurantData.menu.categories} />
          <Chef chefData={restaurantData.chef} />
          <Awards awardsData={restaurantData.awards} />
          <FindUs location={restaurantData.location} />
          <Footer
            ambiance={restaurantData.ambiance}
            location={restaurantData.location}
            name={restaurantData.name}
            online_presence={restaurantData.online_presence}
          />
        </>
      )}
    </div>
  );
}

export default App;
