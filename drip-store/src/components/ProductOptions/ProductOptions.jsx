import { useState } from 'react';

const COLORS = {
  'dark-gray': '#1F1F1F',
  'dark-gray-2': '#474747',
  'light-gray-2': '#CCCCCC',
  'primary': '#C92071',
};

const ProductOptions = ({ options, type, shape, radius }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const optionBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: `1px solid ${COLORS['light-gray-2']}`,
    transition: 'border 0.2s ease-in-out',
    boxSizing: 'border-box', 
  };

  const selectedBorderStyle = {
    border: `2px solid ${COLORS.primary}`, 
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {options.map((option, index) => {
        const isSelected = selectedOption === option;

        let optionStyle = { ...optionBaseStyle };
        let contentStyle = {}; 

        if (shape === 'square') {
          optionStyle = {
            ...optionStyle,
            width: 'auto', 
            minWidth: '46px', 
            height: '46px',
            borderRadius: radius || '0px', 
            padding: type === 'text' ? '0 12px' : '0', 
          };
          if (type === 'color') {
            optionStyle.backgroundColor = option; 
          }
        } else if (shape === 'circle') {
          optionStyle = {
            ...optionStyle,
            width: '31px',
            height: '31px',
            borderRadius: '50%', 
          };
          if (type === 'color') {
            optionStyle.backgroundColor = option; 
          }
        }

        
        if (isSelected) {
          optionStyle = { ...optionStyle, ...selectedBorderStyle };
        }

        if (type === 'text') {
          contentStyle = {
            fontSize: '24px',
            color: COLORS['dark-gray-2'],
            fontWeight: 'normal', 
            whiteSpace: 'nowrap', 
          };
        }

        return (
          <div
            key={index} 
            style={optionStyle}
            onClick={() => handleOptionClick(option)}
          >
            {type === 'text' && <span style={contentStyle}>{option}</span>}
            {}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;