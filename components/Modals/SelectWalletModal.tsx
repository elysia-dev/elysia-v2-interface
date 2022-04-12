/* eslint-disable react-hooks/exhaustive-deps */
import { useWeb3React } from '@web3-react/core';
import injectedConnector from 'core/connectors/injectedConnector';
import Wallet from 'enums/Wallet';
import { ethers } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setWalletConnect } from 'utils/connectWallet';
import walletConnectConnector from 'utils/walletConnectProvider';
import metamask from 'assets/images/metamask@2x.png';
import walletconnect from 'assets/images/walletconnect@2x.png';
import browserWallet from 'assets/images/browserWallet@2x.png';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import Image from 'next/image';

type Props = {
  onClose: () => void;
};

interface WindowWithEthereum extends Window {
  ethereum?: ethers.providers.Web3Provider;
}
const walletConnectProvider = walletConnectConnector();

const SelectWalletModal = (props: Props) => {
  const { onClose } = props;
  const { activate } = useWeb3React();
  const [global, setGlobal] = useState<WindowWithEthereum>();
  const { t } = useTranslation();

  const wallets = useMemo(() => {
    if (global?.ethereum) {
      return [
        { name: 'Metamask', image: metamask },
        { name: 'WalletConnect', image: walletconnect },
      ];
    } else {
      return [{ name: 'WalletConnect', image: walletconnect }];
    }
  }, [global]);

  const connectWallet = (wallet: string) => {
    let connector;
    if (wallet === Wallet.Metamask) {
      connector = injectedConnector;
    } else {
      connector = walletConnectProvider;
    }
    activate(connector).then(() => {
      onClose();
      wallet === Wallet.Metamask && setWalletConnect(Wallet.Metamask);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setGlobal(window as WindowWithEthereum);
    }
  }, [typeof window]);

  return (
    <>
      <div className="wallet_select_modal">
        <div className="wallet_select_modal__content">
          <div className="wallet_select_modal__content__header">
            <div>{t('modal.select_wallet')}</div>
            <CloseButton onClose={() => onClose()} />
          </div>
          <div className="wallet_select_modal__content__line" />
          {wallets.map((wallet, idx) => {
            return (
              <div
                className={`wallet_select_modal__content__wallet_btn ${wallet.name}`}
                key={idx}
                onClick={() => {
                  connectWallet(wallet.name);
                }}>
                <Image
                  src={wallet.image}
                  alt={wallet.name}
                  width={28}
                  height={27}
                />
                <div>{wallet.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectWalletModal;