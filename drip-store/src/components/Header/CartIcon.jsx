import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = ({ count = 2 }) => (
  <div style={{ position: 'relative', marginLeft: 24 }}>
    <FiShoppingCart size={28} color="#C92071" />
    {count > 0 && (
      <span
        style={{
          position: 'absolute',
          top: -6,
          right: -10,
          background: '#C92071',
          color: '#fff',
          borderRadius: '50%',
          width: 18,
          height: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 'bold',
          border: '2px solid #fff',
          boxSizing: 'border-box',
        }}
      >
        {count}
      </span>
    )}
  </div>
);

export default CartIcon;