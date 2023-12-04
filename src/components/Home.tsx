import { FC } from "react";
import SubHeading from "./SubHeading";
import Welcome from "../assets/welcome.png";
import { ambianceType } from "../utils/typings";

interface HomeProps {
  ambiance: ambianceType;
}

const Home: FC<HomeProps> = ({ ambiance }) => {
  return (
    <div
      className="app-wrapper app-padding bg-dark flex flex-col items-center justify-center lg:flex-row pt-24 lg:py-0"
      id="home"
    >
      <div className="app-wrapper-text">
        <SubHeading title="Chase the new flavour" />
        <h1 className="font-base text-golden tracking-wider uppercase text-6xl font-medium">
          The Key to Fine Dining
        </h1>
        <p className="my-4 p-opensans">{ambiance.description}</p>
        <button type="button" className="button">
          Book a table
        </button>
      </div>

      <div className="app-wrapper-img">
        <img src={Welcome} alt="hero img" className="" />
      </div>
    </div>
  );
};

export default Home;
