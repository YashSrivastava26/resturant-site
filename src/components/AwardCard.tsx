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
    <div className="">
      <img src={awardImg} alt="award" />
      <div>
        <p className="p-cormorant text-[#DCCA87]">{award.award}</p>
        <p className="p-cormorant text-[#DCCA87]">{award.organization}</p>
        <p className="p-cormorant text-[#DCCA87]">{award.year}</p>
      </div>
    </div>
  );
};

export default AwardCard;
