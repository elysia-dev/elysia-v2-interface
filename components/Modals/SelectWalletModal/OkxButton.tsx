import Wallet from 'enums/Wallet';
import { setWalletConnect } from 'utils/connectWallet';
import Image from 'next/image';
import { SelectWalletModalContentButton } from '.';
import okxButton from 'assets/images/okx.webp';
import { okxWallet } from 'core/connectors/okxConnector';

type Props = {
  closeModal: () => void;
};

const installOkxLink = 'https://www.okx.com/web3';

const OkxButton: React.FC<Props> = ({ closeModal }) => {
  const walletImg = okxButton;

  const isOkxInstalled =
    window.okxwallet && typeof window.okxwallet === 'object';
  const description = isOkxInstalled ? 'OKX Wallet' : 'Install OKX Wallet';

  const handleClickButton = async () => {
    if (!isOkxInstalled) {
      window.open(installOkxLink, '_blank');
      return;
    }

    okxWallet
      .activate()
      .then(() => {
        setWalletConnect(Wallet.Okx);
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
      <Image src={walletImg} alt={'okx'} width={28} height={27} />
      <b>{description}</b>
    </SelectWalletModalContentButton>
  );
};
export default OkxButton;
