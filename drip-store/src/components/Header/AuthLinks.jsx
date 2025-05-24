import { Link } from 'react-router-dom';

const COLORS = {
  primary: '#C92071',
  darkGray2: '#474747',
  white: '#FFFFFF',
};

const AuthLinks = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <Link
      to="/register"
      style={{
        fontSize: 16,
        color: COLORS.darkGray2,
        textDecoration: 'underline',
        textUnderlineOffset: 2,
      }}
    >
      Cadastre-se
    </Link>
    <Link
      to="/login"
      style={{
        background: COLORS.primary,
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14,
        borderRadius: 4,
        width: 114,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
      }}
    >
      Entrar
    </Link>
  </div>
);

export default AuthLinks;