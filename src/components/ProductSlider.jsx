import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredProducts = [
  { title: "Elegáns Strasszos Ruha", description: "Fekete testhezálló ruha, csillogó strassz díszítéssel – különleges alkalmakra.", image: "ruha1.png", price: "17 000 Ft" },
  { title: "Fekete Ruha Arany Díszítéssel", description: "Klasszikus fekete ruha arany gomb és lánc részletekkel – elegáns megjelenéshez.", image: "ruha2.png", price: "25 000 Ft" },
  { title: "Elegáns Kétrészes Szett", description: "Fehér-fekete színű, arany gombokkal díszített szett – stílusos és kifinomult választás.", image: "ruha3.png", price: "19 500 Ft" },
];

const otherProducts = [
  { title: "Fehér Strasszos Miniruha", description: "Modern, aszimmetrikus szabású miniruha, kristályos díszítéssel.", image: "ruha4.png", price: "17 000 Ft" },
  { title: "Bézs Kétrészes Szett", description: "Kifinomult, bézs színű szett arany díszítésekkel – elegáns megjelenéshez.", image: "ruha5.png", price: "25 000 Ft" },
];

const ProductSlider = () => {
  return (
    <section id="products" className="bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-10 hover:text-yellow-400 transition-colors duration-300">
          Kiemelt Ruháink
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-6 text-center flex flex-col justify-between min-h-[600px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain mx-auto"
                />
                <div className="mt-4">
                  <h3 className="text-gold text-xl sm:text-2xl md:text-3xl font-bold">
                    {product.title}
                  </h3>
                  <p className="text-white text-base sm:text-lg md:text-xl font-semibold mt-1">
                    {product.price}
                  </p>
                  <p className="text-white text-sm sm:text-base md:text-lg mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gold mt-20 mb-10 hover:text-yellow-400 transition-colors duration-300">
          További Ruháink
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {otherProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-4 text-center w-full flex flex-col justify-between min-h-[600px]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain mx-auto"
              />
              <div className="mt-3">
                <h3 className="text-gold text-lg sm:text-xl md:text-2xl font-bold">
                  {product.title}
                </h3>
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold mt-1">
                  {product.price}
                </p>
                <p className="text-white text-sm sm:text-base md:text-lg mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/clothes"
            className="inline-block bg-gray-900 text-gold px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition"
          >
            További ruhák
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
