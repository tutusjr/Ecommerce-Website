import Banner from "../../assets/website/orange-pattern.jpg";

export default function Subs() {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  return (
    <section
    data-aos="fade-up"
    data-aos-once="true"
      style={BannerImg}
      className="bg-gray-100 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className=" sm:flex-col mx-auto gap-1 flex xl:flex-row items-center justify-center">
          <h1 className="text-1xl w-[50%] !text-center sm:text-left sm:text-2xl xl:text-3xl font-semibold">
            Yeni Ürünler Hakkında Bilgi Alın
          </h1>
          <input
            className=" w-[50%] p-2 xl:p-4 outline-none justify-center items-center flex text-black border"
            type="email"
            data-aos-once="true"
            placeholder="E-posta adresinizi girin"
          />
        </div>
        
      </div>
    </section>
  );
}
