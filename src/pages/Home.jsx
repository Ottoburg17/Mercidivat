import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import ProductSlider from "../components/ProductSlider";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Merci Divat – Elegáns Női Ruhák</title>
        <meta
          name="description"
          content="Fedezd fel a Merci Divat világát: modern, elegáns női ruhák és különleges kollekciók minden alkalomra."
        />
        <meta
          name="keywords"
          content="Merci Divat, női ruhák, elegáns ruhák, divat, stílus, kollekció"
        />
        <meta name="author" content="Merci Divat" />

        {/* Open Graph */}
        <meta property="og:title" content="Merci Divat – Elegáns Női Ruhák" />
        <meta
          property="og:description"
          content="Fedezd fel a Merci Divat világát: modern, elegáns női ruhák és különleges kollekciók minden alkalomra."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mercidivat.netlify.app/logo.png" />
        <meta property="og:url" content="https://mercidivat.netlify.app/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Merci Divat – Elegáns Női Ruhák" />
        <meta
          name="twitter:description"
          content="Fedezd fel a Merci Divat világát: modern, elegáns női ruhák és különleges kollekciók minden alkalomra."
        />
        <meta name="twitter:image" content="https://mercidivat.netlify.app/logo.png" />
      </Helmet>

      <Header />
      <Banner />
      <AboutSection />

      {/* Termékek */}
      <ProductSlider />
      <Testimonials />

      {/* Kapcsolat */}
      <section id="contact" className="py-20 px-8">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Home;
