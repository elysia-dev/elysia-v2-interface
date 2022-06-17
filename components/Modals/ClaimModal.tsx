import { BigNumber, constants } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import ElysiaToken from 'assets/images/elysia_token.png';
import CountUp from 'react-countup';
import { formatSixFracionDigit } from 'utils/formatters';
import LoadingIndicator from './LoadingIndicator';
import { useContext, useEffect, useState } from 'react';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { useTranslation } from 'react-i18next';
import useV2Staking from 'hooks/useV2Staking';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import { useWeb3React } from '@web3-react/core';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';
import ModalButton from './ModalButton';

type Props = {
  onClose: () => void;
  reward: {
    before: BigNumber;
    after: BigNumber;
  };
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

const ClaimModal = (props: Props) => {
  const { onClose, reward } = props;
  const { t } = useTranslation();
  const { claim } = useV2Staking();
  const { account } = useWeb3React();
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
        <>
          <LoadingIndicator
            isTxActive={transactionWait}
            isApproveLoading={false}
            button={t('modal.reward.0')}
          />
        </>
      ) : (
        <Container>
          <Wrapper>
            <InnerValue>
              <CountUp
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
              <b>EL</b>
            </InnerValue>
          </Wrapper>
          <ModalButton
            title={t('modal.reward.0')}
            onClick={() => {
              setTransactionWait(true);
              googleGAEvent(
                GoogleGAAction.GovStakingIncentive,
                GoogleGACategory.Governance,
                `WalletAddress = ${account},IncentiveAmount = ${parseFloat(
                  formatEther(reward?.after || constants.Zero),
                )}
                  }`,
              );
              claim();
            }}
          />
        </Container>
      )}
    </ModalLayout>
  );
};

export default ClaimModal;
