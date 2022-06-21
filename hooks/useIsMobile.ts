import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export enum MediaQueryState {
  Mobile,
  Tablet,
  Desktop,
}

const useIsMobile = () => {
  const [currentState, setCurrentState] = useState<MediaQueryState>(
    MediaQueryState.Desktop,
  );
  const [isLoading, setLoading] = useState(true);
  const mobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:840px)',
  });
  const tablet = useMediaQuery({
    query: '(min-width:840px) and (max-width:1190px)',
  });
  const desktop = useMediaQuery({
    query: '(min-width:1190px)',
  });

  useEffect(() => {
    setCurrentState(
      desktop
        ? MediaQueryState.Desktop
        : tablet
        ? MediaQueryState.Tablet
        : MediaQueryState.Mobile,
    );
    setLoading(false);
  }, [mobile, desktop, tablet, isLoading]);

  return { mediaQueryState: currentState, isLoading };
};

export default useIsMobile;
