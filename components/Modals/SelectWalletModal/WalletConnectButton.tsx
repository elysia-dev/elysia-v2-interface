import Wallet from 'enums/Wallet';
import walletconnect from 'assets/images/walletconnect@2x.png';
import { setWalletConnect } from 'utils/connectWallet';
import Image from 'next/image';
import { SelectWalletModalContentButton } from '.';
import { sendGAWalletConnect } from 'utils/ga';
import { walletConnect } from 'core/connectors/walletConnectConnectorFactory';

type Props = {
  closeModal: () => void;
};
const WalletConnectButton: React.FC<Props> = ({ closeModal }) => {
  const walletImg = walletconnect;

  const description = 'WalletConnect';

  const handleClickButton = async () => {
    walletConnect
      .activate()
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
