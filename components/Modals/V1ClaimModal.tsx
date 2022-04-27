import { BigNumber, constants, utils } from 'ethers';
import ElysiaToken from 'assets/images/elysia_token.png';
import { formatSixFracionDigit } from 'utils/formatters';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import Image from 'next/image';
import LoadingIndicator from './LoadingIndicator';
import { useTranslation } from 'react-i18next';
import useV1Staking from 'hooks/useV1Staking';
import useSendingTransaction from 'hooks/useSendingTransaction';

type Props = {
  onClose: () => void;
  reward?: BigNumber;
  round: number;
};

const V1ClaimModal = (props: Props) => {
  const { onClose, reward, round } = props;
  const { t } = useTranslation();
  const { claim } = useV1Staking();
  const { transactionWait, setTransactionWait } = useSendingTransaction();

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
                  {formatSixFracionDigit(
                    parseFloat(utils.formatEther(reward ?? constants.Zero)),
                  )}
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

export default V1ClaimModal;
