import { BigNumber, utils } from 'ethers';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatComma } from 'utils/formatters';
import styles from './Modal.module.scss';

type Props = {
  header: string;
  walletAmount: string;
  max: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  amount: BigNumber;
  type: string;
  sendTx: (amount: BigNumber, round?: number) => void;
  round?: number;
  setTransactionWait: Dispatch<SetStateAction<boolean>>;
};

const StakingBody = (props: Props) => {
  const {
    header,
    walletAmount,
    max,
    value,
    setValue,
    amount,
    type,
    sendTx,
    round,
    setTransactionWait,
  } = props;
  const { t } = useTranslation();
  const isDisabledBtn = useMemo(() => {
    return parseFloat(utils.formatUnits(amount)) < Number(value);
  }, [value, amount]);

  return (
    <>
      <>
        <div className={styles.amount_input}>
          <div onClick={() => max()}>{t('modal.amount_max')}</div>
          <input
            className="amount"
            type="number"
            placeholder="0"
            value={value}
            onChange={(e: any) => {
              if (e.target.value[0] === '.') {
                setValue(0.0 + e.target.value);
                return;
              }
              setValue(e.target.value);
            }}
          />
        </div>
        <div className={styles.balance_wrapper}>
          <div className={styles.balance_header}>{header}</div>
          <div className={styles.balance_content}>
            <div>{walletAmount}</div>
            <div>{formatComma(amount)} EL</div>
          </div>
        </div>
        <div className="wallet_select_modal__content__line" />
        <div
          className={styles.modal_button}
          onClick={() => {
            if (isDisabledBtn || Number(value) === 0) {
              return;
            }

            setTransactionWait(true);
            sendTx(utils.parseEther(String(value)), round);
          }}>
          <div
            style={{
              backgroundColor: isDisabledBtn
                ? '#f0f0f1'
                : Number(value) === 0
                ? '#f0f0f1'
                : '#3679b5',
            }}>
            <p
              style={{
                color: isDisabledBtn
                  ? '#888888'
                  : Number(value) === 0
                  ? '#888888'
                  : '#ffffff',
              }}>
              {isDisabledBtn ? t('modal.button.0') : type}
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default StakingBody;
