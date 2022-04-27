import { ERC20 } from '@elysia-dev/elyfi-v1-sdk';
import { useWeb3React } from '@web3-react/core';
import { tokenInfoFetcher } from 'clients/StakingFetcher';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { BigNumber, constants } from 'ethers';
import { useCallback, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import useERC20 from './useERC20';

interface IERC20Info {
  balance: BigNumber;
  allowance: BigNumber;
  loading: boolean;
  error: string | null;
  contract: ERC20;
}

const useERC20Info = (
  contractAddress: string,
  targetAddress: string,
  visible?: boolean,
): IERC20Info => {
  const { account } = useWeb3React();
  const contract = useERC20(contractAddress);
  const { txStatus } = useContext(TxContext);
  const [state, setState] = useState<{
    allowance: BigNumber;
    balance: BigNumber;
    loading: boolean;
    error: string | null;
  }>({
    allowance: constants.Zero,
    balance: constants.Zero,
    loading: true,
    error: null,
  });

  const { data, mutate } = useSWR([contract, account, targetAddress, 'erc20'], {
    fetcher: tokenInfoFetcher(),
  });

  useEffect(() => {
    if (txStatus === TxStatus.CONFIRM && account) {
      mutate();
    }
  }, [txStatus, account, data]);

  useEffect(() => {
    if (account) {
      if (!data) return;
      setState({
        ...state,
        loading: true,
      });
      const balance = data.balance;
      const allowance = data.allowance;
      setState({
        ...state,
        allowance,
        balance,
        loading: false,
      });
    } else {
      setState({
        ...state,
        allowance: constants.Zero,
        balance: constants.Zero,
        loading: false,
        error: null,
      });
    }
  }, [account, visible, data]);

  return {
    ...state,
    contract,
  };
};

export default useERC20Info;
