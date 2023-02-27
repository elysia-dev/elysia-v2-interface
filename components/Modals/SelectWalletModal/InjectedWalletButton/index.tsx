import CoinbaseWalletButton from './CoinbaseWalletButton';
import MetamaskButton from './MetamaskButton';

type Props = {
  closeModal: () => void;
};

// MetaMask(MM), Coinbase Wallet(CB)
const InjectedWalletButton: React.FC<Props> = ({ closeModal }) => {
  // https://docs.cloud.coinbase.com/wallet-sdk/docs/injected-provider-guidance
  // const isBothInstalled = window.ethereum?.providers?.length > 0;
  // const isOnlyMMInstalled = !isBothInstalled && window.ethereum?.isMetaMask;
  // const isOnlyCBInstalled = !isBothInstalled && window.ethereum?.isCoinbaseWallet;

  return (
    <>
      <MetamaskButton closeModal={closeModal} />
      <CoinbaseWalletButton closeModal={closeModal} />
    </>
  );
};

export default InjectedWalletButton;
