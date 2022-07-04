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
import Image from 'next/image';
import useIsMobile from 'hooks/useIsMobile';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

type Props = {
  onClose: () => void;
  connectWallet?: (walletName: Wallet) => void;
};

const SelectWalletModal = (props: Props) => {
  const { onClose, connectWallet } = props;
  const { t } = useTranslation();
  const { isMobile } = useIsMobile();

  const wallets = useMemo(() => {
    return [
      isMobile
        ? { name: 'Browser Wallet', image: browserWallet }
        : { name: 'Metamask', image: metamask },
      { name: 'WalletConnect', image: walletconnect },
    ];
  }, []);

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
                    if (
                      wallet.name ===
                      (isMobile ? Wallet.BrowserWallet : Wallet.Metamask)
                    ) {
                      googleGAEvent(
                        GoogleGAAction.Metamask,
                        GoogleGACategory.Wallet,
                      );

                      connectWallet && connectWallet(wallet.name);
                    }
                    if (wallet.name === Wallet.WalletConnect) {
                      googleGAEvent(
                        GoogleGAAction.WalletConnect,
                        GoogleGACategory.Wallet,
                      );
                      connectWallet && connectWallet(wallet.name);
                    }
                    onClose();
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
