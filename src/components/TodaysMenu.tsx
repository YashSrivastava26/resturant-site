import { FC } from "react";
import SubHeading from "./SubHeading";
import Menu from "../assets/menu.png";
import MenuItem from "./MenuItem";
import { MenuCategory } from "../utils/typings";
interface TodaysMenuProps {
  categories: MenuCategory[];
}

const TodaysMenu: FC<TodaysMenuProps> = ({ categories }) => {
  return (
    <div
      className="flex flex-col items-center justify-center app-padding bg-dark"
      id="menu"
    >
      <div className="mb-4 text-center">
        <SubHeading title="Menu that fits your Palatte" />
        <h1 className="heading-cormorant">Today&apos; Special</h1>
      </div>

      <div className="w-full my-4 flex justify-center items-center flex-col lg:flex-row">
        <div className="w-full lg:w-[35%] flex-col flex items-center justify-center">
          <p className="font-base font-semibold text-xl lg:text-2xl tracking-wide text-white">
            {categories[0].name}
          </p>
          <div className="flex-1 flex w-full flex-col my-4">
            {categories[0].items.map((item, idx) => (
              <MenuItem
                key={item.name + idx}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[30%] my-8">
          <img src={Menu} alt="menu" />
        </div>
        <div className="w-full lg:w-[35%] flex-col flex items-center justify-center">
          <p className="font-base font-semibold text-xl lg:text-2xl tracking-wide text-white">
            {categories[1].name}
          </p>
          <div className="flex-1 flex w-full flex-col my-4">
            {categories[1].items.map((item, idx) => (
              <MenuItem
                key={item.name + idx}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button type="button" className="button">
          View More
        </button>
      </div>
    </div>
  );
};

export default TodaysMenu;
