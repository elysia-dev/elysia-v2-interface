import { useWeb3React } from '@web3-react/core';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import { BigNumber, utils } from 'ethers';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { formatComma } from 'utils/formatters';
import { GoogleAnalyticsEvent } from 'utils/gaEvent';
import ModalButton from './ModalButton';

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

const Container = styled.section`
  padding: 0px;
`;

const AmountInputWrapper = styled.section`
  display: flex;
  margin: 0 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 1px solid #707070;
  border-radius: 10px;
  height: 145px;
  font-weight: bold;
  padding: 0 30px;
  @media (max-width: 500px) {
    padding: 0px 15px;
    height: 110px;
  }
`;
const MaxButton = styled.button`
  cursor: pointer;
  color: #b7b7b7;
  font-size: 18px;
  margin-right: 20px;
  width: 40px;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
  }
`;
const AmountInput = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  font-weight: bold;
  background: none;
  border: none;
  text-align: right;
  width: 100%;
  font-size: 3.125rem;
  color: #fff;
  &:focus {
    outline: none;
  }
`;
const BottomContainer = styled.section`
  padding: 0px 30px;
`;
const BalanceWrapper = styled.section`
  margin-top: 28px;
  margin-bottom: 15px;
  > p {
    font-size: 0.9375rem;
    color: #888888;
    margin-bottom: 19px;
  }
  > b {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
  }
`;

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
  const { account } = useWeb3React();
  const isDisabledBtn = useMemo(() => {
    return parseFloat(utils.formatUnits(amount)) < Number(value);
  }, [value, amount]);

  return (
    <Container>
      <AmountInputWrapper>
        <MaxButton onClick={() => max()}>{t('modal.amount_max')}</MaxButton>
        <AmountInput
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
      </AmountInputWrapper>
      <BottomContainer>
        <BalanceWrapper>
          <p>{header}</p>
          <b>
            <span>{walletAmount}</span>
            <span>{formatComma(amount)} EL</span>
          </b>
        </BalanceWrapper>
        <ModalButton
          title={isDisabledBtn ? t('modal.button.0') : type}
          onClick={() => {
            if (isDisabledBtn || Number(value) === 0) {
              return;
            }
            GoogleAnalyticsEvent(
              type === t('modal.staking.0')
                ? GoogleAnalyticsAction.GovStaking
                : GoogleAnalyticsAction.GovUnstaking,
              GoogleAnalyticsCategory.Governance,
              `WalletAddress = ${account},${
                type === t('modal.staking.0')
                  ? ` StakingAmount = ${value}`
                  : `UnStakingAmount = ${value}`
              }`,
            );
            setTransactionWait(true);
            sendTx(utils.parseEther(String(value)), round);
          }}
          buttonStyle={{
            backgroundColor: isDisabledBtn
              ? '#aaaaaa'
              : Number(value) === 0
              ? '#aaaaaa'
              : '#3679b5',
          }}
          textStyle={{
            color: isDisabledBtn
              ? '#ffffff'
              : Number(value) === 0
              ? '#ffffff'
              : '#ffffff',
          }}
        />
      </BottomContainer>
    </Container>
  );
};

export default StakingBody;
