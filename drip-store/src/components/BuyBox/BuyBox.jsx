import StarIcon from '../../assets/images/star-icon.svg'; 

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

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children, 
}) => {
  return (
    <div style={{
      width: '400px', 
      backgroundColor: COLORS.white,
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px', 
      boxSizing: 'border-box',
    }}>
      {/* Nome do Produto */}
      <h1 style={{
        fontSize: '32px',
        color: COLORS['dark-gray'],
        margin: '0',
        lineHeight: '1.2',
      }}>
        {name}
      </h1>

      {/* Referência do Produto */}
      {reference && (
        <p style={{
          fontSize: '12px',
          color: COLORS['dark-gray-3'],
          margin: '0',
        }}>
          SKU: {reference}
        </p>
      )}

      {/* Estrelas e Avaliações */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {stars && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: COLORS.warning,
            borderRadius: '4px',
            padding: '4px 8px',
            gap: '4px',
          }}>
            <span style={{
              fontSize: '14px',
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
              {Number(stars).toFixed(1)}
            </span>
            <img src={StarIcon} alt="Estrela" style={{ width: '14px', height: '14px' }} />
          </div>
        )}
        {rating && (
          <span style={{
            fontSize: '14px',
            color: COLORS['light-gray'],
          }}>
            ({rating} Avaliações)
          </span>
        )}
      </div>

      {/* Preço e Desconto */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
        {priceDiscount ? (
          <>
            <span style={{
              fontSize: '16px',
              color: COLORS['light-gray-2'],
              textDecoration: 'line-through',
              alignSelf: 'center', 
            }}>
              R$ {Number(price).toFixed(2)}
            </span>
            <span style={{
              fontSize: '32px',
              color: COLORS['dark-gray-2'],
              fontWeight: 700,
            }}>
              R$ {Number(priceDiscount).toFixed(2)}
            </span>
          </>
        ) : (
          <span style={{
            fontSize: '32px',
            color: COLORS['dark-gray-2'],
            fontWeight: 700,
          }}>
            R$ {Number(price).toFixed(2)}
          </span>
        )}
      </div>

      {/* Descrição do Produto */}
      {description && (
        <p style={{
          fontSize: '14px',
          color: COLORS['dark-gray-2'],
          margin: '0',
          lineHeight: '1.5',
        }}>
          {description}
        </p>
      )}

      {/* Placeholder para informações de Frete (*/}
      {/* <div style={{ fontSize: '14px', color: COLORS['dark-gray-2'] }}>
        Calcular frete: <input type="text" placeholder="Digite seu CEP" />
      </div> */}

      {/* Elementos filhos  */}
      {children}

      {/* Botão COMPRAR */}
      <button style={{
        backgroundColor: COLORS.primary, 
        color: COLORS.white,
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '16px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '24px', 
        width: '100%',
        boxSizing: 'border-box',
        transition: 'background-color 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a31a5b'} 
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;