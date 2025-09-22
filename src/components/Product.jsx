import React from "react";

const Product = ({ title, description, image }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 md:p-6 hover:scale-105 transform transition duration-300">
      {/* Kép reszponzív magassággal */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg"
      />

      {/* Termék cím */}
      <h4 className="text-gold text-lg sm:text-xl md:text-2xl font-bold mt-4">
        {title}
      </h4>

      {/* Termék leírás */}
      <p className="text-white text-sm sm:text-base md:text-lg mt-2">
        {description}
      </p>
    </div>
  );
};

export default Product;
