import { IAssetBond } from 'types/reserveSubgraph';
import { useCallback, useEffect, useState } from 'react';

const useResizeBrowser = () => {
  const [browserHeight, setBrowserHeight] = useState(0);

  const setResize = useCallback(() => {
    if (typeof document === undefined || typeof window === undefined) return;
    if (window.innerHeight > document.body.clientHeight) {
      const sub = window.innerHeight - document.body.clientHeight;
      setBrowserHeight(document.body.clientHeight + sub);
      return;
    }
    setBrowserHeight(document.body.clientHeight);
  }, []);

  useEffect(() => {
    setResize();
    window.addEventListener('resize', () => {
      setResize();
    });

    return () => {
      window.removeEventListener('resize', () => {
        setResize();
      });
    };
  }, [setResize]);

  return { browserHeight, setResize };
};

export default useResizeBrowser;
