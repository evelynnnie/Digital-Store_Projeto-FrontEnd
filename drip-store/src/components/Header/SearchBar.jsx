import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const COLORS = {
  primary: '#C92071',
  lightGray2: '#CCCCCC',
  lightGray3: '#F5F5F5',
  darkGray2: '#474747',
};

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?filter=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ position: 'relative', width: 320 }}>
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          width: '100%',
          height: 40,
          borderRadius: 8,
          border: `1px solid ${COLORS.lightGray2}`,
          background: COLORS.lightGray3,
          padding: '0 40px 0 16px',
          fontSize: 16,
          color: COLORS.darkGray2,
        }}
      />
      <button
        type="submit"
        style={{
          position: 'absolute',
          right: 8,
          top: 8,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Buscar"
      >
        <FiSearch size={20} color={COLORS.darkGray2} />
      </button>
    </form>
  );
};

export default SearchBar;