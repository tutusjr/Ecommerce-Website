import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    image: Image1,
    title: "Erkek giyimde %50'ye varan indirim",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur natus, voluptatibus officia modi voluptatem? Ducimus facere ea quod. Laborum.",
  },
  {
    id: 2,
    image: Image2,
    title: "Kadın giyimde %30'a varan indirim",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis odit odio ratione? Adipisci repellendus aliquid cumque porro aperiam blanditiis quos odit voluptas! Cupiditate odio ad delectus soluta ipsa, nisi atque!",
  },
  {
    id: 3,
    image: Image3,
    title: "Tüm ürünlerde %70'lik indirimler",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, accusantium doloremque magni asperiores eveniet in, ipsam est ea corporis repudiandae quo eos cum sit dolores illum nemo optio iure facilis.",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* bg pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="button2 ml-2">Order</button>
                  </div>
                </div>
                {/* images */}
                <div className="order-1 sm:order-2">
                  <div
                    data-oss="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      data-aos="fade-up"
                      data-aos-once="true"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120"
                      src={data.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
