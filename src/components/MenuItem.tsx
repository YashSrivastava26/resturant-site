import { FC } from "react";

interface MenuItemProps {
  name: string;
  price: number;
}

const MenuItem: FC<MenuItemProps> = ({ name, price }) => {
  return (
    <div className="w-full my-1 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="w-full">
          <p className="text-[#DCCA87] p-cormorant flex-wrap">{name}</p>
        </div>
        <div className="h-0 border-t border-golden mx-4 w-20 min-w-[5rem]" />
        <div className="flex justify-end items-end">
          <p className="p-cormorant flex-wrap">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
