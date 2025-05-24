import Logo from '../Logo/Logo';
import InfoSection from './InfoSection';
import facebookIcon from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';

const COLORS = {
  darkGray: '#1F1F1F',
  white: '#FFFFFF',
  lightGray2: '#CCCCCC',
};

const infoSections = [
  {
    title: 'Informação',
    informations: [
      { text: 'Sobre Drip Store', link: '#' },
      { text: 'Segurança', link: '#' },
      { text: 'Wishlist', link: '#' },
      { text: 'Blog', link: '#' },
      { text: 'Trabalhe conosco', link: '#' },
      { text: 'Meus Pedidos', link: '#' },
    ],
  },
  {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '#' },
      { text: 'Calças', link: '#' },
      { text: 'Bonés', link: '#' },
      { text: 'Headphones', link: '#' },
      { text: 'Tênis', link: '#' },
    ],
  },
  {
    title: 'Contato',
    informations: [
      { text: 'Av. Santos Dumont, 1510 – 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
      { text: '(85) 3051-3411' },
    ],
  },
];

const Footer = () => (
  <footer style={{ background: COLORS.darkGray, color: COLORS.white, padding: '48px 0 24px 0' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 40px',
      flexWrap: 'wrap',
      gap: 40,
    }}>
      <div style={{ maxWidth: 300 }}>
        <Logo color="white" />
        <p style={{ margin: '24px 0 16px 0', color: COLORS.white }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" width={24} height={24} />
          </a>
        </div>
      </div>
      {infoSections.map((section, idx) => (
        <InfoSection key={idx} title={section.title} informations={section.informations} />
      ))}
    </div>
    <hr style={{ borderColor: COLORS.lightGray2, margin: '32px 0 16px 0' }} />
    <p style={{ textAlign: 'center', color: COLORS.white, fontSize: 14 }}>
      © 2024 Digital Store
    </p>
  </footer>
);

export default Footer;