import { useWeb3React } from '@web3-react/core';
import injectedConnector, {
  activateInjectedProvider,
} from 'core/connectors/injectedConnector';
import Wallet from 'enums/Wallet';
import { setWalletConnect } from 'utils/connectWallet';
import CoinbaseSVG from 'assets/images/coinbase.svg';
import Image from 'next/image';
import { SelectWalletModalContentButton } from '../';

type Props = {
  closeModal: () => void;
};
const CoinbaseWalletButton: React.FC<Props> = ({ closeModal }) => {
  const { activate } = useWeb3React();

  const isCoinbasewalletInstalled =
    window.ethereum?.isCoinbaseWallet ||
    window.ethereum?.providers.find(
      ({ isCoinbaseWallet }: { isCoinbaseWallet: boolean }) => isCoinbaseWallet,
    );

  const description = isCoinbasewalletInstalled
    ? 'Coinbase Wallet'
    : 'Install Coinbase Wallet';

  const handleClickButton = async () => {
    if (!isCoinbasewalletInstalled) {
      window.open('https://www.coinbase.com/wallet/downloads', '_blank');
      return;
    }
    activateInjectedProvider(Wallet.CoinbaseWallet);
    activate(injectedConnector)
      .then(() => {
        setWalletConnect(Wallet.CoinbaseWallet);
        closeModal();
      })
      .catch(() => {
        console.error('Reject');
      });
  };

  return (
    <SelectWalletModalContentButton
      onClick={() => {
        handleClickButton();
      }}>
      <CoinbaseSVG width={28} height={27} />
      <b>{description}</b>
    </SelectWalletModalContentButton>
  );
};
export default CoinbaseWalletButton;
