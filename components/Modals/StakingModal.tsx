import useERC20Info from 'hooks/useERC20Info';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import envs from 'core/envs';
import { formatComma } from 'utils/formatters';
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
  const { txStatus, txWaiting, txType } = useContext(TxContext);
  const { staking, withdraw } = useStaking();
  const [stakingType, setStakingType] = useState('staking');
  const [value, setValue] = useState(0);
  const [transactionWait, setTransactionWait] = useState(false);

  const changeStakingType = useCallback((type: string) => {
    setStakingType(type);
  }, []);

  const getType = useCallback(() => {
    return stakingType === 'staking';
  }, [stakingType]);

  const stakingInfo = useMemo(() => {
    const stakingMode = getType();
    return {
      header: stakingMode ? '스테이킹 가능한 수량' : '언스테이킹 가능한 수량',
      walletAmount: stakingMode ? '지갑잔액' : '스테이킹 수량',
      max: () => {
        setValue(
          parseFloat(
            utils.formatEther(
              stakingMode ? balance : userStakedInfo.userPrincipal,
            ),
          ),
        );
      },
      value: value,
      setValue,
      amount: `${formatComma(
        stakingMode ? balance : userStakedInfo.userPrincipal,
      )} EL`,
      type: stakingMode ? '스테이킹' : '언스테이킹',
      sendTx: stakingMode ? staking : withdraw,
    };
  }, [balance, getType, staking, userStakedInfo, value, withdraw]);

  useEffect(() => {
    setValue(0);
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
                borderBottom: getType() ? '2px solid #3679b5' : 'none',
              }}>
              Staking
            </div>
            <div
              onClick={() => changeStakingType('unstaking')}
              style={{
                borderBottom: getType() ? 'none' : '2px solid #3679b5',
              }}>
              Unstaking
            </div>
          </div>
          {loading || transactionWait ? (
            <LoadingIndicator
              isTxActive={transactionWait}
              isApproveLoading={!allowance.gt(balance)}
              button={
                loading
                  ? t('modal.indicator.permission_check')
                  : stakingInfo.type
              }
            />
          ) : allowance.gt(balance) ? (
            <StakingBody
              stakingInfo={stakingInfo}
              setTransactionWait={setTransactionWait}
            />
          ) : stakingInfo.type === '언스테이킹' ? (
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
