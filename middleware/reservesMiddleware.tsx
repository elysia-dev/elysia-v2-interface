import { useEffect, useRef, useState } from 'react';
import { Middleware, SWRHook } from 'swr';
import initReserveData from 'utils/initReserveData';

export const bscReserveMiddleware: Middleware =
  (useSWRNext: SWRHook) => (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config);
    const dataRef = useRef<any>(null);
    const [reserveLoading, setReserveLoading] = useState(true);
    const [reserveData, setReserveData] = useState([initReserveData]);

    useEffect(() => {
      try {
        if (swr.data !== undefined) {
          dataRef.current = swr.data;
          const data: any = swr.data;
          setReserveData(
            data.reserves.map((reserve: any) => {
              return {
                ...reserve,
                assetBondTokens: data.assetBondTokens.filter(
                  (ab: any) => ab.reserve.id === reserve.id,
                ),
              };
            }),
          );
        }
        setReserveLoading(false);
      } catch (error) {
        setReserveLoading(false);
      }
    }, [swr.data]);

    const data = swr.data === undefined ? dataRef.current : reserveData;

    return { ...swr, data, isValidating: reserveLoading };
  };

export const ethReserveMiddleware: Middleware =
  (useSWRNext: SWRHook) => (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config);
    const dataRef = useRef<any>(null);
    const [reserveLoading, setReserveLoading] = useState(true);
    const [reserveData, setReserveData] = useState([initReserveData]);

    useEffect(() => {
      try {
        if (swr.data !== undefined) {
          dataRef.current = swr.data;
          const data: any = swr.data;
          setReserveData(
            data.reserves.map((reserve: any) => {
              return {
                ...reserve,
                assetBondTokens: data.assetBondTokens.filter(
                  (ab: any) => ab.reserve.id === reserve.id,
                ),
              };
            }),
          );
        }
        setReserveLoading(false);
      } catch (error) {
        setReserveLoading(false);
      }
    }, [swr.data]);

    const data = swr.data === undefined ? dataRef.current : reserveData;

    return { ...swr, data, isValidating: reserveLoading };
  };
