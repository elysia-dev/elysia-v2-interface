import { useWeb3React } from '@web3-react/core';
import injectedConnector from 'core/connectors/injectedConnector';
import Wallet from 'enums/Wallet';
import { setWalletConnect } from 'utils/connectWallet';
import metamask from 'assets/images/metamask@2x.png';
import Image from 'next/image';
import { SelectWalletModalContentButton } from '../';
import { activateInjectedProvider } from '.';
import { sendGAMetamask } from 'utils/ga';

type Props = {
  closeModal: () => void;
};
const MetamaskButton: React.FC<Props> = ({ closeModal }) => {
  const { activate } = useWeb3React();
  const walletImg = metamask;

  // coinbasewallet 과 다르게 isMetamask 체크만으로 providers 중 metamask provider가 존재하는지 알 수 있음
  const isMetaMaskInstalled = window.ethereum?.isMetaMask;
  const description = isMetaMaskInstalled ? 'MetaMask' : 'Install MetaMask';

  const handleClickButton = async () => {
    if (!isMetaMaskInstalled) {
      window.open('https://metamask.io/', '_blank');
      return;
    }
    activateInjectedProvider('MetaMask');
    activate(injectedConnector)
      .then(() => {
        setWalletConnect(Wallet.Metamask);
        closeModal();
        sendGAMetamask();
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
      <Image src={walletImg} alt={'metamask'} width={28} height={27} />
      <b>{description}</b>
    </SelectWalletModalContentButton>
  );
};
export default MetamaskButton;
