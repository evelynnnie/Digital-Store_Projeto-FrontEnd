const FilterGroup = ({ title, inputType, options, onFilterChange, selectedValues }) => {
  const colors = {
    'dark-gray-2': '#474747',
    'light-gray-2': '#CCCCCC',
    'primary': '#C92071',
    'white': '#FFFFFF',
  };

  const containerStyle = {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: colors.white,
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  const titleStyle = {
    fontSize: '14px',
    color: colors['dark-gray-2'],
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const dividerStyle = {
    borderBottom: `1px solid ${colors['light-gray-2']}`,
    margin: '10px 0 15px 0',
  };

  const optionContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  const inputStyle = {
    width: '22px',
    height: '22px',
    marginRight: '10px',
    accentColor: colors.primary,
    cursor: 'pointer',
  };

  const labelStyle = {
    fontSize: '16px',
    color: colors['dark-gray-2'],
    cursor: 'pointer',
  };

  const handleChange = (event) => {
    if (onFilterChange) {
      onFilterChange(event.target.value); 
    }
  };

  return (
    <div style={containerStyle}>
      <h4 style={titleStyle}>{title}</h4>
      <div style={dividerStyle}></div>
      {options.map((option, index) => (
        <label key={index} style={optionContainerStyle}>
          <input
            type={inputType}
            name={title}
            value={option.value || option.text}
            style={inputStyle}
            onChange={handleChange} 
            checked={
              inputType === 'checkbox'
                ? selectedValues.includes(option.value || option.text)
                : selectedValues === (option.value || option.text)
            }
          />
          <span style={labelStyle}>{option.text}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterGroup;