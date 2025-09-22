import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full relative h-[60vh] sm:h-[80vh] md:h-screen bg-cover bg-top sm:bg-center"
      style={{ backgroundImage: "url('/Mercidivat.png')" }}
    >
      {/* Szöveg a kép alatt */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        {/* Cím */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:text-yellow-400 transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Merci Divat
        </h1>

        {/* Leírás */}
        <p className="mt-4 text-base sm:text-lg md:text-2xl text-white drop-shadow-md hover:text-yellow-300 transition-colors duration-300 max-w-lg">
          Elegancia elérhető áron – különleges ruhák minden alkalomra
        </p>

        {/* Call-to-action gomb */}
        <Link
          to="/shop"
          className="mt-6 inline-block bg-yellow-300 text-black font-semibold py-3 px-6 rounded-2xl hover:bg-yellow-400 transition-colors duration-300"
        >
          Nézd meg a kollekciót
        </Link>
      </div>
    </section>
  );
};

export default Banner;
