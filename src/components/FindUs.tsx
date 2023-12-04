import { FC } from "react";
import findus from "../assets/findus.png";
import SubHeading from "./SubHeading";
import { mappls } from "mappls-web-maps";
import { locationType } from "../utils/typings";

interface FindUsProps {
  location: locationType;
}

const FindUs: FC<FindUsProps> = ({ location }) => {
  return (
    <div className="app-bg app-wrapper app-padding" id="contact">
      <div className="app-wrapper-text">
        <SubHeading title="Contact" />
        <h1 className="heading-cormorant mb-8">Find Us</h1>
        <p className="p-opensans">{location.address}</p>
        <p className="p-cormorant mt-8 text-[#DCCA87]">Opening Hours</p>
        <p className="p-opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p-opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <div className="app-wrapper-img">
        <img src={findus} alt="find us" />
      </div>
    </div>
  );
};

export default FindUs;
