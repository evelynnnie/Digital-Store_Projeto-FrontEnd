import { useState } from 'react';
import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

const COLORS = {
  primary: '#C92071',
  lightGray2: '#CCCCCC',
};

const Gallery = ({
  images = [],
  className = '',
  width = 1440,
  height = 681,
  radius = '8px',
  showThumbs,
}) => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null); 
  const [direction, setDirection] = useState(0); 

  const slideTo = (idx) => {
    if (idx === current || idx < 0 || idx >= images.length) return;
    setDirection(idx > current ? 1 : -1);
    setNext(idx);
    setTimeout(() => {
      setCurrent(idx);
      setNext(null);
    }, 350); 
  };

  const goPrev = () => slideTo(current - 1);
  const goNext = () => slideTo(current + 1);

  const renderImages = () => {
    if (next === null) {
      return (
        <img
          key={current}
          src={images[current]?.src}
          alt={`Imagem ${current + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius,
            position: 'absolute',
            left: 0,
            top: 0,
            transition: 'none',
            zIndex: 2,
          }}
        />
      );
    }
    
    return (
      <>
        <img
          key={current}
          src={images[current]?.src}
          alt={`Imagem ${current + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius,
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 2,
            transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)',
            transform: `translateX(${next !== null ? (direction === 1 ? '-100%' : '100%') : '0%'})`,
          }}
        />
        <img
          key={next}
          src={images[next]?.src}
          alt={`Imagem ${next + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius,
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 3,
            transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)',
            transform: `translateX(${direction === 1 ? '0%' : '0%'}) translateX(${direction === 1 ? '100%' : '-100%'})`,
            animation: next !== null
              ? `${direction === 1 ? 'slideInFromRight' : 'slideInFromLeft'} 0.35s forwards`
              : 'none',
          }}
        />
        <style>
          {`
            @keyframes slideInFromRight {
              from { transform: translateX(100%); }
              to { transform: translateX(0%); }
            }
            @keyframes slideInFromLeft {
              from { transform: translateX(-100%); }
              to { transform: translateX(0%); }
            }
          `}
        </style>
      </>
    );
  };

  return (
    <div className={className} style={{ width, margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height,
          borderRadius: radius,
          overflow: 'hidden',
          background: '#F5F5F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Seta esquerda */}
        <button
          onClick={goPrev}
          disabled={current === 0 || next !== null}
          style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: current === 0 || next !== null ? 'not-allowed' : 'pointer',
            opacity: current === 0 ? 0.3 : 1,
            zIndex: 4,
          }}
          aria-label="Anterior"
        >
          <img src={arrowLeft} alt="Anterior" width={32} />
        </button>
        {/* Imagem principal com animação */}
        <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
          {renderImages()}
        </div>
        {/* Seta direita */}
        <button
          onClick={goNext}
          disabled={current === images.length - 1 || next !== null}
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: current === images.length - 1 || next !== null ? 'not-allowed' : 'pointer',
            opacity: current === images.length - 1 ? 0.3 : 1,
            zIndex: 4,
          }}
          aria-label="Próxima"
        >
          <img src={arrowRight} alt="Próxima" width={32} />
        </button>
      </div>
      {/* Thumbnails */}
      {showThumbs && (
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 16,
            justifyContent: 'center',
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Miniatura ${idx + 1}`}
              width={117}
              height={95}
              onClick={() => slideTo(idx)}
              style={{
                borderRadius: radius,
                border: idx === current ? `2px solid ${COLORS.primary}` : `2px solid transparent`,
                cursor: idx === current || next !== null ? 'default' : 'pointer',
                objectFit: 'cover',
                boxSizing: 'border-box',
                transition: 'border 0.2s',
                opacity: img.src ? 1 : 0.3,
                background: '#F5F5F5',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;