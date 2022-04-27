import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useContext, useEffect, useState } from 'react';

const useSendingTransaction = () => {
  const { txStatus } = useContext(TxContext);
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

  return { transactionWait, setTransactionWait };
};

export default useSendingTransaction;
