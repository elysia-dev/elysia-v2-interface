import { useEffect, useState } from 'react';
import useSWR from 'swr';

import {
  bscReserveDataFetcher,
  ethReserveDataFetcher,
} from 'clients/ReserveSubgraph';
import {
  IAssetBond,
  initialReserveSubgraph,
  IReserveSubgraph,
} from 'types/reserveSubgraph';
import {
  bscReserveMiddleware,
  ethReserveMiddleware,
} from 'middleware/reservesMiddleware';

const useReserveData = (): {
  reserveState: IReserveSubgraph;
  getAssetBondsByNetwork: () => IAssetBond[];
  loading: boolean;
} => {
  const [reserveState, setReserveState] = useState<IReserveSubgraph>(
    initialReserveSubgraph,
  );
  const [loading, setLoading] = useState(true);
  const { data: bscReserveData, isValidating: bscLoading } = useSWR(
    'bscReserveData',
    bscReserveDataFetcher,
    {
      use: [bscReserveMiddleware],
    },
  );

  const { data: ethReserveData, isValidating: ethLoading } = useSWR(
    'ethReserveData',
    ethReserveDataFetcher,
    {
      use: [ethReserveMiddleware],
    },
  );

  const fetchSubgraph = async () => {
    if (!ethReserveData || !bscReserveData) return;
    setReserveState({
      reserves: [...bscReserveData, ...ethReserveData],
    });
    setLoading(ethLoading || bscLoading);
  };

  const getAssetBondsByNetwork = (): IAssetBond[] => {
    // const supportedTokens =
    //   MainnetData[network === MainnetType.BSCTest ? MainnetType.BSC : network]
    //     .supportedTokens;

    return reserveState.reserves.reduce((arr, reserve) => {
      return [...arr, ...reserve.assetBondTokens];
    }, [] as IAssetBond[]);
  };

  useEffect(() => {
    fetchSubgraph();
  }, [bscReserveData, ethReserveData]);

  return { reserveState, getAssetBondsByNetwork, loading };
};

export default useReserveData;
