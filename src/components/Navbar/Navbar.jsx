import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import DarkMode from "./DarkMode";
import MenuItem from "../MenuItem";
import DropdownLinks from "../DropdownLinks";
export default function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
              <img className="w-10 uppercase" src={Logo} alt="logo" />
              Shopsy
            </a>
          </div>
          {/* search bar and order button */}
          <div className="flex gap-4 items-center">
            <div className=" relative hidden sm:block group">
              <input
                className="w-[150px] sm:w-[150px] group-hover:w-[200px] transition-all duration-300 rounded-full border border-gray-300  px-2 py-1 outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                type="text"
                placeholder="search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              onClick={() => {
                console.log("order");
              }}
              className="button1"
            >
              <span className="-translate-x-[49px] text-[15px] drop-shadow-sm font-medium uppercase transition-all duration-300 dark:text-gray-800">
                Order
              </span>
              <FaCartShopping className="dark:text-gray-800 duration-200 absolute text-xl text-white drop-shadow-sm cursor-pointer text-[18px] " />
            </button>
            {/* DARKMODE SWITCH */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 ">
          {MenuItem.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className=" inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* Dropdown links */}
          <li className="group relative cursor-pointer">
            <a
              className="flex justify-center items-center gap-1 px-4 hover:text-primary duration-200"
              href="#"
            >
              Çok Satanlar{" "}
              <span>
                <IoCaretDownOutline className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a className="inline-block text-[15px] w-full rounded-md p-1 hover:bg-primary/20" href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
