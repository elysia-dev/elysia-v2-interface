import { useWeb3React } from '@web3-react/core';
import Wallet from 'enums/Wallet';
import { setWalletConnect } from 'utils/connectWallet';
import Image from 'next/image';
import { SelectWalletModalContentButton } from '.';
import okxButton from 'assets/images/okx.webp';
import okxConnector from 'core/connectors/okxConnector';

type Props = {
  closeModal: () => void;
};

const installOkxLink =
  'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge';

const OkxButton: React.FC<Props> = ({ closeModal }) => {
  const { activate } = useWeb3React();
  const walletImg = okxButton;

  const isOkxInstalled =
    window.okxwallet && typeof window.okxwallet === 'object';
  const description = isOkxInstalled ? 'OKX Wallet' : 'Install OKX Wallet';

  const handleClickButton = async () => {
    if (!isOkxInstalled) {
      window.open(installOkxLink, '_blank');
      return;
    }

    activate(okxConnector)
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
