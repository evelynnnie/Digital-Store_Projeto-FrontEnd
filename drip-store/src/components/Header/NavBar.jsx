import { NavLink } from 'react-router-dom';


const COLORS = {
  primary: '#C92071',
  darkGray2: '#474747',
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Produtos' },
  { to: '/categories', label: 'Categorias' },
  { to: '/orders', label: 'Meus Pedidos' },
];

const NavBar = () => (
  <nav>
    <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
      {navItems.map(item => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            style={({ isActive }) => ({
              color: isActive ? COLORS.primary : COLORS.darkGray2,
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? `2px solid ${COLORS.primary}` : '2px solid transparent',
              paddingBottom: 4,
              textDecoration: 'none',
              fontSize: 16,
            })}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;