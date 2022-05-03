import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const mobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:768px)',
  });
  const desktop = useMediaQuery({
    query: '(min-width:769px) and (max-width:1299px)',
  });
  const tablet = useMediaQuery({
    query: '(min-width:0px) and (max-width:959px)',
  });

  useEffect(() => {
    setIsMobile(mobile);
    setIsDesktop(desktop);
    setIsTablet(tablet);
  }, [mobile, desktop, tablet]);

  return { isMobile, isDesktop, isTablet };
};

export default useIsMobile;
