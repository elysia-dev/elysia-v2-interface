import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import { providers } from 'ethers';
import { ERC20, ERC20Factory } from '@elysia-dev/elyfi-v1-sdk';

const useERC20 = (address: string): ERC20 => {
  const { library } = useWeb3React();

  const contract = useMemo(() => {
    if (!library) {
      return ERC20Factory.connect(
        address,
        new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC) as any,
      );
    }
    return ERC20Factory.connect(address, library.getSigner());
  }, [address, library]);

  return contract;
};

export default useERC20;
