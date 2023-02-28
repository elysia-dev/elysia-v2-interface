import { useWeb3React } from '@web3-react/core';
import Wallet from 'enums/Wallet';
import walletconnect from 'assets/images/walletconnect@2x.png';
import { setWalletConnect } from 'utils/connectWallet';
import Image from 'next/image';
import { SelectWalletModalContentButton } from '.';
import walletConnectConnector from 'utils/walletConnectProvider';
import { sendGAWalletConnect } from 'utils/ga';

type Props = {
  closeModal: () => void;
};
const WalletConnectButton: React.FC<Props> = ({ closeModal }) => {
  const walletConnectProvider = walletConnectConnector();

  const { activate } = useWeb3React();
  const walletImg = walletconnect;

  const description = 'WalletConnect';

  const handleClickButton = async () => {
    activate(walletConnectProvider)
      .then(() => {
        setWalletConnect(Wallet.WalletConnect);
        closeModal();
        sendGAWalletConnect();
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
      <Image src={walletImg} alt={'WalletConnect'} width={28} height={27} />
      <b>{description}</b>
    </SelectWalletModalContentButton>
  );
};
export default WalletConnectButton;
