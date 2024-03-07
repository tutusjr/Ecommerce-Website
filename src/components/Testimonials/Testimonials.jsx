import Slider from "react-slick";
import { IoMdQuote } from "react-icons/io";

const ImageList2=   [
    {
        id: 1,
        image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/10/15/c190ac54-e2cb-4a96-94fd-ec6154b7841c/lionel-messi",
        comment: "Soy el mejor jugador de fútbol del mundo y también me gusta mucho este sitio. ",
        name: "Leo Messi",
    },
    {
        id: 2,
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5c4c9c426326a707/652cf1802433d0766d629bde/GOAL_-_Blank_WEB_-_Facebook_-_2023-10-16T091643.114.png?auto=webp&format=pjpg&width=3840&quality=60",
        comment: "Não, sou o melhor jogador de futebol do mundo, Messi também sabe disso, ninguém pode competir comigo. Gosto muito deste site, os produtos são incríveis, obrigado",
        name: "Cristiano Ronaldo",
    },
    {
        id: 3,
        image: "https://tmssl.akamaized.net/images/foto/big/tayfur-bingol-1662654510-91968.jpg?lm=1662654519",
        comment: "Hayır herkes biliyor ki dünyanın gelmiş geçmiş en iyi futbolcusu benim. Bu arada sitedeki ürünlere bayıldım. ",
        name: "Tayfur Bingöl",
    }
]

export default function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };

  return (

    <section className="py-10">
        <div className="container">
            {/* header */}
            <div className="flex flex-col text-center justify-center">
                <p className="text-sm text-primary">Yorumlar</p>
                <h1 className="text-3xl font-bold">Müşteri Yorumları</h1>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
            </div>
            {/* comment section */}
            <div>
                <Slider {...settings}>
                    
                    {ImageList2.map((data) => (
                        <div key={data.id} className="my-8">
                            <div className="flex relative flex-col gap-5 shadow-md dark:bg-gray-800 bg-orange-50 py-5 px-4 rounded-xl mx-4 h-[260px] ">
                            <div>
                                <img className="rounded-full w-20 h-20 object-cover" src={data.image} alt="" />
                            </div>
                            <div>
                                <p className="text-xs pt-2 dark:text-gray-400 text-gray-700">{data.comment}</p>
                                <h1 className="text-xl absolute bottom-8 pt-5 font-bold">{data.name}</h1>
                            </div>
                            <IoMdQuote className="absolute text-7xl right-0 top-[20%]  text-gray-300 dark:text-gray-900/50" />
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </section>
  )
}
