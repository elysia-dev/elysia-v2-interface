import { BigNumber, constants } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import ElysiaToken from 'assets/images/elysia_token.png';
import CountUp from 'react-countup';
import { formatSixFracionDigit } from 'utils/formatters';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import Image from 'next/image';
import LoadingIndicator from './LoadingIndicator';
import { useContext, useEffect, useState } from 'react';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import useV2Staking from 'hooks/useV2Staking';

type Props = {
  onClose: () => void;
  reward: {
    before: BigNumber;
    after: BigNumber;
  };
};

const ClaimModal = (props: Props) => {
  const { onClose, reward } = props;
  const { t } = useTranslation();
  const { claim } = useV2Staking();
  const [transactionWait, setTransactionWait] = useState(false);
  const { txStatus } = useContext(TxContext);

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
      <div className={styles.modal_claim}>
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
        </div>
        {transactionWait ? (
          <>
            <div className="wallet_select_modal__content__line" />
            <LoadingIndicator
              isTxActive={transactionWait}
              isApproveLoading={false}
              button={t('modal.reward.0')}
            />
          </>
        ) : (
          <>
            <div className={styles.modal_content_wrapper}>
              <div className={styles.modal_content}>
                <CountUp
                  className={styles.reward}
                  start={parseFloat(
                    formatEther(reward?.before || constants.Zero),
                  )}
                  end={parseFloat(formatEther(reward?.after || constants.Zero))}
                  formattingFn={(number: any) => {
                    return formatSixFracionDigit(number);
                  }}
                  decimals={6}
                  duration={1}
                />
                <div>EL</div>
              </div>
            </div>
            <div
              className={styles.modal_button}
              onClick={() => {
                setTransactionWait(true);
                claim();
              }}>
              <div>
                <p>{t('modal.reward.0')}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ClaimModal;
