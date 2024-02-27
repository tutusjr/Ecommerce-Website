import ProductsData from "../ProductsData";
import { FaStar } from "react-icons/fa";
export default function Products() {
  return (
    <section className="mt-10 mb-12">
      <div className="container">
        {/* header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
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
              data-aos-delay={data.aosDelay} 
              key={data.id} 
              className="space-y-3">
                <img
                  className="object-cover rounded-md h-[220px] w-[150px]"
                  src={data.img}
                  alt="image"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
