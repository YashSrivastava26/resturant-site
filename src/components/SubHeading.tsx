import { FC } from "react";
import spoon from "../assets/spoon.png";
interface SubHeadingProps {
  title: string;
  center?: boolean;
}

const SubHeading: FC<SubHeadingProps> = ({ title, center }) => {
  return (
    <div className="mb-4">
      <p className="p-cormorant">{title}</p>

      <img src={spoon} alt="spoon" className={`${center && "mx-auto"}`} />
    </div>
  );
};

export default SubHeading;
