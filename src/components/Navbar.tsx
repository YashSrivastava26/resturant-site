import { FC, useState } from "react";
import Logo from "../assets/logo.png";
import { LuMenu } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 flex justify-between items-center bg-dark/90 px-6 py-2 w-full text-white backdrop-blur-md z-40">
      <div className="flex items-center justify-between w-full">
        <div className=" flex justify-start items-center">
          <img src={Logo} alt="Logo" className="h-12 object-cover" />
        </div>

        <ul className="hidden lg:flex list-none flex-1 justify-center items-center">
          <li className="mx-4 cursor-pointer hover:text-gray-400">
            <a href="#home">Home</a>
          </li>
          <li className="mx-4 cursor-pointer hover:text-gray-400">
            <a href="#about">About</a>
          </li>
          <li className="mx-4 cursor-pointer hover:text-gray-400">
            <a href="#menu">Menu</a>
          </li>
          <li className="mx-4 cursor-pointer hover:text-gray-400">
            <a href="#awards">Awards</a>
          </li>
          <li className="mx-4 cursor-pointer hover:text-gray-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="hidden lg:flex justify-end items-center">
          <a
            href="/book"
            className="mx-1 hover:border-b hover:border-golden transition-all duration-200 ease-in-out"
          >
            Book Table
          </a>
        </div>
        <div className="flex lg:hidden">
          <LuMenu
            className="h-8 w-8 cursor-pointer hover:text-gray-400"
            onClick={() => setToggleMenu(true)}
          />

          {toggleMenu && (
            <div className="fixed top-0 left-0 w-full h-screen bg-dark/95 flex flex-col z-10 slide-bottom backdrop-blur-md">
              <MdOutlineRestaurantMenu
                className="absolute h-6 w-6 text-golden cursor-pointer top-5 right-5"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="flex flex-col list-none flex-1 justify-center items-center text-golden">
                <li className="m-8 cursor-pointer text-xl text-center font-base hover:text-white ">
                  <a href="#home">Home</a>
                </li>
                <li className="m-8 cursor-pointer text-xl text-center font-base hover:text-white ">
                  <a href="#about">About</a>
                </li>
                <li className="m-8 cursor-pointer text-xl text-center font-base hover:text-white ">
                  <a href="#menu">Menu</a>
                </li>
                <li className="m-8 cursor-pointer text-xl text-center font-base hover:text-white ">
                  <a href="#awards">Awards</a>
                </li>
                <li className="m-8 cursor-pointer text-xl text-center font-base hover:text-white ">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
