import { useContext, useEffect, useMemo, useState } from 'react';
import { formatComma } from 'utils/formatters';
import { BigNumber, constants, utils } from 'ethers';
import useStaking from 'hooks/useStaking';
import ElysiaToken from 'assets/images/elysia_token.png';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import StakingBody from './StakingBody';
import Image from 'next/image';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import usePrevStaking from 'hooks/usePrevStaing';
import LoadingIndicator from './LoadingIndicator';

type Props = {
  onClose: () => void;
  round?: number;
  prevAmount?: BigNumber;
};

const PrevUnstakeModal = (props: Props) => {
  const { onClose, round, prevAmount } = props;
  const { withdraw } = usePrevStaking();
  const { t } = useTranslation();
  const { txStatus } = useContext(TxContext);
  const [value, setValue] = useState('');
  const [transactionWait, setTransactionWait] = useState(false);

  const stakingInfo = useMemo(() => {
    return {
      header: t('modal.unstaking.2'),
      walletAmount: t('modal.prev_unstaking', { round }),
      max: () => {
        setValue(utils.formatEther(prevAmount ?? constants.Zero));
      },
      value: value,
      setValue,
      amount: prevAmount ?? constants.Zero,
      type: t('modal.unstaking.0'),
      sendTx: withdraw,
      round: round,
    };
  }, [value, withdraw]);

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
              style={{
                borderBottom: '2px solid #3679b5',
                width: '100%',
                cursor: 'auto',
              }}>
              {t('modal.unstaking.0')}
            </div>
          </div>
          {transactionWait ? (
            <LoadingIndicator
              isTxActive={transactionWait}
              isApproveLoading={false}
              button={stakingInfo.type}
            />
          ) : (
            <StakingBody
              stakingInfo={stakingInfo}
              setTransactionWait={setTransactionWait}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PrevUnstakeModal;
