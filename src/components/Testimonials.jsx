import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Anna,Budapest", text: "A Merci Divat ruháim mindig különlegesek és kényelmesek. Minden alkalommal dicséretet kapok!", image: "/Testimonials1.png" },
  { name: "Kata,Debrecen", text: "Gyönyörű darabok, elérhető áron. Az elegáns ruháim közül a kedvenceim innen vannak", image: "/Testimonials2.png" },
  { name: "Petra,Győr", text: "Nagyon gyors kiszolgálás és profi minőség. Biztosan fogok még vásárolni!", image: "/Testimonials3.png" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold mb-12 hover:text-yellow-400 transition-colors duration-300">
          Vásárlóink mondták
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 rounded-2xl shadow-xl p-8 text-center flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gold mb-4"
                />
                <p className="text-gray-200 italic text-lg mb-4">“{t.text}”</p>
                <h3 className="text-gold font-semibold">{t.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
