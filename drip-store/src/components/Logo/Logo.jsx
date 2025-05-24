import logo from '../../assets/images/logo-header.svg';

const Logo = ({ width = 253, height = 44, color = 'default' }) => (
  <img
    src={logo}
    alt="Digital Store"
    width={width}
    height={height}
    style={color === 'white' ? { filter: 'brightness(0) invert(1)' } : {}}
  />
);

export default Logo;