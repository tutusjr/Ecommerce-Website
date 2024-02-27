import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}
