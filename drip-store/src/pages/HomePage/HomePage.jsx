import Layout from './Layout';
import Section from '../components/Section/Section';
import Gallery from '../components/Gallery/Gallery';
import ProductListing from '../components/ProductListing/ProductListing';
import { FaImage } from 'react-icons/fa';

// Imagens da galeria (diretório public)
const galleryImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
];

// Coleções em destaque (diretório public)
const collections = [
  { src: '/collection-1.png', alt: 'Coleção 1' },
  { src: '/collection-2.png', alt: 'Coleção 2' },
  { src: '/collection-3.png', alt: 'Coleção 3' },
];

// Produtos em alta (diretório public)
const products = [
  {
    name: "Tênis Nike Air Max",
    image: "/product-thumb-1.png",
    price: 299.9,
    priceDiscount: 249.9
  },
  {
    name: "Tênis Adidas Run",
    image: "/product-thumb-2.png",
    price: 199.9
  },
  {
    name: "Tênis Puma Classic",
    image: "/product-thumb-3.png",
    price: 189.9,
    priceDiscount: 159.9
  },
  {
    name: "Tênis Vans Old Skool",
    image: "/product-thumb-4.png",
    price: 219.9
  },
  {
    name: "Tênis Converse All Star",
    image: "/product-thumb-5.png",
    price: 179.9
  },
  {
    name: "Tênis Asics Gel",
    image: "/product-thumb-6.png",
    price: 329.9,
    priceDiscount: 299.9
  },
  {
    name: "Tênis Fila Racer",
    image: "/product-thumb-7.png",
    price: 159.9
  },
  {
    name: "Tênis Mizuno Wave",
    image: "/product-thumb-8.png",
    price: 399.9,
    priceDiscount: 349.9
  }
];

const HomePage = () => (
  <Layout>
    <main style={{ minHeight: "60vh", padding: 32 }}>
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
        <div style={{
          display: 'flex',
          gap: 32,
          justifyContent: 'center',
          margin: '32px 0'
        }}>
          {collections.map((col, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                width: 384,
                height: 384,
                background: '#F5F5F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <img
                src={col.src}
                alt={col.alt}
                width={384}
                height={384}
                style={{
                  borderRadius: '4px',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                onError={e => {
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.style.width = '100%';
                  fallback.style.height = '100%';
                  fallback.style.display = 'flex';
                  fallback.style.alignItems = 'center';
                  fallback.style.justifyContent = 'center';
                  fallback.innerHTML = `<svg width="64" height="64" fill="#CCCCCC" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-2 0H5V5h14zm-7-3l2.03 2.71a1 1 0 0 0 1.54 0L17 14l3 4H4l5-7z"></path></svg>`;
                  e.target.parentNode.appendChild(fallback);
                }}
              />
              {/* Fallback para quando a imagem não existir */}
              {/* O react-icons será exibido se a imagem não carregar */}
              <noscript>
                <FaImage size={64} color="#CCCCCC" />
              </noscript>
            </div>
          ))}
        </div>
      </Section>

      {/* Produtos em alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </main>
  </Layout>
);

export default HomePage;