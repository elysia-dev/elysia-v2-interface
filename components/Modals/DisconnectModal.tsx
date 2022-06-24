import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import { useTranslation } from 'react-i18next';
import envs from 'envs';
import CopyIcon from 'assets/images/modals/copy.svg';
import HyperRefIcon from 'assets/images/modals/hyper_ref.svg';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';

type Props = {
  onClose: () => void;
};

const DisconnectModal = (props: Props) => {
  const { onClose } = props;
  const { deactivate, account } = useWeb3React();
  const { t } = useTranslation();

  const AddressCopy = (data: string) => {
    if (!document.queryCommandSupported('copy')) {
      return alert('This browser does not support the copy function.');
    }
    const area = document.createElement('textarea');
    area.value = data;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    alert('Copied!!');
  };
  const DisconnectModalWrapper = styled.div`
    margin: 20px 5%;
  `;
  const UserContent = styled.section`
    border: 1px solid #505050;
    border-radius: 5px;
  `;

  const UserInfo = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 90px;
    border-bottom: 1px solid #505050;
    @media (max-width: 514px) {
      padding: 10px;
    }
    > section {
      line-height: 1.5rem;
      > b {
        font-size: 0.9375rem;
        color: #838383;
        letter-spacing: 0.6px;
      }
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          @media (max-width: 460px) {
            width: 15px !important;
            height: 15px !important;
          }
        }
        > span {
          margin-left: 8px;
          font-weight: bold;
          font-size: 0.9375rem;
          color: #fff;
          @media (max-width: 460px) {
            margin-left: 5px;
          }
        }
      }
    }
    > button {
      cursor: pointer;
      width: 139px;
      @media (max-width: 460px) {
        width: 100px;
      }
      height: 37px;
      border: 1px solid #888888;
      background-color: #505050;
      border-radius: 37px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9375rem;
      font-weight: normal;
      color: #fff;
      transition: 0.5s all ease;
      &:hover {
        background-color: #888888;
      }
    }
  `;
  const UserBottomButton = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    > button,
    > a {
      cursor: pointer;
      width: 50%;
      height: 100%;
      font-size: 0.9375rem;
      color: #fff;
      font-weight: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s all ease;
      > svg {
        margin-right: 7px;
      }
      &:hover {
        background-color: #505050;
      }
    }
    > button {
      border-right: 1px solid #505050;
    }
  `;
  const RecentTx = styled.section`
    > p {
      margin-top: 20px;
      font-size: 0.9375rem;
      color: #fff;
    }
    > section {
      color: #888888;
      border: 1px solid #505050;
      border-radius: 5px;
      height: 45px;
      display: flex;
      align-items: center;
      margin-top: 7px;
      padding: 0px 10px 0px 20px;
    }
  `;

  return (
    <ModalLayout title={t('modal.userInfo.0')} onClose={() => onClose()}>
      <DisconnectModalWrapper>
        <UserContent>
          <UserInfo>
            <section>
              <b>Ethereum</b>
              <div>
                {account && (
                  <Davatar
                    size={20}
                    address={account}
                    generatedAvatarType="jazzicon"
                  />
                )}
                <span>
                  {account?.substring(0, 8)}....
                  {account?.substring(account.length - 6, account.length)}
                </span>
              </div>
            </section>
            <button
              onClick={() => {
                deactivate();
                window.sessionStorage.removeItem('@connect');
                onClose();
              }}>
              {t('modal.userInfo.1')}
            </button>
          </UserInfo>
          <UserBottomButton>
            <button onClick={() => AddressCopy(account || '')}>
              <CopyIcon />
              {t('modal.userInfo.2')}
            </button>
            <a
              href={`${envs.externalApiEndpoint.etherscanURI}/address/${account}`}
              rel="noopener noreferrer"
              target="_blank">
              <HyperRefIcon />
              {t('modal.userInfo.3')}
            </a>
          </UserBottomButton>
        </UserContent>
        <RecentTx>
          <p>{t('modal.userInfo.4')}</p>
          <section>
            <p>{t('modal.userInfo.5')}</p>
          </section>
        </RecentTx>
      </DisconnectModalWrapper>
    </ModalLayout>
  );
};

export default DisconnectModal;
