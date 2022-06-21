import useERC20Info from 'hooks/useERC20Info';
import { useCallback, useContext, useEffect, useState } from 'react';
import envs from 'envs';
import { utils } from 'ethers';
import useStaking from 'hooks/useV2Staking';
import ElysiaToken from 'assets/images/elysia_token.png';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import StakingBody from './StakingBody';
import Image from 'next/image';
import LoadingIndicator from './LoadingIndicator';
import IncreateAllowanceModal from './IncreateAllowanceModal';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import useV2StakedInfo from 'hooks/useV2StakedInfo';

type Props = {
  onClose: () => void;
};

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
      <div className={styles.modal_staking}>
        <div className={styles.modal_container}>
          <div className={styles.modal_header}>
            <div className={styles.modal_header_img}>
              <Image
                src={ElysiaToken}
                alt={'ElysiaToken'}
                width={36}
                height={36}
              />
              <h2>EL</h2>
            </div>
            <CloseButton onClose={() => onClose()} />
          </div>
          <div className={styles.staking_type}>
            <section className={styles.staking_type_wrapper}>
              <section
                className={styles.staking_type_slide}
                style={{
                  left: isStakingMode() ? 4 : 'calc(50% + 4px)',
                }}
              />
              <div
                onClick={() => setStakingType(t('modal.staking.0'))}
                style={{
                  fontWeight: isStakingMode() ? 800 : 400,
                }}>
                {t('modal.staking.0')}
              </div>
              <div
                onClick={() => setStakingType(t('modal.unstaking.0'))}
                style={{
                  fontWeight: isStakingMode() ? 400 : 800,
                }}>
                {t('modal.unstaking.0')}
              </div>
            </section>
          </div>
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
          ) : allowance.gt(balance) ||
            stakingType === t('modal.unstaking.0') ? (
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
        </div>
      </div>
    </>
  );
};

export default StakingModal;
