import React from "react";


const AboutSection = () => {
  return (
    <section id="about" className="bg-black text-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gold mb-12 text-center hover:text-yellow-400 transition-colors duration-300">
          Rólunk
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Merci Divat elkötelezett a minőségi és modern női ruházat iránt.
              Nálunk mindenki megtalálhatja az ideális darabot, legyen szó elegáns
              estélyiről, divatos hétköznapi ruháról vagy különleges alkalmakra
              szánt egyedi stílusú darabról. A ruhák nemcsak trendik, hanem
              kényelmesek és kifinomultak, hogy minden viselője magabiztosan
              ragyoghasson. Fedezd fel Mercia Divat világát, és találd meg nálunk a
              tökéletes ruhát!
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Merci.png"
              alt="Melania Barna bemutatkozó portréja - Merci Divat minőségi női ruházat"
              className="rounded-xl shadow-lg object-cover object-top max-w-xs w-full max-h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;