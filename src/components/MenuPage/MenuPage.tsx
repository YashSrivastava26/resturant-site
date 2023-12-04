import { FC, useState } from "react";
import SubHeading from "../SubHeading";
import MenuList from "./MenuList";

interface MenuPageProps {}

const MenuPage: FC<MenuPageProps> = ({}) => {
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
      {
        name: "Epicurean Indulgences",
        items: [
          {
            name: "Passion Fruit Cheesecake",
            description:
              "Creamy cheesecake with a tropical twist of passion fruit, topped with mango coulis.",
            price: 18.99,
            ingredients: [
              "Cream cheese",
              "Passion fruit",
              "Mango coulis",
              "Graham cracker crust",
            ],
            nutritional_info: {
              calories: 380,
              protein: 8,
              carbohydrates: 35,
              fat: 25,
            },
            seasonal_availability: ["Year-round"],
          },
          {
            name: "Chocolate Hazelnut Decadence",
            description:
              "Decadent chocolate hazelnut mousse layered with hazelnut praline, served with espresso gelato.",
            price: 24.99,
            ingredients: [
              "Chocolate hazelnut mousse",
              "Hazelnut praline",
              "Espresso gelato",
            ],
            nutritional_info: {
              calories: 450,
              protein: 10,
              carbohydrates: 40,
              fat: 30,
            },
            seasonal_availability: ["Year-round"],
          },
        ],
      },
    ],
    seasonal_menu: {
      name: "Seasonal Symphony",
      items: [
        {
          name: "Butternut Squash Sage Risotto",
          description:
            "Creamy risotto with roasted butternut squash, sage, and Parmesan cheese.",
          price: 36.99,
          ingredients: [
            "Arborio rice",
            "Butternut squash",
            "Sage",
            "Parmesan cheese",
          ],
          nutritional_info: {
            calories: 420,
            protein: 10,
            carbohydrates: 60,
            fat: 18,
          },
          seasonal_availability: ["Fall"],
        },
        {
          name: "Mango Coconut Basil Sorbet",
          description:
            "Refreshing sorbet with the tropical combination of mango, coconut, and fresh basil.",
          price: 14.99,
          ingredients: ["Mango", "Coconut milk", "Basil", "Simple syrup"],
          nutritional_info: {
            calories: 180,
            protein: 1,
            carbohydrates: 40,
            fat: 0,
          },
          seasonal_availability: ["Summer"],
        },
      ],
    },
  };

  const [filter, setFilter] = useState<string | null>(null);
  return (
    <div className="app-bg app-wrapper app-padding flex justify-start flex-col pt-8 xl:pt-20">
      <div className="app-wrapper-text h-fit w-full flex items-center mb-8">
        <SubHeading title="Our service" center />
        <h1 className="heading-cormorant">On Your Table</h1>
      </div>

      <div className="flex justify-evenly w-full mb-12">
        <div className="flex flex-col text-center w-[40%]">
          <SubHeading title="categories" center />

          {menu.categories.map((category) => (
            <div
              className="p-cormorant text-golden hover:text-white my-4 w-full cursor-pointer flex-wrap"
              onClick={() => {
                setFilter(category.name);
              }}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="h-64 lg:h-56 w-0 border-l border-golden" />

        <div className="flex flex-col text-center w-[40%]">
          <SubHeading title="seasonal menu" center />

          {menu.seasonal_menu.items.map((seasonalItem) => (
            <div className="p-cormorant text-golden hover:text-white my-4 w-full flex-wrap">
              {seasonalItem.name}
            </div>
          ))}
        </div>
      </div>
      <MenuList menu={menu} categoryChoosen={filter} />
    </div>
  );
};

export default MenuPage;
