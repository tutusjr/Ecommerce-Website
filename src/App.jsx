import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subs from "./components/Subs/Subs";
import TopSelling from "./components/TopSelling/TopSelling";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

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
      <TopProducts />
      <Banner />
      <Subs />
      <TopSelling />
      <Testimonials />
      <Footer />
    </div>
  )
}
