import { FC } from "react";
import ChefImg from "../assets/chef.png";
import SubHeading from "./SubHeading";
import quote from "../assets/quote.png";
interface ChefProps {}

const Chef: FC<ChefProps> = ({}) => {
  const chefData = {
    name: "Chef Isabella Culinary Maestro",
    bio: "An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.",
    signature_dish: "Mango Tango Fusion",
  };
  return (
    <div className="app-bg app-wrapper app-padding flex flex-col lg:flex-row items-center justify-center">
      <div className="app-wrapper-img items-center justify-center md:justify-start mr-4">
        <img src={ChefImg} alt="chef" />
      </div>
      <div className="app-wrapper-text">
        <SubHeading title="Chef's word" />
        <h1 className="heading-cormorant">What we Believe in</h1>
        <div className="flex flex-col w-full mt-12">
          <div className="flex justify-start items-end">
            <img src={quote} alt="quote" className="my-4 w-12 h-10" />
            <p className="p-opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              sapiente! Eligendi fuga quos mollitia id nesciunt? Nihil modi
              autem et voluptate id repudiandae ipsam,
            </p>
          </div>
          <p className="p-opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            commodi culpa ex assumenda illo similique ipsum? Sapiente natus
            recusandae qui deleniti dolores error odit, similique sint tempore,
            voluptatum quasi architecto!
          </p>
        </div>

        <div className="mt-12">
          <p className="font-base font-normal text-xl capitalize text-golden">
            {chefData.name}
          </p>
          <p className="p-opensans">{chefData.bio}</p>

          <p className="p-cormorant text-golden mt-8">
            Signature Dish: {chefData.signature_dish}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
