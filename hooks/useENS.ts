import { useEffect, useState } from 'react';
import { ethers, providers } from 'ethers';

type ReturnType = { ensName: string | null; ensLoading: boolean };

export const useENS = (address: string | null | undefined): ReturnType => {
  const [ensName, setENSName] = useState<string | null>(null);
  const [ensLoading, setEnsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (address !== (undefined || null)) {
      setEnsLoading(true);
    }
  }, [address]);

  useEffect(() => {
    async function resolveENS() {
      try {
        if (address && ethers.utils.isAddress(address || '')) {
          const provider = new providers.InfuraProvider('homestead');
          const getEnsName = await provider.lookupAddress(address);
          if (getEnsName) setENSName(getEnsName);
        }
      } catch (e) {
        if (e.code === 'UNSUPPORTED_OPERATION') {
          return;
        }
        console.error(e);
      } finally {
        setEnsLoading(true);
      }
    }
    resolveENS();
  }, [address]);

  return { ensName, ensLoading };
};
