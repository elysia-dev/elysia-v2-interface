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
} from 'core/types/reserveSubgraph';
import {
  bscReserveMiddleware,
  ethReserveMiddleware,
} from 'middleware/reservesMiddleware';
import ethData from 'utils/ethReserveData.json';

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
    const tempData = ethData.data.reserves.map((reserve: any) => {
      return {
        ...reserve,
        assetBondTokens: ethData.data.assetBondTokens.filter(
          (ab: any) => ab.reserve.id === reserve.id,
        ),
      };
    });
    if (!bscReserveData) return;
    setReserveState({
      reserves: [...bscReserveData, ...(ethReserveData || tempData)],
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
