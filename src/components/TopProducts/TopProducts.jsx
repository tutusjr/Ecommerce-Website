import { FaStar } from "react-icons/fa";
import ProductsData from "../../components/TopProductsData";

export default function TopProducts() {
  return (
    <section>
      <div className="container">
        {/* header */}
        <div className="text-left mb-10">
          <p data-aos="fade-up" data-aos-once="true" className="text-sm text-primary">
            Top Rated Products
          </p>
          <h1 data-aos="fade-up" data-aos-once="true" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" data-aos-once="true" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            obcaecati. Necessitatibus dolore recusandae corrupti quis!
          </p>
        </div>
        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-primary relative shadow-xl group max-w-[300px]"
              key={data.id}
            >
              {/* images */}
              <div className="mt-2 h-[170px]">
                <img
                  className="max-w-[140px] block mx-auto group-hover:scale-105 duration-300 drop-shadow-md"
                  src={data.img}
                  alt=""
                />
              </div>
              {/* details */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500 dark:group-hover:text-yellow-800 duration-300" />
                  <FaStar className="text-yellow-500 dark:group-hover:text-yellow-800 duration-300" />
                  <FaStar className="text-yellow-500 dark:group-hover:text-yellow-800 duration-300" />
                  <FaStar className="text-yellow-500 dark:group-hover:text-yellow-800 duration-300" />
                </div>
                <h1 className="text-xl font-bold dark:text-white group-hover:text-white duration-300 dark:group-hover:text-black">
                  {data.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 dark:group-hover:text-black group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                // onClick={handleOrderPopup} 
                className=" bg-yellow-500 dark:text-gray-800 dark:bg-yellow-200 shadow-xl rounded-xl p-2 mt-3 duration-300 font-medium group-hover:text-gray-800 transform active:scale-95 dark:group-hover:bg-gray-800 dark:group-hover:text-white group-hover:bg-white">
                  Hemen Al!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
