import { ERC20 } from '@elysia-dev/contract-typechain';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { BigNumber, constants } from 'ethers';
import { useCallback, useContext, useEffect, useState } from 'react';
import useERC20 from './useERC20';

interface IERC20Info {
  balance: BigNumber;
  allowance: BigNumber;
  loading: boolean;
  error: string | null;
  refetch: () => void;
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

  const load = useCallback(
    async (account: string) => {
      try {
        setState({
          ...state,
          loading: true,
        });
        const balance = await contract.balanceOf(account);
        const allowance = await contract.allowance(account, targetAddress);
        setState({
          ...state,
          allowance,
          balance,
          loading: false,
        });
      } catch (error) {
        setState({
          ...state,
          allowance: constants.Zero,
          balance: constants.Zero,
          loading: false,
          error: null,
        });
      }
    },
    [contract, targetAddress, state],
  );

  useEffect(() => {
    if (txStatus === TxStatus.CONFIRM && account) {
      load(account);
    }
  }, [txStatus, account]);

  useEffect(() => {
    if (account) {
      load(account);
    } else {
      setState({
        ...state,
        allowance: constants.Zero,
        balance: constants.Zero,
        loading: false,
        error: null,
      });
    }
  }, [account, targetAddress, visible]);

  return {
    ...state,
    refetch: () => {
      account && load(account);
    },
    contract,
  };
};

export default useERC20Info;
