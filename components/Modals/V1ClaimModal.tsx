import { BigNumber, constants, utils } from 'ethers';
import ElysiaToken from 'assets/images/elysia_token.png';
import { formatSixDigit } from 'utils/formatters';
import LoadingIndicator from './LoadingIndicator';
import { useContext, useEffect, useState } from 'react';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import useV1Staking from 'hooks/useV1Staking';
import styled from 'styled-components';
import ModalLayout from './ModalLayout';
import ModalButton from './ModalButton';

type Props = {
  onClose: () => void;
  reward?: BigNumber;
  round: number;
};

const Container = styled.section`
  margin: 10px;
`;
const Wrapper = styled.section`
  border: 1px solid #707070;
  height: 145px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 30px;
  font-size: 1.875rem;
  border-radius: 10px;
  @media (max-width: 500px) {
    padding: 0px 15px;
    height: 110px;
  }
`;
const InnerValue = styled.section`
  font-family: SpoqaHanSansNeo;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    margin-right: 7px;
    font-size: 3rem;
    color: #fff;
  }
  > b {
    font-size: 2.5rem;
    color: #fff;
  }
`;

const V1ClaimModal = (props: Props) => {
  const { onClose, reward, round } = props;
  const { t } = useTranslation();
  const { claim } = useV1Staking();
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
    <ModalLayout image={ElysiaToken} title="EL" onClose={() => onClose()}>
      {transactionWait ? (
        <LoadingIndicator
          isTxActive={transactionWait}
          isApproveLoading={false}
          button={t('modal.reward.0')}
        />
      ) : (
        <Container>
          <Wrapper>
            <InnerValue>
              <span>
                {formatSixDigit(
                  parseFloat(utils.formatEther(reward ?? constants.Zero)),
                )}
              </span>
              <b>EL</b>
            </InnerValue>
          </Wrapper>
          <ModalButton
            title={t('modal.reward.0')}
            onClick={() => {
              setTransactionWait(true);
              claim(round);
            }}
          />
        </Container>
      )}
    </ModalLayout>
  );
};

export default V1ClaimModal;
