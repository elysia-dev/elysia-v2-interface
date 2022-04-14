import stakingRoundDate from 'utils/stakingRoundDate';
import { useContext, useEffect, useState } from 'react';
import ModalType from 'enums/ModalType';
import StakingItem from './StakingItem';
import { HeaderWrapper, PrevStakingWrapper, StakingSection } from './styles';
import usePrevStakingInfo from 'hooks/usePrevStakingInfo';
import { constants } from 'ethers';
import RecentActivityType from 'enums/RecentActivityType';
import TxContext from 'contexts/TxContext';
import { Trans, useTranslation } from 'react-i18next';
import ModalLayout from 'components/Modals/ModalLayout';
import PrevUnstakeModal from 'components/Modals/PrevUnstakeModal';
import PrevClaimModal from 'components/Modals/PrevClaimModal';
import TransactionConfirmModal from 'components/Modals/TransactionConfirmModal';
import TxStatus from 'enums/TxStatus';

const PrevStaking = () => {
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
            <PrevUnstakeModal
              onClose={() => setModalVisible(false)}
              round={round}
              prevAmount={amount}
            />
          ) : modal === ModalType.PrevReward ? (
            <PrevClaimModal
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
          <div>{t('governance.prev_staking.0')}</div>
          <div>
            <Trans>{t('governance.prev_staking.1')}</Trans>
          </div>
        </HeaderWrapper>
        <div>
          <StakingSection>
            {userInfo.length > 1 ? (
              stakingRoundDate.map((date, idx) => {
                return (
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
                );
              })
            ) : (
              <StakingItem
                isLoading={isLoading}
                setModalType={setModalType}
                setModalVisible={() => {}}
              />
            )}
          </StakingSection>
        </div>
      </PrevStakingWrapper>
    </>
  );
};

export default PrevStaking;
