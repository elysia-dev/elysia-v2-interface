import { BigNumber, utils } from 'ethers';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatComma } from 'utils/formatters';
import styles from './Modal.module.scss';

type Props = {
  stakingInfo: {
    header: string;
    walletAmount: string;
    max: () => void;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    amount: BigNumber;
    type: string;
    sendTx: (amount: BigNumber, round?: number) => void;
    round?: number;
  };
  setTransactionWait: Dispatch<SetStateAction<boolean>>;
};

const StakingBody = (props: Props) => {
  const { stakingInfo, setTransactionWait } = props;
  const { t } = useTranslation();
  const isDisabledBtn = useMemo(() => {
    return (
      parseFloat(utils.formatUnits(stakingInfo.amount)) <
        Number(stakingInfo.value) || Number(stakingInfo.value) === 0
    );
  }, [stakingInfo.value, stakingInfo.amount]);

  return (
    <>
      <>
        <div className={styles.amount_input}>
          <div onClick={() => stakingInfo.max()}>{t('modal.amount_max')}</div>
          <input
            className="amount"
            type="number"
            placeholder="0"
            value={stakingInfo.value}
            onChange={(e: any) => {
              if (e.target.value[0] === '.') {
                stakingInfo.setValue(0.0 + e.target.value);
                return;
              }
              stakingInfo.setValue(e.target.value);
            }}
          />
        </div>
        <div className={styles.balance_wrapper}>
          <div className={styles.balance_header}>{stakingInfo.header}</div>
          <div className={styles.balance_content}>
            <div>{stakingInfo.walletAmount}</div>
            <div>{formatComma(stakingInfo.amount)} EL</div>
          </div>
        </div>
        <div className="wallet_select_modal__content__line" />
        <div
          className={styles.modal_button}
          onClick={() => {
            if (isDisabledBtn) {
              return;
            }

            setTransactionWait(true);
            stakingInfo.sendTx(
              utils.parseEther(String(stakingInfo.value)),
              stakingInfo.round,
            );
          }}
          style={{
            backgroundColor: isDisabledBtn ? '#f0f0f1' : '#3679b5',
          }}>
          <p
            style={{
              color: isDisabledBtn ? '#888888' : '#ffffff',
            }}>
            {isDisabledBtn ? t('modal.button.0') : stakingInfo.type}
          </p>
        </div>
      </>
    </>
  );
};

export default StakingBody;
