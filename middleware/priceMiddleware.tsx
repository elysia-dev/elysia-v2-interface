import { BigNumber } from 'ethers';
import { useEffect, useRef, useState } from 'react';
import { Middleware, SWRHook } from 'swr';

const priceMiddleware: Middleware =
  (useSWRNext: SWRHook) => (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config);
    const dataRef = useRef<any>(null);
    const [priceLoading, setPriceLoading] = useState(true);
    const [price, setPrice] = useState<any>();

    useEffect(() => {
      try {
        if (swr.error) throw Error('error');
        if (swr.data !== undefined) {
          dataRef.current = swr.data;
          const priceData: any = swr.data;
          setPrice({
            ...price,
            elPrice: priceData.elysia.usd,
          });
        }
        setPriceLoading(false);
      } catch (error) {
        setPrice({
          elPrice: 0,
        });
        setPriceLoading(false);
      }
    }, [swr.data, swr.error]);

    const data = swr.data === undefined ? dataRef.current : price;

    return { ...swr, data, isValidating: priceLoading };
  };

export default priceMiddleware;
