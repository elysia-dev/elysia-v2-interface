import useERC20Info from 'hooks/useERC20Info';
import { useCallback, useContext, useEffect, useState } from 'react';
import envs from 'envs';
import { utils } from 'ethers';
import useStaking from 'hooks/useV2Staking';
import ElysiaToken from 'assets/images/elysia_token.png';
import StakingBody from './StakingBody';
import LoadingIndicator from './LoadingIndicator';
import IncreateAllowanceModal from './IncreateAllowanceModal';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import useV2StakedInfo from 'hooks/useV2StakedInfo';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';

type Props = {
  onClose: () => void;
};

const SliderToggle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #505050;
  font-weight: bold;
  font-size: 0.9375rem;

  div {
    cursor: pointer;
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'SpoqaHanSansNeo';
    z-index: 2;
    font-size: 1.2rem;
    letter-spacing: 0.7px;
  }
`;

const SliderToggleBackground = styled.section`
  display: flex;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  background-color: #2b2b2b;
`;

const SliderToggleButton = styled.section<{ stakingMode?: boolean }>`
  position: absolute;
  width: 232px;
  height: 38px;
  background-color: #000000;
  border-radius: 10px;
  margin-top: 6px;
  transition: left 0.4s ease;
  left: 4px;
  will-change: left;
  left: ${(props) => (props.stakingMode ? '4px' : 'calc(50% + 8px)')};
  transition: left 0.4s ease;
  mix-blend-mode: darken;
  z-index: 1;
  @media (max-width: 500px) {
    width: 40vw;
  }
`;

const StakingModal = (props: Props) => {
  const { onClose } = props;
  const { balance, allowance, loading } = useERC20Info(
    envs.token.elAddress,
    envs.staking.elStakingV2PoolAddress,
  );
  const { t } = useTranslation();
  const { userStakedInfo } = useV2StakedInfo();
  const { txStatus } = useContext(TxContext);
  const { staking, withdraw } = useStaking();
  const transText = t('modal.staking.0');
  const [stakingType, setStakingType] = useState(transText);
  const [value, setValue] = useState('');
  const [transactionWait, setTransactionWait] = useState(false);

  const isStakingMode = useCallback(() => {
    return stakingType === t('modal.staking.0');
  }, [stakingType]);

  useEffect(() => {
    setValue('');
  }, [stakingType]);

  useEffect(() => {
    if (txStatus !== TxStatus.PENDING) {
      setTransactionWait(false);
      return;
    }
    if (txStatus === TxStatus.PENDING) {
      setTransactionWait(true);
    }
  }, [txStatus]);

  return (
    <>
      <ModalLayout title="EL" image={ElysiaToken} onClose={() => onClose()}>
        <SliderToggle>
          <SliderToggleBackground>
            <SliderToggleButton stakingMode={isStakingMode()} />
            <div
              onClick={() => setStakingType(t('modal.staking.0'))}
              style={{
                fontWeight: isStakingMode() ? 'bold' : 'normal',
              }}>
              {t('modal.staking.0')}
            </div>
            <div
              onClick={() => setStakingType(t('modal.unstaking.0'))}
              style={{
                fontWeight: isStakingMode() ? 'normal' : 'bold',
              }}>
              {t('modal.unstaking.0')}
            </div>
          </SliderToggleBackground>
        </SliderToggle>
        {loading || transactionWait ? (
          <LoadingIndicator
            isTxActive={transactionWait}
            isApproveLoading={!allowance.gt(balance)}
            button={
              loading
                ? t('modal.approve.4')
                : stakingType
                ? t('modal.staking.0')
                : t('modal.unstaking.0')
            }
          />
        ) : allowance.gt(balance) || stakingType === t('modal.unstaking.0') ? (
          <StakingBody
            header={
              isStakingMode() ? t('modal.staking.2') : t('modal.unstaking.2')
            }
            walletAmount={
              isStakingMode() ? t('modal.staking.1') : t('modal.unstaking.1')
            }
            max={() => {
              setValue(
                String(
                  utils.formatEther(
                    isStakingMode() ? balance : userStakedInfo.userPrincipal,
                  ),
                ),
              );
            }}
            value={value}
            setValue={setValue}
            amount={isStakingMode() ? balance : userStakedInfo.userPrincipal}
            type={
              isStakingMode() ? t('modal.staking.0') : t('modal.unstaking.0')
            }
            sendTx={isStakingMode() ? staking : withdraw}
            setTransactionWait={setTransactionWait}
          />
        ) : (
          <IncreateAllowanceModal setTransactionWait={setTransactionWait} />
        )}
      </ModalLayout>
    </>
  );
};

export default StakingModal;
