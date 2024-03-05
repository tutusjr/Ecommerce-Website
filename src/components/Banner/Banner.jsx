import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
export default function Banner() {
  return (
    <section className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image */}
          <div data-aos="fade-right" data-aos-once="true">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)] object-cover"
            />
          </div>
          {/* text */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-left"
              data-aos-once="true"
              className="text-3xl sm:text-4xl font-bold"
            >
              Kış İndirimlerinde %50`ye Varan Fırsatlar
            </h1>
            <p
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="200"
              className="text-sm text-gray-500 dark:text-gray-400 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              pariatur corporis id blanditiis iste assumenda odio nobis,
              similique tenetur! Voluptatibus.
            </p>
            <div className=" grid grid-cols-2 gap-y-5 ">
              <div
                data-aos-once="true"
                data-aos="fade-up"
                className="flex items-center gap-4"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Kaliteli Ürünler</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
                className="flex items-center gap-4"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Hızlı Teslimat</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Kolay Ödeme Seçenekleri</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Teklifleri Değerlendir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
