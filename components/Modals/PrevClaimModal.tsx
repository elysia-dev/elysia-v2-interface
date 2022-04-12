import { BigNumber, constants, utils } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import useReward from 'hooks/useReward';
import useStaking from 'hooks/useStaking';
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
import usePrevStaking from 'hooks/usePrevStaing';
import { useTranslation } from 'react-i18next';

type Props = {
  onClose: () => void;
  reward?: BigNumber;
  round: number;
};

const PrevClaimModal = (props: Props) => {
  const { onClose, reward, round } = props;
  const { t } = useTranslation();
  const { claim } = usePrevStaking();
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
          {/* <div className={styles.staking_type}></div> */}
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
                <span className={styles.reward}>
                  {parseFloat(utils.formatEther(reward ?? constants.Zero))}
                </span>
                <div>EL</div>
              </div>
            </div>
            <div
              className={styles.modal_button}
              onClick={() => {
                setTransactionWait(true);
                claim(round);
              }}>
              <p>{t('modal.reward.0')}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PrevClaimModal;
