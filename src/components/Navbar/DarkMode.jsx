import light from "../../assets/website/light-mode-button.png";
import dark from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";
export default function DarkMode() {

    const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; //html element

    useEffect(() => {
      if (theme === "light") {
        element.classList.remove("dark");
        element.classList.add('light');
        localStorage.setItem("theme", "light");
      }else{
        element.classList.remove("light");
        element.classList.add('dark');
        localStorage.setItem("theme", "dark");
      }
    }, [theme, element]);

  return (
    <div className="relative">
      <img
        className={`${theme === "dark" ? 'opacity-0' : 'opacity-100' } w-12 cursor-pointer drop-shadow-lg transition-all duration-300 absolute right-0 z-10 `}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={light}
        alt="light"
      />
      <img
        className={` ${theme === "light" ? 'opacity-0' : 'opacity-100'} w-12 cursor-pointer drop-shadow-lg transition-all duration-300 `}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={dark}
        alt="dark"
      />
    </div>
  );
}
