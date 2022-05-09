import { act, renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import envs from 'core/envs';
import useERC20Info from 'hooks/useERC20Info';

const account = '0xB0B02B984083dFF47A6CFD86Bc7E6DbeA2005dab';

jest.mock('hooks/useERC20', () => {
  const { ERC20Factory } = require('@elysia-dev/elyfi-v1-sdk');
  const { providers } = require('ethers');
  return () =>
    ERC20Factory.connect(
      '0x2781246fe707bb15cee3e5ea354e2154a2877b16',
      new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC) as any,
    );
});

jest.mock('@web3-react/core', () => {
  return {
    ...jest.requireActual('@web3-react/core'),
    useWeb3React: () => {
      return {
        account,
      };
    },
  };
});

describe('useERC20Info', () => {
  it('check balanceOf and network', async () => {
    let chainId = 0;
    let balalnce;
    let allowance;

    const { result } = renderHook(() =>
      useERC20Info(
        envs.token.elAddress,
        envs.staking.elStakingV2PoolAddress,
        false,
      ),
    );

    await act(async () => {
      const network = await result.current.contract.provider.getNetwork();
      chainId = network.chainId;
      balalnce = await result.current.contract.balanceOf(account);
      allowance = await result.current.contract.allowance(
        account,
        envs.staking.elStakingV2PoolAddress,
      );
      result.current.load(account);
    });

    expect(chainId).toEqual(1337);
    expect(result.current.balance).toEqual(balalnce);
    expect(result.current.allowance).toEqual(allowance);
  });
});
