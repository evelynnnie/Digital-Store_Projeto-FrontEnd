import { Link } from 'react-router-dom';

const COLORS = {
  darkGray: '#1F1F1F',
  darkGray2: '#474747',
  lightGray: '#8F8F8F',
};


const ProductCard = ({ id, image, name, price, priceDiscount }) => (
  <Link
    to={`/products/${id}`} 
    style={{ textDecoration: 'none', color: 'inherit' }} 
  >
    <div style={{
      width: 292, 
      background: '#fff',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      padding: 16,
      boxSizing: 'border-box',
      margin: 'auto', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', 
      height: '100%', 
    }}>
      <img
        src={image}
        alt={name}
        width={292} 
        height={321} 
        style={{ objectFit: 'cover', borderRadius: 8 }}
      />
      <div style={{ marginTop: 16 }}>
        <div style={{ color: COLORS.darkGray2, fontWeight: 500, fontSize: 16, marginBottom: 8, height: '3em', overflow: 'hidden' }}>
          {name} {}
        </div>
        <div>
          {priceDiscount ? (
            <>
              <span style={{
                color: COLORS.lightGray,
                fontSize: 20,
                textDecoration: 'line-through',
                marginRight: 8,
              }}>
                R$ {Number(price).toFixed(2)}
              </span>
              <span style={{
                color: COLORS.darkGray,
                fontSize: 24,
                fontWeight: 700,
              }}>
                R$ {Number(priceDiscount).toFixed(2)}
              </span>
            </>
          ) : (
            <span style={{
              color: COLORS.darkGray,
              fontSize: 24,
              fontWeight: 700,
            }}>
              R$ {Number(price).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default ProductCard;