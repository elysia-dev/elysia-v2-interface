import CoinbaseWalletButton from './CoinbaseWalletButton';
import MetamaskButton from './MetamaskButton';

type Props = {
  closeModal: () => void;
};

// https://github.com/Uniswap/web3-react/issues/300#issuecomment-995170556
export const activateInjectedProvider = (
  providerName: 'MetaMask' | 'CoinBase',
) => {
  const { ethereum } = window;

  if (!ethereum?.providers) {
    return undefined;
  }

  let provider;
  switch (providerName) {
    case 'CoinBase':
      provider = ethereum.providers.find(
        ({ isCoinbaseWallet }: { isCoinbaseWallet: boolean }) =>
          isCoinbaseWallet,
      );
      break;
    case 'MetaMask':
      provider = ethereum.providers.find(
        ({ isMetaMask }: { isMetaMask: boolean }) => isMetaMask,
      );
      break;
  }

  if (provider) {
    ethereum?.setSelectedProvider?.(provider);
  }
};

// MetaMask(MM), Coinbase Wallet(CB)
const InjectedWalletButton: React.FC<Props> = ({ closeModal }) => {
  // https://docs.cloud.coinbase.com/wallet-sdk/docs/injected-provider-guidance
  // const isBothInstalled = window.ethereum?.providers?.length > 0;
  // const isOnlyMMInstalled = !isBothInstalled && window.ethereum?.isMetaMask;
  // const isOnlyCBInstalled = !isBothInstalled && window.ethereum?.isCoinbaseWallet;

  return (
    <>
      <CoinbaseWalletButton closeModal={closeModal} />
      <MetamaskButton closeModal={closeModal} />
    </>
  );
};

export default InjectedWalletButton;
