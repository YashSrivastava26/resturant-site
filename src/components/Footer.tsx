import { FC } from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "./FooterOverlay";
import logo from "../assets/logo.png";
import spoon from "../assets/spoon.png";
import Newsletter from "./Newsletter";
import {
  ambianceType,
  locationType,
  online_presenceType,
} from "../utils/typings";
interface FooterProps {
  name: string;
  online_presence: online_presenceType;
  location: locationType;
  ambiance: ambianceType;
}

const Footer: FC<FooterProps> = ({
  location,
  ambiance,
  online_presence,
  name,
}) => {
  return (
    <div className="app-padding w-full relative z-10 flex items-center flex-col bg-dark py-0">
      <FooterOverlay />
      <Newsletter />

      <div className="w-full grid grid-cols-3 gap-4 z-10 mt-12">
        <div className=" m-4 text-center items-center flex flex-col p-0 w-full">
          <h1 className="font-base text-white tracking-wide capitalize text-2xl mb-4 2xl:text-3xl">
            Contact Us
          </h1>
          <p className="p-opensans text-xs md:text-sm lg:text-base">
            {location.address}
          </p>
          <p className="p-opensans text-xs md:text-sm lg:text-base text-ellipsis w-full overflow-hidden">
            {online_presence.website}
          </p>
          <p className="p-opensans text-xs md:text-sm lg:text-base">
            +1 212-555-1230
          </p>
        </div>

        <div className="m-4 text-center items-center flex flex-col p-0 w-full">
          <img src={logo} alt="footer_logo" className="w-16 mb-4" />
          <p className="p-opensans text-xs md:text-sm lg:text-base">
            &quot; {ambiance.description} &quot;
          </p>
          <img src={spoon} style={{ marginTop: 15 }} />
          <div className="mt-2 flex">
            <FiFacebook className="text-white m-2 text-xl cursor-pointer hover:text-golden" />
            <FiTwitter className="text-white m-2 text-xl cursor-pointer hover:text-golden" />
            <FiInstagram className="text-white m-2 text-xl cursor-pointer hover:text-golden" />
          </div>
        </div>

        <div className=" m-4 text-center items-center flex flex-col p-0 w-full">
          <h1 className="font-base text-white tracking-wide capitalize text-2xl mb-4 2xl:text-3xl">
            Working Hours
          </h1>
          <p className="p-opensans text-xs md:text-sm lg:text-base">
            Monday-Friday:
          </p>
          <p className="p-opensans text-xs md:text-sm lg:text-base">
            08:00 am - 12:00 am
          </p>
          <p className="p-opensans text-xs md:text-sm lg:text-base">
            Saturday-Sunday:
          </p>
          <p className="p-opensans text-xs md:text-sm lg:text-base mb-4">
            07:00 am - 11:00 pm
          </p>
        </div>
      </div>

      <div className="mt-8 z-10">
        <p className="p-opensans text-xs md:text-sm lg:text-base text-gray-2">
          2023 {name}. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
