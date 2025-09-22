import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import ProductSlider from "../components/ProductSlider"; // <-- slider import
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
        <meta property="og:title" content="Merci Divat – Elegáns Női Ruhák" />
        <meta
          property="og:description"
          content="Fedezd fel a Merci Divat világát: modern, elegáns női ruhák és különleges kollekciók minden alkalomra."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=Merci+Divat"
        />
      </Helmet>

      <Header />
      <Banner />
      <AboutSection />

      {/* Régi statikus termék rész HELYETT */}
      <ProductSlider />
      <Testimonials />

      <section id="contact" className="py-20 px-8">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Home;
