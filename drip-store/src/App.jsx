import { useEffect, useState } from "react";
import { GiClothes, GiArmoredPants, GiRunningShoe } from "react-icons/gi";
import { FiHeadphones } from "react-icons/fi";
import { PiBaseballCapBold } from "react-icons/pi";
import Layout from "./pages/Layout"; 
import Section from "./components/Section/Section";
import ProductListing from "./components/ProductListing/ProductListing";
import Gallery from "./components/Gallery/Gallery";
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import { Route, Routes } from 'react-router-dom';

// Imagens da galeria (diretório public)
const galleryImages = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" },
  { src: "/home-slide-4.jpeg" },
  { src: "/home-slide-5.jpeg" },
];

// Coleções em destaque (diretório public)
const collections = [
  { src: "/collection-1.png", alt: "Coleção 1" },
  { src: "/collection-2.png", alt: "Coleção 2" },
  { src: "/collection-3.png", alt: "Coleção 3" },
];

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Busca 8 produtos de sapatos (4 masculinos + 4 femininos)
    Promise.all([
      fetch("https://dummyjson.com/products/category/mens-shoes?limit=4").then(
        (res) => res.json()
      ),
      fetch(
        "https://dummyjson.com/products/category/womens-shoes?limit=4"
      ).then((res) => res.json()),
    ]).then(([mens, womens]) => {
      const shoes = [...(mens.products || []), ...(womens.products || [])].map(
        (item) => ({
          name: item.title,
          image: item.thumbnail,
          price: item.price,
          priceDiscount: item.discountPercentage
            ? Number(
                (item.price * (1 - item.discountPercentage / 100)).toFixed(2)
              )
            : undefined,
        })
      );
      setProducts(shoes.slice(0, 8));
    });
  }, []);

  return (
    <>
      <Routes>
        {/* Rota para a ProductListingPage */}
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />

        {/* Rota para a página inicial  */}
        <Route path="/" element={
          <Layout> {/* O Layout é aplicado aqui para a página inicial */}
            <main style={{ minHeight: "60vh", padding: 32 }}>
              {/* Banner Promocional */}
              <div
                style={{
                  width: "100%",
                  background: "#f6f7fb",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "48px 64px",
                  marginBottom: 40,
                  minHeight: 340,
                  position: "relative",
                }}
              >
                <div>
                  <span style={{ color: "#C92071", fontWeight: 600, fontSize: 16 }}>
                    Melhores ofertas personalizadas
                  </span>
                  <h1
                    style={{
                      fontSize: 48,
                      fontWeight: 700,
                      margin: "16px 0 8px 0",
                      color: "#1F1F1F",
                      lineHeight: 1.1,
                    }}
                  >
                    Queima de
                    <br />
                    estoque Nike{" "}
                    <span role="img" aria-label="fogo">
                      🔥
                    </span>
                  </h1>
                  <p
                    style={{
                      color: "#474747",
                      fontSize: 18,
                      marginBottom: 32,
                      maxWidth: 400,
                    }}
                  >
                    Consequat culpa exercitation mollit nisi excepteur do do tempor
                    laboris eiusmod irure consectetur.
                  </p>
                  <button
                    style={{
                      background: "#C92071",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "12px 32px",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    Ver Ofertas
                  </button>
                </div>
                <div
                  style={{
                    background: "#e6eef7",
                    borderRadius: 32,
                    maxWidth: 480,
                    maxHeight: 320,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/home-slide-1.jpeg"
                    alt="Nike Promo"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      borderRadius: 0,
                      background: "#dde6f0",
                      boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)",
                    }}
                  />
                </div>

                {/* Indicador de slides */}
                <div
                  style={{
                    position: "absolute",
                    left: 64,
                    bottom: 24,
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#C92071",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#E0E0E0",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#E0E0E0",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#E0E0E0",
                      display: "inline-block",
                    }}
                  />
                </div>
              </div>

              {/* Galeria */}
              <Section>
                <Gallery
                  images={galleryImages}
                  width={1440}
                  height={681}
                  radius="8px"
                  showThumbs
                />
              </Section>

              {/* Coleções em destaque */}
              <Section title="Coleções em destaque" titleAlign="center">
                <div
                  style={{
                    display: "flex",
                    gap: 32,
                    justifyContent: "center",
                    margin: "32px 0",
                  }}
                >
                  {collections.map((col, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        width: 380,
                        height: 220,
                        background: "#f6f7fb",
                        position: "relative",
                        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.06)",
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {/* Imagem de fundo */}
                      <img
                        src={col.src}
                        alt={col.alt}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                          filter: "brightness(0.92)",
                          transition: "transform 0.3s",
                        }}
                      />
                      {/* Selo */}
                      <span
                        style={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          background: "#e6ffcb",
                          color: "#7bb86f",
                          fontWeight: 700,
                          fontSize: 16,
                          borderRadius: 6,
                          padding: "4px 16px",
                          zIndex: 2,
                        }}
                      >
                        30% OFF
                      </span>
                      {/* Texto */}
                      <div
                        style={{
                          position: "relative",
                          color: "#222",
                          fontWeight: 700,
                          fontSize: 26,
                          textShadow: "0 2px 8px #fff",
                          marginLeft: 24,
                          marginBottom: 60,
                          zIndex: 2,
                        }}
                      >
                        {col.alt}
                      </div>
                      {/* Botão */}
                      <button
                        style={{
                          position: "absolute",
                          left: 24,
                          bottom: 24,
                          background: "#fff",
                          color: "#C92071",
                          border: "none",
                          borderRadius: 12,
                          padding: "8px 28px",
                          fontWeight: 700,
                          fontSize: 18,
                          cursor: "pointer",
                          boxShadow: "0 2px 8px #eee",
                          zIndex: 2,
                        }}
                      >
                        Comprar
                      </button>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Coleções em destaque - ícones redondos */}
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  justifyContent: "center",
                  margin: "32px 0",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 1px 4px #eee",
                      marginBottom: 8,
                    }}
                  >
                    <GiClothes size={38} color="#C92071" />
                  </span>
                  <div style={{ fontSize: 17, color: "#222", fontFamily: "serif" }}>
                    Camisetas
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 1px 4px #eee",
                      marginBottom: 8,
                    }}
                    >
                    <GiArmoredPants size={38} color="#C92071" />
                  </span>
                  <div style={{ fontSize: 17, color: "#222", fontFamily: "serif" }}>
                    Calças
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 1px 4px #eee",
                      marginBottom: 8,
                    }}
                  >
                    <PiBaseballCapBold size={38} color="#C92071" />
                  </span>
                  <div style={{ fontSize: 17, color: "#222", fontFamily: "serif" }}>
                    Bonés
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 1px 4px #eee",
                      marginBottom: 8,
                    }}
                  >
                    <FiHeadphones size={38} color="#C92071" />
                  </span>
                  <div style={{ fontSize: 17, color: "#222", fontFamily: "serif" }}>
                    Headphones
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 1px 4px #eee",
                      marginBottom: 8,
                    }}
                  >
                    <GiRunningShoe size={38} color="#C92071" />
                  </span>
                  <div style={{ fontSize: 17, color: "#222", fontFamily: "serif" }}>
                    Tênis
                  </div>
                </div>
              </div>

              {/* Produtos em alta */}
              <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{ text: "Ver todos", href: "#" }}
              >
                <ProductListing products={products} />
              </Section>

              {/* Oferta especial */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#f6f7fb",
                  borderRadius: 16,
                  padding: "48px 64px",
                  margin: "64px 0 32px 0",
                  minHeight: 340,
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 380,
                    height: 240,
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 48,
                    position: "relative",
                  }}
                >
                  <img
                    src="/home-slide-6.jpeg"
                    alt="Air Jordan edição de colecionador"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 16,
                      transition: "transform 0.3s",
                    }}
                  />
                </div>
                <div>
                  <span style={{ color: "#C92071", fontWeight: 700, fontSize: 20 }}>
                    Oferta especial
                  </span>
                  <h2
                    style={{
                      fontSize: 48,
                      fontWeight: 700,
                      margin: "16px 0 16px 0",
                      color: "#1F1F1F",
                      lineHeight: 1.1,
                    }}
                  >
                    Air Jordan edição de colecionador
                  </h2>
                  <p
                    style={{
                      color: "#474747",
                      fontSize: 20,
                      marginBottom: 32,
                      maxWidth: 540,
                      lineHeight: 1.4,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip
                  </p>
                  <button
                    style={{
                      background: "#C92071",
                      color: "#fff",
                      border: "none",
                      borderRadius: 10,
                      padding: "16px 48px",
                      fontWeight: 700,
                      fontSize: 22,
                      cursor: "pointer",
                      boxShadow: "0 2px 8px 0 rgba(201,32,113,0.10)",
                      transition: "background 0.2s",
                    }}
                  >
                    Ver Oferta
                  </button>
                </div>
              </div>
            </main>
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;