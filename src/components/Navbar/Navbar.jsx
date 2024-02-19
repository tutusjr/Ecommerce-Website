import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping} from 'react-icons/fa6'
import DarkMode from "./DarkMode";
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
                className="w-[150px] sm:w-[150px] group-hover:w-[200px] transition-all duration-300 rounded-full border border-gray-300  px-2 py-1 outline-none focus:border-1 focus:border-primary"
                type="text"
                placeholder="search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          
          <button
            onClick={() => {
              console.log("order");
            }}
            className="bg-gradient-to-r w-12 hover:pl-24  outline-none h-8 from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full inline-flex justify-center items-center group  overflow-hidden "
          >
            <span className="-translate-x-[49px] text-[15px] drop-shadow-sm font-medium uppercase transition-all duration-300">Order</span>
            <FaCartShopping className="absolute text-xl text-white drop-shadow-sm cursor-pointer text-[18px] "/>
          </button>
          {/* DARKMODE SWITCH */}
          <div>
            <DarkMode />
          </div>
          </div>
          {/* order button */}
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
}
