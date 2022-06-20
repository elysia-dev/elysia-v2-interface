import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NetworkError from 'assets/images/network_error.png';
import Image from 'next/image';
import { isChainId } from 'utils/isChainId';
import { useENS } from 'hooks/useENS';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import styled, { css, keyframes } from 'styled-components';
import TxStatus from 'enums/TxStatus';

type Props = {
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
};

enum WalletStatus {
  Disconnect = 'disconnect',
  WrongMainnet = 'wrongMainnet',
  Connected = 'connected',
  FAIL = 'FAIL',
  CONFIRM = 'CONFIRM',
  PENDING = 'PENDING',
}

const ConnectWalletButton = (props: Props) => {
  const { account, chainId } = useWeb3React();
  const { txStatus } = useContext(TxContext);
  const { t } = useTranslation();
  const { ensName, ensLoading } = useENS(account || '');
  const shortAddress = `${account?.substring(0, 5)}....${account?.substring(
    account.length - 4,
    account.length,
  )}`;

  return (
    <>
      <WalletButton
        status={
          !account && !props.isConnectWalletLoading
            ? WalletStatus.Disconnect
            : txStatus === TxStatus.FAIL
            ? WalletStatus.FAIL
            : txStatus === TxStatus.CONFIRM
            ? WalletStatus.CONFIRM
            : txStatus === TxStatus.PENDING
            ? WalletStatus.PENDING
            : chainId && ![1, 1337].includes(chainId)
            ? WalletStatus.WrongMainnet
            : WalletStatus.Connected
        }
        onClick={() => {
          props.modalVisible();
          googleGAEvent(GoogleGAAction.NavConnectWallet, GoogleGACategory.Nav);
        }}>
        {props.isConnectWalletLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton
              width={170}
              height={48}
              borderRadius={20}
              style={{ position: 'relative', left: -4 }}
            />
          </SkeletonTheme>
        ) : account ? (
          chainId && isChainId(chainId) ? (
            <>
              <Davatar
                size={25}
                address={account}
                generatedAvatarType="jazzicon"
              />
              <span>{ensLoading ? ensName || shortAddress : shortAddress}</span>
            </>
          ) : (
            <>
              <Image
                src={NetworkError}
                alt={'NetworkError'}
                width={20}
                height={20}
              />
              <span>Wrong Network</span>
            </>
          )
        ) : (
          <p>{t('navigation.wallet')}</p>
        )}
      </WalletButton>
    </>
  );
};

const Clip = keyframes`
   0%,
    100% {
      clip: rect(0px, 184px, 2px, 0px);
    }
    25% {
      clip: rect(0px, 2px, 60px, 0px);
    }
    50% {
      clip: rect(58px, 184px, 62px, 0px);
    }
    75% {
      clip: rect(0px, 184px, 60px, 181px);
    }
`;
const glowBoxShadow = keyframes`
  from {
    box-shadow: 0 0 2px #3679b5, 0 0 3px #3679b5, 0 0 4px #3679b5,
      0 0 5px #3679b5, 0 0 6px #3679b5, 0 0 7px #3679b5, 0 0 10px #3679b5;
  }
  to {
    box-shadow: 0 0 2px #ffffff44, 0 0 4px #ffffff44, 0 0 10px #ffffff44,
      0 0 14px #ffffff44, 0 0 17px #ffffff44, 0 0 19px #ffffff44,
      0 0 25px #ffffff44;
  }
`;

const WalletButton = styled.button<{ status?: WalletStatus }>`
  width: 171px;
  height: 46px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.status === WalletStatus.WrongMainnet
      ? '2px solid #d84d4d'
      : props.status === WalletStatus.FAIL
      ? '2px solid #ff1d1d'
      : props.status === WalletStatus.CONFIRM
      ? '2px solid #23eb1b'
      : '2px solid #000000'};
  background: ${(props) =>
    props.status === WalletStatus.WrongMainnet ? '#d84d4d' : '#000000'};
  border-radius: 23px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s ease;
  ${(props) =>
    props.status === WalletStatus.Disconnect &&
    css`
      animation: ${glowBoxShadow} 1.5s linear infinite alternate;
    `}
  ${(props) =>
    props.status === WalletStatus.PENDING &&
    css`
      border: 2px solid #f5f5f5;
      width: 170px;
      height: 48px;
      color: #3679b5;
      box-shadow: inset 0 0 0 1px rgba(#3679b5, 0.5);
      position: relative;
      &::before,
      &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        z-index: 2;
        margin: calc(-1 * 0.05 * 100%);
        box-shadow: inset 0 0 0 2px;
        animation: ${Clip} 2s linear infinite;
      }
      &::before {
        animation-delay: calc(2s * -0.5);
      }
    `}
  &:hover {
    border: 2px solid #3679b5;
  }
  @media (max-width: 920px) {
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 38px;
    margin-left: 10px;
  }
  > span {
    display: flex;
    margin-left: 7px;
    justify-items: center;
    align-items: center;
  }
`;

export default ConnectWalletButton;
