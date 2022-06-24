import { useContext, useEffect, useMemo, useState } from 'react';
import { BigNumber, constants, utils } from 'ethers';
import ElysiaToken from 'assets/images/elysia_token.png';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import StakingBody from './StakingBody';
import Image from 'next/image';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from './LoadingIndicator';
import useV1Staking from 'hooks/useV1Staking';

type Props = {
  onClose: () => void;
  round?: number;
  prevAmount?: BigNumber;
};

const V1UnstakeModal = (props: Props) => {
  const { onClose, round, prevAmount } = props;
  const { withdraw } = useV1Staking();
  const { t } = useTranslation();
  const { txStatus } = useContext(TxContext);
  const [value, setValue] = useState('');
  const [transactionWait, setTransactionWait] = useState(false);

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
          {transactionWait ? (
            <LoadingIndicator
              isTxActive={transactionWait}
              isApproveLoading={false}
              button={t('modal.unstaking.0')}
            />
          ) : (
            <StakingBody
              header={t('modal.unstaking.2')}
              walletAmount={t('modal.prevUnstaking', { round })}
              max={() => {
                setValue(utils.formatEther(prevAmount ?? constants.Zero));
              }}
              value={value}
              setValue={setValue}
              amount={prevAmount ?? constants.Zero}
              type={t('modal.unstaking.0')}
              sendTx={withdraw}
              round={round}
              setTransactionWait={setTransactionWait}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default V1UnstakeModal;
