import { FC } from "react";
import { MenuItemType } from "../../utils/typings";

interface MenuListItemProps {
  item: MenuItemType;
}

const MenuListItem: FC<MenuListItemProps> = ({ item }) => {
  return (
    <div className="w-full my-4">
      <p className="p-opensans text-golden text-center">{item.name}</p>

      <div className="flex items-center justify-center">
        <p className="p-opensans text-gray-2 text-xs">
          calories: {item.nutritional_info.calories}
        </p>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MenuListItem;
