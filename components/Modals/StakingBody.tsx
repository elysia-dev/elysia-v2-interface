import { BigNumber, utils } from 'ethers';
import { Dispatch, SetStateAction } from 'react';
import IncreateAllowanceModal from './IncreateAllowanceModal';
import LoadingIndicator from './LoadingIndicator';
import styles from './Modal.module.scss';

type Props = {
  stakingInfo: {
    header: string;
    walletAmount: string;
    max: () => void;
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
    amount: string;
    type: string;
    sendTx: (amount: BigNumber) => void;
  };
  setTransactionWait: Dispatch<SetStateAction<boolean>>;
};

const StakingBody = (props: Props) => {
  const { stakingInfo, setTransactionWait } = props;

  return (
    <>
      <>
        <div className={styles.amount_input}>
          <div onClick={() => stakingInfo.max()}>최대</div>
          <input
            placeholder="0"
            value={stakingInfo.value}
            onChange={(e: any) => stakingInfo.setValue(e.target.value)}
          />
        </div>
        <div className={styles.balance_wrapper}>
          <div className={styles.balance_header}>{stakingInfo.header}</div>
          <div className={styles.balance_content}>
            <div>{stakingInfo.walletAmount}</div>
            <div>{stakingInfo.amount}</div>
          </div>
        </div>
        <div className="wallet_select_modal__content__line" />
        <div
          className={styles.modal_button}
          onClick={() => {
            setTransactionWait(true);
            stakingInfo.sendTx(utils.parseEther(String(stakingInfo.value)));
          }}>
          <p>{stakingInfo.type}</p>
        </div>
      </>
    </>
  );
};

export default StakingBody;
