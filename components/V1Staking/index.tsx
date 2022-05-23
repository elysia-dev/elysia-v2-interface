import stakingRoundDate from 'utils/stakingRoundDate';
import { useContext, useEffect, useState } from 'react';
import ModalType from 'enums/ModalType';
import StakingItem from './StakingItem';
import { HeaderWrapper, PrevStakingWrapper, StakingSection } from './styles';
import usePrevStakingInfo from 'hooks/useV1StakedInfo';
import { constants } from 'ethers';
import RecentActivityType from 'enums/RecentActivityType';
import TxContext from 'contexts/TxContext';
import { Trans, useTranslation } from 'react-i18next';
import ModalLayout from 'components/Modals/ModalLayout';
import TransactionConfirmModal from 'components/Modals/TransactionConfirmModal';
import TxStatus from 'enums/TxStatus';
import V1UnstakeModal from 'components/Modals/V1UnstakeModal';
import V1ClaimModal from 'components/Modals/V1ClaimModal';

const V1Staking = () => {
  const { userInfo, isLoading } = usePrevStakingInfo();
  const { t } = useTranslation();
  const { txType, txStatus } = useContext(TxContext);
  const [modal, setModalType] = useState<ModalType>();
  const [modalVisible, setModalVisible] = useState(false);
  const [round, setRound] = useState(0);
  const [amount, setAmount] = useState(constants.Zero);

  useEffect(() => {
    if (
      txType === RecentActivityType.ELStake ||
      txType === RecentActivityType.ELStakingWithdraw ||
      txType === RecentActivityType.ELClaim
    ) {
      setModalType(ModalType.ConfirmEnded);
    }
  }, [txType]);

  useEffect(() => {
    if (txStatus === TxStatus.FAIL) {
      setModalVisible(false);
    }
  }, [txStatus]);

  return (
    <>
      {modalVisible && (
        <ModalLayout>
          {modal === ModalType.PrevUnstake ? (
            <V1UnstakeModal
              onClose={() => setModalVisible(false)}
              round={round}
              prevAmount={amount}
            />
          ) : modal === ModalType.PrevReward ? (
            <V1ClaimModal
              onClose={() => setModalVisible(false)}
              round={round}
              reward={amount}
            />
          ) : (
            <TransactionConfirmModal onClose={() => setModalVisible(false)} />
          )}
        </ModalLayout>
      )}
      <PrevStakingWrapper>
        <HeaderWrapper>
          <h2>{t('governance.prev_staking.0')}</h2>
          <p>
            <Trans>{t('governance.prev_staking.1')}</Trans>
          </p>
        </HeaderWrapper>
        {userInfo.length > 1 ? (
          stakingRoundDate.map((date, idx) => {
            return (
              <StakingSection key={idx}>
                <StakingItem
                  key={`staking_item_${idx}`}
                  date={date}
                  round={idx + 1}
                  userInfo={userInfo[idx]}
                  setModalType={setModalType}
                  setModalVisible={() => setModalVisible(true)}
                  setAmount={setAmount}
                  setRound={() => setRound(idx + 1)}
                />
              </StakingSection>
            );
          })
        ) : (
          <StakingSection>
            <StakingItem
              isLoading={isLoading}
              setModalType={setModalType}
              setModalVisible={() => {}}
            />
          </StakingSection>
        )}
      </PrevStakingWrapper>
    </>
  );
};

export default V1Staking;
