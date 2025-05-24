import { useState, useEffect } from 'react';
import Layout from '../Layout';
import FIlterGroup from '../../components/FIlterGroup/FIlterGroup';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState('');

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const COLORS = {
    'dark-gray': '#1F1F1F',
    'dark-gray-2': '#474747',
    'dark-gray-3': '#666666',
    'light-gray': '#8F8F8F',
    'light-gray-2': '#CCCCCC',
    'light-gray-3': '#F5F5F5',
    'white': '#FFFFFF',
    'primary': '#C92071',
  };

  const pageContainerStyle = {
    display: 'flex',
    padding: '20px',
    gap: '30px',
  };

  const sidebarContainerStyle = {
    width: '308px',
    backgroundColor: COLORS.white,
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    padding: '20px',
    flexShrink: 0,
  };

  const filterTitleStyle = {
    fontSize: '16px',
    color: COLORS['dark-gray-2'],
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const filterDividerStyle = {
    borderBottom: `1px solid ${COLORS['light-gray-2']}`,
    margin: '10px 0 20px 0',
  };

  const orderSelectContainerStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    color: COLORS['dark-gray-2'],
    fontFamily: 'Arial, sans-serif',
  };

  const selectStyle = {
    width: '308px',
    height: '60px',
    color: COLORS['dark-gray-2'],
    backgroundColor: COLORS.white,
    borderColor: COLORS['light-gray-2'],
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '0 10px',
    boxSizing: 'border-box',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23474747" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '20px',
    cursor: 'pointer',
  };

  const productListWrapperStyle = {
    flexGrow: 1,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // Requisição para sapatos femininos (limitando a 15)
        const responseWomens = await fetch('https://dummyjson.com/products/category/womens-shoes?limit=15');
        if (!responseWomens.ok) {
          throw new Error(`HTTP error! status: ${responseWomens.status}`);
        }
        const dataWomens = await responseWomens.json();
        const womensShoes = dataWomens.products || []; 

        // Requisição para sapatos masculinos (limitando a 15)
        const responseMens = await fetch('https://dummyjson.com/products/category/mens-shoes?limit=15');
        if (!responseMens.ok) {
          throw new Error(`HTTP error! status: ${responseMens.status}`);
        }
        const dataMens = await responseMens.json();
        const mensShoes = dataMens.products || []; 

        // Combina os dois arrays de produtos
        const combinedShoes = [...womensShoes, ...mensShoes];

        setProducts(combinedShoes);

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Array de dependências vazio para rodar apenas uma vez ao montar o componente

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'brand') {
      setSelectedBrands(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    } else if (filterType === 'size') {
      setSelectedSizes(prev => (prev === value ? '' : value));
    } else if (filterType === 'color') {
      setSelectedColors(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    }
  };

  const getFilteredAndSortedProducts = () => {
    let currentProducts = [...products];

    // DEBUG: Log inicial para ver quantos produtos temos antes dos filtros
    console.log('Produtos iniciais (do fetch):', currentProducts.length);
    console.log('Selected Brands:', selectedBrands);
    console.log('Selected Sizes:', selectedSizes);
    console.log('Selected Colors:', selectedColors);


    // Aplicar filtros de marca
    if (selectedBrands.length > 0) {
      currentProducts = currentProducts.filter(product =>
        selectedBrands.includes(product.brand)
      );
      console.log('Após filtro de Marca:', currentProducts.length);
    }

    // Aplicar filtros de tamanho 
    if (selectedSizes) {
      currentProducts = currentProducts.filter(product => {
        const titleLower = product.title.toLowerCase();
        switch (selectedSizes) {
          case 'pequeno':
            return titleLower.includes('small') || titleLower.includes('s') || titleLower.includes('35') || titleLower.includes('36') || titleLower.includes('37');
          case 'medio':
            return titleLower.includes('medium') || titleLower.includes('m') || titleLower.includes('38') || titleLower.includes('39') || titleLower.includes('40');
          case 'grande':
            return titleLower.includes('large') || titleLower.includes('l') || titleLower.includes('41') || titleLower.includes('42') || titleLower.includes('43');
          case 'extra grande':
            return titleLower.includes('extra large') || titleLower.includes('xl') || titleLower.includes('44') || titleLower.includes('45');
          default:
            return true;
        }
      });
      console.log('Após filtro de Tamanho:', currentProducts.length);
    }

    // Aplicar filtros de cor 
    if (selectedColors.length > 0) {
      currentProducts = currentProducts.filter(product => {
        const titleLower = product.title.toLowerCase();
        return selectedColors.some(color => titleLower.includes(color.toLowerCase()));
      });
      console.log('Após filtro de Cor:', currentProducts.length);
    }

    // Aplicar ordenação
    if (order === 'menor-preco') {
      currentProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'maior-preco') {
      currentProducts.sort((a, b) => b.price - a.price);
    }
    console.log('Produtos após filtros e ordenação (displayedProducts):', currentProducts.length);

    return currentProducts;
  };

  const displayedProducts = getFilteredAndSortedProducts();

  const getUniqueBrands = () => {
    const brands = [...new Set(products.map(p => p.brand))].map(brand => ({ text: brand, value: brand }));
    return brands.filter(b => b.text);
  };

  const getUniqueColors = () => {
    const commonColors = ['Black', 'White', 'Blue', 'Red', 'Green', 'Yellow', 'Gray', 'Pink', 'Brown'];
    const existingColors = new Set();
    products.forEach(p => {
      commonColors.forEach(color => {
        if (p.title.toLowerCase().includes(color.toLowerCase())) {
          existingColors.add(color);
        }
      });
    });
    return Array.from(existingColors).map(color => ({ text: color, value: color.toLowerCase() }));
  };

  const sizeOptions = [
    { text: 'Pequeno (35-37)', value: 'pequeno' },
    { text: 'Médio (38-40)', value: 'medio' },
    { text: 'Grande (41-43)', value: 'grande' },
    { text: 'Extra Grande (44+)', value: 'extra grande' },
  ];

  const productListData = displayedProducts.map(product => ({
    id: product.id,
    name: product.title,
    image: product.thumbnail || (product.images && product.images.length > 0 ? product.images[0] : '/default-product.png'),
    price: product.price,
    priceDiscount: product.discountPercentage ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2) : null,
  }));

  return (
    <Layout>
      <div style={pageContainerStyle}>
        <div style={sidebarContainerStyle}>
          <h3 style={filterTitleStyle}>Filtrar por</h3>
          <div style={filterDividerStyle}></div>

          <div style={orderSelectContainerStyle}>
            <label
              htmlFor="order-by"
              style={labelStyle}
            >
              Ordenar por
            </label>
            <select
              id="order-by"
              style={selectStyle}
              value={order}
              onChange={handleOrderChange}
            >
              <option value="">Selecione</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>

          <FIlterGroup
            title="Marca"
            inputType="checkbox"
            options={getUniqueBrands()}
            onFilterChange={(value) => handleFilterChange('brand', value)}
            selectedValues={selectedBrands}
          />

          <FIlterGroup
            title="Tamanho"
            inputType="radio"
            options={sizeOptions}
            onFilterChange={(value) => handleFilterChange('size', value)}
            selectedValues={selectedSizes}
          />

          <FIlterGroup
            title="Cor"
            inputType="checkbox"
            options={getUniqueColors()}
            onFilterChange={(value) => handleFilterChange('color', value)}
            selectedValues={selectedColors}
          />

        </div>

        <div style={productListWrapperStyle}>
          <Section title={`Total de produtos encontrados: ${displayedProducts.length} sapatos`} titleAlign="left" />

          {loading && <p>Carregando sapatos...</p>}
          {error && <p style={{ color: 'red' }}>Erro ao carregar sapatos: {error}</p>}

          {!loading && !error && (
            displayedProducts.length === 0 ? (
              <p>Nenhum sapato encontrado com os filtros aplicados.</p>
            ) : (
              <ProductListing products={productListData} />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;