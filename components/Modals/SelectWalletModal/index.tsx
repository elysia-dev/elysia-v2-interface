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
import Image from 'next/image';
import useMediaQueryState from 'hooks/useMediaQueryState';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';

type Props = {
  onClose: () => void;
};

interface WindowWithInjectedWallet extends Window {
  ethereum?: ethers.providers.Web3Provider;
}
const walletConnectProvider = walletConnectConnector();

export const SelectWalletModalContent = styled.section`
  padding: 25px;
  display: flex;
  flex-direction: column;
  @supports (gap: 25px) {
    gap: 25px;
  }
  @supports not (gap: 25px) {
    > button:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

export const SelectWalletModalContentButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 55px;
  border-radius: 55px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #000;
  @media (max-width: 460px) {
    height: 45px;
  }
  > b {
    padding-left: 10px;
    color: #fff;
    font-weight: bold;
    line-height: 55px;
    font-size: 1.2rem;
    @media (max-width: 460px) {
      line-height: 45px;
    }
    letter-spacing: 1px;
  }
`;

const SelectWalletModal = (props: Props) => {
  const { onClose } = props;
  const { activate } = useWeb3React();
  const [global, setGlobal] = useState<WindowWithInjectedWallet>();
  const { t } = useTranslation();
  const mediaQueryState = useMediaQueryState();
  const isMobile = mediaQueryState.mobile;

  const wallets = useMemo(() => {
    if (global?.ethereum) {
      return [
        isMobile
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
      (mediaQueryState.mobile ? Wallet.BrowserWallet : Wallet.Metamask)
    ) {
      gtag.event({
        action: GoogleAnalyticsAction.Metamask,
        category: GoogleAnalyticsCategory.Wallet,
        label: '',
      });
      connector = injectedConnector;
    } else {
      gtag.event({
        action: GoogleAnalyticsAction.WalletConnect,
        category: GoogleAnalyticsCategory.Wallet,
        label: '',
      });
      connector = walletConnectProvider;
    }
    activate(connector).then(() => {
      onClose();
      wallet === Wallet.Metamask && setWalletConnect(Wallet.Metamask);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setGlobal(window as WindowWithInjectedWallet);
    }
  }, [typeof window]);

  return (
    <>
      <ModalLayout title={t('modal.select_wallet')} onClose={() => onClose()}>
        <SelectWalletModalContent>
          {wallets.map((wallet, idx) => {
            return (
              <SelectWalletModalContentButton
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
                <b>{wallet.name}</b>
              </SelectWalletModalContentButton>
            );
          })}
        </SelectWalletModalContent>
      </ModalLayout>
    </>
  );
};

export default SelectWalletModal;
