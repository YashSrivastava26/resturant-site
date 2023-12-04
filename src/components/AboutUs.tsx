import { FC } from "react";
import imageG from "../assets/G.png";
import spoon from "../assets/spoon.png";
import knife from "../assets/knife.png";
interface AboutUsProps {}

const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <div
      id="about"
      className="relative flex items-center justify-center app-bg app-padding"
    >
      <div className="flex items-center justify-center inset-0 absolute">
        <img
          src={imageG}
          alt="G"
          className="lg:h-4/6 lg:w-auto z-0 w-[80%] object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full z-10">
        <div className="flex flex-col flex-1 justify-end items-end text-right">
          <h1 className="heading-cormorant">About Us</h1>
          <img src={spoon} alt="spoon" className="" />
          <p className="p-opensans my-4 xl:my-8 text-gray-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            iure? Dolores, consequatur maxime mollitia amet dolor asperiores.
            Obcaecati, officiis facilis sed quam numquam nihil perspiciatis
            accusantium, asperiores animi doloribus voluptas?
          </p>
          <button type="button" className="button">
            Know More
          </button>
        </div>

        <div className="my-4 lg:my-8 lg:mx-16">
          <img src={knife} alt="knife" className="h-[70vh]" />
        </div>

        <div className="flex flex-col flex-1 justify-start items-start text-left">
          <h1 className="heading-cormorant">About Us</h1>
          <img src={spoon} alt="spoon" className="" />
          <p className="p-opensans my-4 xl:my-8 text-gray-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            iure? Dolores, consequatur maxime mollitia amet dolor asperiores.
            Obcaecati, officiis facilis sed quam numquam nihil perspiciatis
            accusantium, asperiores animi doloribus voluptas?
          </p>
          <button type="button" className="button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
