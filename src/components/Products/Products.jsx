import ProductsData from "../ProductsData";
import { FaStar } from "react-icons/fa";
export default function Products() {
  return (
    <section className="mt-10 mb-7">
      <div className="container">
        {/* header */}
        <div className="text-center flex flex-col gap-1 mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" data-aos-once="true" className="text-sm text-primary">Çok Satan Ürünler</p>
          <h1 data-aos="fade-up" data-aos-once="true" className="text-3xl font-bold">Ürünler</h1>
          <p data-aos="fade-up" data-aos-once="true" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            obcaecati. Necessitatibus dolore recusandae corrupti quis!
          </p>
        </div>
        {/* body */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 place-items-center md:grid-cols-5 gap-5">
            {/* card */}
            {ProductsData.map((data) => (
              <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={data.aosDelay} 
              key={data.id} 
              className="space-y-3">
                <img
                  className="object-cover shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-300 hover:scale-105  rounded-md h-[220px] w-[150px]"
                  src={data.img}
                  alt="image"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{data.author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center items-center mt-5">
        <button data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="button2">
          Tüm Ürünleri Gör
        </button>
        </div>
      </div>
    </section>
  );
}
