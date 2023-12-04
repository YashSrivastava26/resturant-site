import { FC } from "react";
import SubHeading from "./SubHeading";
import Menu from "../assets/menu.png";
import MenuItem from "./MenuItem";
interface TodaysMenuProps {}

const TodaysMenu: FC<TodaysMenuProps> = ({}) => {
  const menu = {
    categories: [
      {
        name: "Artisanal Appetizers",
        items: [
          {
            name: "Mango Tango Ceviche",
            description:
              "Fresh ceviche with mango, avocado, and citrus-infused seafood medley.",
            price: 32.99,
            ingredients: ["Sea bass", "Shrimp", "Mango", "Avocado"],
            nutritional_info: {
              calories: 280,
              protein: 20,
              carbohydrates: 15,
              fat: 18,
            },
            seasonal_availability: ["Year-round"],
          },
          {
            name: "Truffle Butter Escargot",
            description:
              "Escargot baked in truffle butter, served with garlic-infused baguette.",
            price: 28.99,
            ingredients: ["Escargot", "Truffle butter", "Baguette", "Garlic"],
            nutritional_info: {
              calories: 350,
              protein: 15,
              carbohydrates: 25,
              fat: 22,
            },
            seasonal_availability: ["Year-round"],
          },
        ],
      },
      {
        name: "Global Fusion Entrees",
        items: [
          {
            name: "Saffron-Spiced Chicken Tikka Masala",
            description:
              "Tender chicken tikka in a rich saffron-infused tomato curry, served with basmati rice.",
            price: 42.99,
            ingredients: [
              "Chicken tikka",
              "Saffron curry",
              "Basmati rice",
              "Naan bread",
            ],
            nutritional_info: {
              calories: 480,
              protein: 25,
              carbohydrates: 40,
              fat: 28,
            },
            seasonal_availability: ["Year-round"],
            customizable_options: ["Spice level: Medium", "Add coconut milk"],
          },
          {
            name: "Chimichurri-Infused Argentinian Ribeye",
            description:
              "Grilled ribeye steak marinated in zesty chimichurri sauce, served with sweet potato puree.",
            price: 56.99,
            ingredients: [
              "Ribeye steak",
              "Chimichurri sauce",
              "Sweet potato puree",
              "Grilled vegetables",
            ],
            nutritional_info: {
              calories: 600,
              protein: 40,
              carbohydrates: 30,
              fat: 45,
            },
            seasonal_availability: ["Year-round"],
          },
        ],
      },
    ],
  };
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
            {menu.categories[0].name}
          </p>
          <div className="flex-1 flex w-full flex-col my-4">
            {menu.categories[0].items.map((item, idx) => (
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
            {menu.categories[1].name}
          </p>
          <div className="flex-1 flex w-full flex-col my-4">
            {menu.categories[1].items.map((item, idx) => (
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
