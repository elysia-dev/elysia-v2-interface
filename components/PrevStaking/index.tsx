import stakingRoundDate from 'utils/stakingRoundDate';
import { useContext, useEffect, useState } from 'react';
import ModalType from 'enums/ModalType';
import StakingItem from './StakingItem';
import { HeaderWrapper, PrevStakingWrapper, StakingSection } from './styles';
import Modal from 'components/Modals';
import usePrevStakingInfo from 'hooks/usePrevStakingInfo';
import { constants } from 'ethers';
import RecentActivityType from 'enums/RecentActivityType';
import TxContext from 'contexts/TxContext';
import { Trans, useTranslation } from 'react-i18next';

const PrevStaking = () => {
  const { userInfo, isLoading } = usePrevStakingInfo();
  const { t } = useTranslation();
  const { txType } = useContext(TxContext);
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

  return (
    <>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        modalType={modal}
        setModalType={() => setModalType(ModalType.Connect)}
        prevAmount={amount}
        round={round}
      />
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
