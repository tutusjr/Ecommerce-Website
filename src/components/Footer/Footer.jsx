
import { FaInstagram } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import footerimage from "../../assets/website/footer-pattern.jpg";


const footerImage = {
    backgroundImage: `url(${footerimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "100%",
    width: "100%",
}

export default function Footer() {
  return (
    <footer style={footerImage} className="relative mt-10">
      <div className="container flex h-[475px] ">
        <div className="flex flex-col w-[600px] mt-10">
        <div className=" flex items-center gap-3">
          <a href="#">
            <img src={logo} className="w-17 h-12 object-contain" alt="" />
          </a>
          <h1 className="text-3xl font-bold">SHOPFY</h1>
        </div>
        <div>
        <p className="font-semibold mt-5 leading-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis debitis magnam illum aut illo veniam culpa atque reiciendis qui!</p>
        </div>
        </div>
        <div className="flex w-full justify-around mt-10">
          <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Önemli Linkler</h1>
          <a className="linkFooter" href="#">Ana Sayfa</a>
          <a className="linkFooter" href="#">Hakkımızda</a>
          <a className="linkFooter" href="#">İletişim</a>
          <a className="linkFooter" href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Linkler</h1>
          <a className="linkFooter" href="#">Anasayfa</a>
          <a className="linkFooter" href="#">Hakkımızda</a>
          <a className="linkFooter" href="#">İletişim</a>
          <a className="linkFooter" href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-3">
                <FaInstagram className="text-3xl"/>
                <VscGithubAlt className="text-3xl"/>
                <FaLinkedinIn className="text-3xl"/>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                <FaLocationArrow className="text-xl"/>
                <p className="font-semibold">Ankara, Türkiye</p>
                </div>
                <div className="flex gap-2">
                <FaPhone className="text-xl"/>
                <p className="font-semibold">+90 555 555 55 55</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
