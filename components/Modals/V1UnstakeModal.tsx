import { useContext, useEffect, useMemo, useState } from 'react';
import { BigNumber, constants, utils } from 'ethers';
import ElysiaToken from 'assets/images/elysia_token.png';
import StakingBody from './StakingBody';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from './LoadingIndicator';
import useV1Staking from 'hooks/useV1Staking';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';

type Props = {
  onClose: () => void;
  round?: number;
  prevAmount?: BigNumber;
};

const Container = styled.section`
  margin-top: 25px;
`;

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
    <ModalLayout title="EL" image={ElysiaToken} onClose={() => onClose()}>
      <Container>
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
            sendTx={withdraw}
            round={round}
            setTransactionWait={setTransactionWait}
          />
        )}
      </Container>
    </ModalLayout>
  );
};

export default V1UnstakeModal;
