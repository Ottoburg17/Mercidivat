import React from "react";

const products = [
  {
    id: 1,
    name: "Fehér elegáns női ruha, estélyi és alkalmi viselet",
    price: "14 000 Ft",
    image: "/ruha14.png",
  },
  {
    id: 2,
    name: "Rózsaszín egyedi különleges női ruha",
    price: "12 000 Ft",
    image: "/ruha19.png",
  },
  {
    id: 3,
    name: "Piros elegáns női ruha, különleges alkalmakra",
    price: "18 000 Ft",
    image: "/ruha16.png",
  },
  {
    id: 4,
    name: "Mintás női ruha, hétköznapi és elegáns viselet",
    price: "19 999 Ft",
    image: "/ruha17.png",
  },
  {
    id: 5,
    name: "Fehér virág mintás női felső és fekete szoknya, modern stílusú hétköznapi viselet",
    price: "23 000 Ft",
    image: "/ruha18.png",
  },
];

const Clothes = () => {
  return (
    <section className="min-h-screen bg-black py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white hover:text-yellow-400 transition-colors duration-300">
        Kollekció
      </h2>

      {/* Termékek grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg hover:bg-neutral-800 transition duration-300 overflow-hidden"
          >
            {/* Kép */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-contain bg-white"
            />

            {/* Ár + név */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-white">{product.name}</h3>
              <p className="text-xl font-bold text-yellow-400 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clothes;
