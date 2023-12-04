import { FC } from "react";
import SubHeading from "../SubHeading";
import { FullMenu } from "../../utils/typings";
import MenuListItem from "./MenuListItem";

interface MenuListProps {
  categoryChoosen?: string | null;
  menu: FullMenu;
}

const MenuList: FC<MenuListProps> = ({ categoryChoosen, menu }) => {
  const filteredCategories = categoryChoosen
    ? menu.categories.filter((category) => category.name === categoryChoosen)
    : menu.categories;
  return (
    <div className="flex flex-col mt-16 w-full">
      <div className="app-wrapper-text h-fit w-full flex items-center mb-4">
        <h1 className="heading-cormorant mb-4">Our Classics</h1>
      </div>

      <div className="flex flex-row items-center justify-evenly flex-wrap w-full gap-4">
        {filteredCategories.map((category) => (
          <div className="flex flex-col text-center">
            <SubHeading title={category.name} center />
            {category.items.map((item) => (
              <MenuListItem item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
