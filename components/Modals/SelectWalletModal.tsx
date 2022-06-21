/* eslint-disable react-hooks/exhaustive-deps */
import { useWeb3React } from '@web3-react/core';
import injectedConnector from 'connectors/injectedConnector';
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
import Image from 'next/image';
import useIsMobile, { MediaQueryState } from 'hooks/useIsMobile';
import { GoogleAnalyticsEvent } from 'utils/gaEvent';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';

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
  const { mediaQueryState } = useIsMobile();

  const wallets = useMemo(() => {
    if (global?.ethereum) {
      return [
        mediaQueryState === MediaQueryState.Mobile
          ? { name: 'Browser Wallet', image: browserWallet }
          : { name: 'Metamask', image: metamask },
        { name: 'WalletConnect', image: walletconnect },
      ];
    } else {
      return [{ name: 'WalletConnect', image: walletconnect }];
    }
  }, [global]);

  const connectWallet = (wallet: string) => {
    let connector;
    if (
      wallet ===
      (mediaQueryState === MediaQueryState.Mobile
        ? Wallet.BrowserWallet
        : Wallet.Metamask)
    ) {
      GoogleAnalyticsEvent(
        GoogleAnalyticsAction.Metamask,
        GoogleAnalyticsCategory.Wallet,
      );
      connector = injectedConnector;
    } else {
      googleGAEvent(GoogleGAAction.WalletConnect, GoogleGACategory.Wallet);
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
          <section className="wallet_select_modal__content__container">
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
          </section>
        </div>
      </div>
    </>
  );
};

export default SelectWalletModal;
