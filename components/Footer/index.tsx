import { useMediaQuery } from 'react-responsive';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Footer = () => {
  const isMobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:768px)',
  });

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Footer;
