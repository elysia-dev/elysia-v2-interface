import { useState } from 'react';
import { BigNumber, constants, utils } from 'ethers';
import ElysiaToken from 'assets/images/elysia_token.png';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import StakingBody from './StakingBody';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from './LoadingIndicator';
import useV1Staking from 'hooks/useV1Staking';
import useIsPendingTx from 'hooks/useIsPendingTx';

type Props = {
  onClose: () => void;
  round?: number;
  prevAmount?: BigNumber;
};

const V1UnstakeModal = (props: Props) => {
  const { onClose, round, prevAmount } = props;
  const { withdraw } = useV1Staking();
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const { transactionWait, setTransactionWait } = useIsPendingTx();

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
              button={t('modal.unstaking.0')}
            />
          ) : (
            <StakingBody
              header={t('modal.unstaking.2')}
              walletAmount={t('modal.prev_unstaking', { round })}
              max={() => {
                setValue(utils.formatEther(prevAmount ?? constants.Zero));
              }}
              value={value}
              setValue={setValue}
              amount={prevAmount ?? constants.Zero}
              type={t('modal.unstaking.0')}
              sendTx={() => withdraw(utils.parseEther(value), round)}
              setTransactionWait={setTransactionWait}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default V1UnstakeModal;
