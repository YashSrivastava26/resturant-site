import { FC } from "react";
import SubHeading from "./SubHeading";
import AwardCard from "./AwardCard";
import HonorsImg from "../assets/laurels.png";
import { awardsType } from "../utils/typings";
interface AwardsProps {
  awardsData: awardsType[];
}

const Awards: FC<AwardsProps> = ({ awardsData }) => {
  return (
    <div
      className="bg-dark app-wrapper app-padding flex flex-col lg:flex-row"
      id="awards"
    >
      <div className="app-wrapper-text items-center lg:items-start">
        <SubHeading title="Awards & Recognition" />
        <h1 className="heading-cormorant">Honor&apos;s</h1>

        <div className="flex justify-start items-center mt-8 flex-wrap overflow-x-hidden">
          {awardsData.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      <div className="app-wrapper-img  mt-12">
        <img src={HonorsImg} alt="Awards" />
      </div>
    </div>
  );
};

export default Awards;
