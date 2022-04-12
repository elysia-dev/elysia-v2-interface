import useERC20Info from 'hooks/useERC20Info';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import envs from 'core/envs';
import useStakedInfo from 'hooks/useStakedInfo';
import { utils } from 'ethers';
import useStaking from 'hooks/useStaking';
import ElysiaToken from 'assets/images/elysia_token.png';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import StakingBody from './StakingBody';
import Image from 'next/image';
import LoadingIndicator from './LoadingIndicator';
import IncreateAllowanceModal from './IncreateAllowanceModal';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import RecentActivityType from 'enums/RecentActivityType';
import { useTranslation } from 'react-i18next';

type Props = {
  onClose: () => void;
};

const StakingModal = (props: Props) => {
  const { onClose } = props;
  const { balance, allowance, loading } = useERC20Info(
    envs.token.elAddress,
    envs.staking.elStakingPoolAddress,
  );
  const { t } = useTranslation();
  const userStakedInfo = useStakedInfo();
  const { txStatus } = useContext(TxContext);
  const { staking, withdraw } = useStaking();
  const [stakingType, setStakingType] = useState('staking');
  const [value, setValue] = useState('');
  const [transactionWait, setTransactionWait] = useState(false);

  const changeStakingType = useCallback((type: string) => {
    setStakingType(type);
  }, []);

  const isStakingMode = useCallback(() => {
    return stakingType === 'staking';
  }, [stakingType]);

  const stakingInfo = useMemo(() => {
    const stakingMode = isStakingMode();
    const amount = parseFloat(
      utils.formatEther(stakingMode ? balance : userStakedInfo.userPrincipal),
    );
    return {
      header: stakingMode ? t('modal.staking.2') : t('modal.unstaking.2'),
      walletAmount: stakingMode ? t('modal.staking.1') : t('modal.unstaking.1'),
      max: () => {
        setValue(String(amount));
      },
      value: value,
      setValue,
      amount: stakingMode ? balance : userStakedInfo.userPrincipal,
      type: stakingMode ? t('modal.staking.0') : t('modal.unstaking.0'),
      sendTx: stakingMode ? staking : withdraw,
    };
  }, [balance, isStakingMode, staking, userStakedInfo, value, withdraw]);

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
            <div
              onClick={() => changeStakingType('staking')}
              style={{
                borderBottom: isStakingMode() ? '3px solid #3679b5' : 'none',
              }}>
              {t('modal.staking.0')}
            </div>
            <div
              onClick={() => changeStakingType('unstaking')}
              style={{
                borderBottom: isStakingMode() ? 'none' : '3px solid #3679b5',
              }}>
              {t('modal.unstaking.0')}
            </div>
          </div>
          {loading || transactionWait ? (
            <LoadingIndicator
              isTxActive={transactionWait}
              isApproveLoading={!allowance.gt(balance)}
              button={loading ? t('modal.approve.4') : stakingInfo.type}
            />
          ) : false ? (
            <StakingBody
              stakingInfo={stakingInfo}
              setTransactionWait={setTransactionWait}
            />
          ) : stakingInfo.type === t('modal.unstaking.0') ? (
            <StakingBody
              stakingInfo={stakingInfo}
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
