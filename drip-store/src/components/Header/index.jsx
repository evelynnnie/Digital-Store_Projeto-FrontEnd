import Logo from '../Logo/Logo';
import SearchBar from './SearchBar';
import AuthLinks from './AuthLinks';
import CartIcon from './CartIcon';
import NavBar from './NavBar';

const COLORS = {
  white: '#FFFFFF',
  lightGray2: '#CCCCCC',
};

const Header = () => (
  <header style={{
    width: '100%',
    background: COLORS.white,
    borderBottom: `1px solid ${COLORS.lightGray2}`,
    boxSizing: 'border-box',
    padding: 0,
  }}>
    {/* Primeira linha */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 80,
      padding: '0 40px',
      gap: 24,
    }}>
      {/* Logo */}
      <div style={{ flex: '0 0 auto' }}>
        <Logo />
      </div>
      {/* Campo de busca */}
      <div style={{ flex: '1 1 600px', maxWidth: 600, margin: '0 32px' }}>
        <SearchBar />
      </div>
      {/* Cadastre-se, Entrar, Carrinho */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <AuthLinks />
        <CartIcon count={3}/>
      </div>
    </div>
    {/* Segunda linha: Navegação */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      borderTop: `1px solid ${COLORS.lightGray2}`,
      marginTop: 4,
    }}>
      <NavBar />
    </div>
  </header>
);

export default Header;