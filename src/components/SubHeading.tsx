import { FC } from "react";
import spoon from "../assets/spoon.png";
interface SubHeadingProps {
  title: string;
}

const SubHeading: FC<SubHeadingProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <p className="p-cormorant">{title}</p>

      <img src={spoon} alt="spoon" />
    </div>
  );
};

export default SubHeading;
