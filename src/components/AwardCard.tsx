import { FC } from "react";
import awardImg from "../assets/award01.png";
interface AwardCardProps {
  award: {
    year: number;
    organization: string;
    award: string;
  };
}

const AwardCard: FC<AwardCardProps> = ({ award }) => {
  return (
    <div className="flex-1 flex justify-start items-center min-w-full mx-8 md:mx-24 lg:mx-1 lg:min-w-[200px] lg:m-4 xl:min-w-[360px]">
      <img src={awardImg} alt="award" className="w-12 h-12" />
      <div className="flex flex-col ml-1">
        <p className="p-cormorant text-[#DCCA87]">{award.award}</p>
        <p className="p-cormorant text-[#DCCA87]">{award.organization}</p>
        <p className="p-cormorant text-[#DCCA87]">{award.year}</p>
      </div>
    </div>
  );
};

export default AwardCard;
