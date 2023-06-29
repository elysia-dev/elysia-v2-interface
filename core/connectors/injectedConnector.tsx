// import { InjectedConnector } from '@web3-react/injected-connector';
import Wallet from 'enums/Wallet';

// https://github.com/Uniswap/web3-react/issues/300#issuecomment-995170556
// Injected wallet이 여러개인 경우 명시적으로 하나를 선택해야 한다.
export const activateInjectedProvider = (
  providerName: Wallet.Metamask | Wallet.CoinbaseWallet,
): void => {
  const { ethereum } = window;

  if (!ethereum?.providers) {
    return undefined;
  }

  let provider;
  switch (providerName) {
    case Wallet.CoinbaseWallet:
      provider = ethereum.providers.find(
        ({ isCoinbaseWallet }: { isCoinbaseWallet: boolean }) =>
          isCoinbaseWallet,
      );
      break;
    case Wallet.Metamask:
      provider = ethereum.providers.find(
        ({ isMetaMask }: { isMetaMask: boolean }) => isMetaMask,
      );
      break;
    default:
      provider = null;
  }

  if (provider) {
    ethereum?.setSelectedProvider?.(provider);
  }
};

// const injectedConnector = new InjectedConnector({
//   // supportedChainIds: [1, 3, 4, 5],
// });

// export default injectedConnector;
