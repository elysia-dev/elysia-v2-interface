import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useMediaQueryState = () => {
  const [mediaQueryState, setMediaQueryState] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });
  const [rendered, setRendered] = useState(false);
  const mobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:840px)',
  });
  const tablet = useMediaQuery({
    query: '(min-width:840px) and (max-width:1190px)',
  });
  const desktop = useMediaQuery({
    query: '(min-width:1190px)',
  });
  const setWindowQuery = () => {
    setMediaQueryState({
      mobile: mobile,
      tablet: tablet,
      desktop: desktop,
    });
  };

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', setWindowQuery);
      setWindowQuery();

      return () => window.removeEventListener('resize', setWindowQuery);
    }
  }, [mobile, tablet, desktop, rendered]);

  return mediaQueryState;
};

export default useMediaQueryState;
