import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-black px-0">
      <div className="max-w-3xl mx-auto">
        {/* --- Kapcsolatfelvételi rész --- */}
        <div className="w-full p-6 bg-gray-900 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center hover:text-yellow-400 transition-colors duration-300">
            Lépj kapcsolatba velünk
          </h2>
          <p className="text-white mb-8 text-center">
            Kattints a gombra és írj nekünk Messenger-en vagy látogasd meg az Instagram oldalunkat!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://m.me/melania.barna.5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:bg-yellow-400 hover:text-black transform transition-all duration-200 text-center"
            >
              Facebook Messenger
            </a>
            <a
              href="https://www.instagram.com/merci_divat/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:bg-yellow-400 hover:text-black transform transition-all duration-200 text-center"
            >
              Instagram oldal
            </a>
          </div>
        </div>

        {/* --- Kis tér / elválasztás --- */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* --- Elérhetőség és térkép --- */}
        <div className="w-full p-6 bg-gray-900 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center hover:text-yellow-400 transition-colors duration-300">
            Elérhetőségünk
          </h2>
          <p className="text-white text-center mb-2">📍 1086 Budapest, Szerdahelyi utca 4-8</p>
          <p className="text-white text-center mb-2">📞 Tel: 0630 485 7671</p>
          <p className="text-white text-center mb-6">🕒 Nyitvatartás: Hétfőtől-Szombatig 10:00 - 19:00</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.837814850379!2d19.063244!3d47.497913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc9b5a11c3d3%3A0xabcdef1234567890!2sSzerdahelyi%204-8%2C%201086%20Budapest!5e0!3m2!1shu!2shu!4v1694770000000!5m2!1shu!2shu"
            width="100%"
            height="400"
            className="rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;