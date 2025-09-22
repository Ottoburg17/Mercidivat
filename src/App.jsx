import React from "react";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* SEO meta tag-ek */}
      <Helmet>
        <title>Melania Barna – Modern Elegance</title>
        <meta
          name="description"
          content="Explore Melania Barna's world of modern elegance, products, and creative designs."
        />
        <meta name="keywords" content="Melania Barna, modern design, elegant products, fashion, style" />
        <meta name="author" content="Melania Barna" />

        {/* Open Graph */}
        <meta property="og:title" content="Melania Barna – Modern Elegance" />
        <meta property="og:description" content="Explore Melania Barna's world of modern elegance, products, and creative designs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=Melania+Barna" />
        <meta property="og:url" content="https://yourwebsite.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Melania Barna – Modern Elegance" />
        <meta name="twitter:description" content="Explore Melania Barna's world of modern elegance, products, and creative designs." />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x630.png?text=Melania+Barna" />
      </Helmet>

      <Home />
    </div>
  );
}

export default App;