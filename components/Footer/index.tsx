import useIsMobile from 'hooks/useIsMobile';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Footer = () => {
  const isMobile = useIsMobile();

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Footer;
