import { FC } from "react";
import SubHeading from "./SubHeading";
import AwardCard from "./AwardCard";

interface AwardsProps {}

const Awards: FC<AwardsProps> = ({}) => {
  const awardsData = [
    {
      year: 2023,
      organization: "Michelin Guide",
      award: "Three Michelin Stars",
    },
    {
      year: 2022,
      organization: "James Beard Foundation",
      award: "Outstanding Chef of the Year",
    },
    {
      year: 2021,
      organization: "World's 50 Best Restaurants",
      award: "Top 5 Restaurants Worldwide",
    },
  ];
  return (
    <div className="bg-dark app-wrapper app-padding" id="awards">
      <div className="app-wrapper-text">
        <SubHeading title="Awards & Recognition" />
        <h1 className="heading-cormorant">Honor&apos;s</h1>

        <div className="">
          {awardsData.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>

      <div className="app-wrapper-img"></div>
    </div>
  );
};

export default Awards;
