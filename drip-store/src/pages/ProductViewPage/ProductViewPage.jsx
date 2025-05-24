import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout'; 
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import ProductListing from '../../components/ProductListing/ProductListing';
import Section from '../../components/Section/Section';

const COLORS = {
  'dark-gray': '#1F1F1F',
  'dark-gray-2': '#474747',
  'dark-gray-3': '#666666',
  'light-gray': '#8F8F8F',
  'light-gray-2': '#CCCCCC',
  'white': '#FFFFFF',
  'primary': '#C92071',
  'warning': '#FFC700',
};


const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        console.log("Detalhes do produto:", data);

        const categoryToFetch = data.category || 'mens-shoes';
        const relatedResponse = await fetch(`https://dummyjson.com/products/category/${categoryToFetch}?limit=8`);
        if (!relatedResponse.ok) {
          console.warn(`Could not fetch related products for category: ${categoryToFetch}`);
          setRelatedProducts([]);
        } else {
          const relatedData = await relatedResponse.json();
          const filteredRelated = relatedData.products.filter(p => p.id !== data.id).slice(0, 8);
          setRelatedProducts(filteredRelated);
          console.log("Produtos relacionados:", filteredRelated);
        }

      } catch (e) {
        setError(e.message);
        console.error("Erro ao buscar produto ou relacionados:", e);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <Layout><p>Carregando detalhes do produto...</p></Layout>;
  }

  if (error) {
    return <Layout><p style={{ color: 'red' }}>Erro ao carregar o produto: {error}</p></Layout>;
  }

  if (!product) {
    return <Layout><p>Produto não encontrado.</p></Layout>;
  }

  const galleryImages = product.images ? product.images.map(imgSrc => ({
    src: imgSrc
  })) : [
    { src: '/default-product.png' }
  ];

  const productDetailContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '40px',
    maxWidth: '1280px',
    margin: '40px auto',
    alignItems: 'flex-start',
  };

  const sectionContainerStyle = { // Estilo para ambas as seções (relacionados e recomendados)
      maxWidth: '1280px',
      margin: '40px auto',
      padding: '0 40px',
  };

  const productSizes = ["38", "39", "40", "41", "42"];
  const productColors = ["#000000", "#FF0000", "#0000FF", "#FFFF00"];

  // --- DADOS MOCK PARA PRODUTOS RECOMENDADOS ---
  const recommendedProductsData = [
    {
      id: 201,
      title: "Tênis Casual X",
      thumbnail: "https://cdn.dummyjson.com/product-images/91/thumbnail.jpg", // Exemplo de sapato masculino
      price: 180,
      discountPercentage: 10,
    },
    {
      id: 202,
      title: "Sandália de Verão Y",
      thumbnail: "https://cdn.dummyjson.com/product-images/92/thumbnail.jpg", // Exemplo de sapato masculino
      price: 90,
      discountPercentage: 0,
    },
    {
      id: 203,
      title: "Bota de Couro Z",
      thumbnail: "https://cdn.dummyjson.com/product-images/191/thumbnail.jpg", // Exemplo de sapato feminino
      price: 250,
      discountPercentage: 5,
    },
    {
      id: 204,
      title: "Sapato Social W",
      thumbnail: "https://cdn.dummyjson.com/product-images/192/thumbnail.jpg", // Exemplo de sapato feminino
      price: 320,
      discountPercentage: 15,
    },
  ];
  // --- FIM DOS DADOS MOCK ---


  return (
    <Layout>
      <div style={productDetailContainerStyle}>
        <Gallery
          images={galleryImages}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />

        <BuyBox
          name={product.title}
          reference={product.sku || product.id}
          stars={product.rating}
          rating={product.reviews ? product.reviews.length : Math.floor(product.rating * 10)}
          price={product.price}
          priceDiscount={product.discountPercentage ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2) : null}
          description={product.description}
        >
          <h3 style={{ margin: '16px 0 8px 0', fontSize: '18px', color: COLORS['dark-gray-2'] }}>Tamanhos:</h3>
          <ProductOptions
            options={productSizes}
            type="text"
            shape="square"
            radius="4px"
          />

          <h3 style={{ margin: '16px 0 8px 0', fontSize: '18px', color: COLORS['dark-gray-2'] }}>Cores:</h3>
          <ProductOptions
            options={productColors}
            type="color"
            shape="circle"
            radius="50%"
          />

        </BuyBox>
      </div>

      {/* Seção de Produtos Relacionados */}
      <div style={sectionContainerStyle}>
        <Section title="Produtos Relacionados" titleAlign="left" />
        {relatedProducts.length > 0 ? (
          <ProductListing
            products={relatedProducts.map(p => ({
              id: p.id,
              name: p.title,
              image: p.thumbnail || (p.images && p.images.length > 0 ? p.images[0] : '/default-product.png'),
              price: p.price,
              priceDiscount: p.discountPercentage ? (p.price * (1 - p.discountPercentage / 100)).toFixed(2) : null,
            }))}
          />
        ) : (
          <p>Nenhum produto relacionado encontrado.</p>
        )}
      </div>

      {/* --- NOVA SEÇÃO: PRODUTOS RECOMENDADOS --- */}
      <div style={sectionContainerStyle}>
        <Section
          title="Produtos Recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing
            products={recommendedProductsData.map(p => ({
              id: p.id || `recommended-${p.title}-${p.price}`, 
              name: p.title,
              image: p.thumbnail || '/default-product.png',
              price: p.price,
              priceDiscount: p.discountPercentage ? (p.price * (1 - p.discountPercentage / 100)).toFixed(2) : null,
            }))}
          />
        </Section>
      </div>
      {/* --- FIM DA NOVA SEÇÃO --- */}

    </Layout>
  );
};

export default ProductViewPage;