import ModalType from 'enums/ModalType';
import { Dispatch, SetStateAction, useMemo } from 'react';
import {
  formatComma,
  formatSixFracionDigit,
  toCompactForBignumber,
} from 'utils/formatters';
import { formatEther } from 'ethers/lib/utils';
import CountUp from 'react-countup';
import Image from 'next/image';
import { BigNumber } from 'ethers';
import moment from 'moment';
import 'moment-timezone';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import useTotalStakedBalance from 'hooks/useTotalStakedBalance';
import Skeleton from 'react-loading-skeleton';
import ChainType from 'enums/ChainType';
import { Trans, useTranslation } from 'react-i18next';
import useV2StakedInfo from 'hooks/useV2StakedInfo';
import GovernanceLineCounter from './GovernanceLineCounter';
import getLocalLanguage from 'utils/getLocalLanguage';
import RoundWrapper from 'assets/images/governance/round-wrapper.png';
import ButtonArrow from 'assets/images/governance/button-arrow.png';
import EthOn from 'assets/images/governance/eth-on.png';
import EthOff from 'assets/images/governance/eth-off.png';
import BscOn from 'assets/images/governance/bsc-on.png';
import BscOff from 'assets/images/governance/bsc-off.png';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import {
  AnchorButton,
  PrevLinkButton,
  StakingArticle,
  StakingBody,
  StakingButton,
  StakingContent,
  StakingContentBox,
  StakingContentHeader,
  StakingDisableContent,
  StakingHeader,
  StakingImageContainer,
  StakingInterface,
  StakingSelectMainnet,
  StakingSelectMainnetCurrent,
} from './style';

type Props = {
  setModalType: Dispatch<SetStateAction<ModalType | undefined>>;
  setModalVisible: () => void;
  reward: {
    before: BigNumber;
    after: BigNumber;
  };
  currentChain: ChainType;
  setCurrentChain: Dispatch<SetStateAction<ChainType>>;
  startDate: moment.Moment;
};

const Staking = (props: Props) => {
  const {
    setModalType,
    setModalVisible,
    reward,
    currentChain,
    setCurrentChain,
  } = props;
  const { account, chainId } = useWeb3React();
  const router = useRouter();
  const { userStakedInfo } = useV2StakedInfo();
  const { totalBalance, isLoading, apr } = useTotalStakedBalance();
  const { t } = useTranslation();

  const stakingInfo = useMemo(() => {
    return [
      {
        name: t('governance.sectionThird.6'),
        value: `${account ? formatComma(userStakedInfo.userPrincipal) : 0}`,
        btnType: t('governance.sectionThird.8'),
        onClick: () => {
          setModalType(account ? ModalType.Staking : ModalType.NoAccount);
          setModalVisible();
        },
      },
      {
        name: t('governance.sectionThird.7'),
        value: (
          <>
            <CountUp
              className="bold amounts"
              start={account ? parseFloat(formatEther(reward.before)) : 0}
              end={account ? parseFloat(formatEther(reward.after)) : 0}
              formattingFn={(number: any) => {
                return formatSixFracionDigit(number);
              }}
              decimals={6}
              duration={1}
            />
          </>
        ),
        btnType: t('governance.sectionThird.9'),
        onClick: () => {
          setModalType(account ? ModalType.Claim : ModalType.NoAccount);
          setModalVisible();
        },
      },
    ];
  }, [
    t,
    account,
    userStakedInfo.userPrincipal,
    reward.before,
    reward.after,
    setModalType,
    setModalVisible,
  ]);
  return (
    <article>
      <GovernanceLineCounter counter={2}>
        <StakingArticle>
          <StakingHeader>
            <StakingImageContainer>
              <Image src={RoundWrapper} alt="Token data" />
              <div className="amount">
                <p>{t('governance.sectionThird.4')}</p>
                <b>
                  {' '}
                  {currentChain === ChainType.Ethereum ? (
                    isLoading ? (
                      <Skeleton width={130} height={35} />
                    ) : (
                      toCompactForBignumber(totalBalance)
                    )
                  ) : (
                    '-'
                  )}
                </b>
              </div>
              <div className="apr">
                <p>APR</p>
                <b>
                  {currentChain === ChainType.Ethereum ? (
                    isLoading ? (
                      <Skeleton width={130} height={35} />
                    ) : (
                      apr
                    )
                  ) : (
                    '-'
                  )}
                </b>
              </div>
            </StakingImageContainer>
            <div>
              <h2>{t('governance.sectionThird.0')}</h2>
              <p>
                {t('governance.sectionThird.1')}
                <br />
                <br />
                <Trans>{t('governance.sectionThird.2')}</Trans>
              </p>
              <AnchorButton
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.GovStakingGuide,
                    category: GoogleAnalyticsCategory.Governance,
                    label: '',
                  });
                  window.open('https://elysia.gitbook.io/elysia-user-guide/');
                }}>
                {t('governance.sectionThird.3')}
                <Image
                  src={ButtonArrow}
                  alt={'Button Arrow'}
                  width={18}
                  height={12}
                />
              </AnchorButton>
            </div>
          </StakingHeader>
          <StakingBody>
            <PrevLinkButton
              onClick={() =>
                router.push(`/${getLocalLanguage()}/Governance/V1Staking`)
              }>
              {t('governance.sectionThird.5')} &gt;
            </PrevLinkButton>
            <StakingInterface>
              <StakingSelectMainnet>
                <StakingSelectMainnetCurrent
                  style={{
                    left: currentChain === ChainType.Ethereum ? 4 : 67,
                  }}
                />
                <div
                  onClick={() => setCurrentChain(ChainType.Ethereum)}
                  style={{
                    color:
                      currentChain === ChainType.Ethereum
                        ? '#FFFFFF'
                        : '#888888',
                  }}>
                  <Image
                    src={currentChain === ChainType.Ethereum ? EthOn : EthOff}
                    alt={'Eth'}
                  />
                  <p>ETH</p>
                </div>
                <div
                  onClick={() => setCurrentChain(ChainType.BSC)}
                  style={{
                    color:
                      currentChain === ChainType.BSC ? '#FFFFFF' : '#888888',
                  }}>
                  <Image
                    src={currentChain === ChainType.BSC ? BscOn : BscOff}
                    alt={'Bsc'}
                  />
                  <p>BSC</p>
                </div>
              </StakingSelectMainnet>
              <StakingContent>
                {currentChain === ChainType.Ethereum ? (
                  !chainId || (chainId && [1, 1337].includes(chainId)) ? (
                    stakingInfo.map((info, idx) => (
                      <StakingContentBox key={`info_${idx}`}>
                        <StakingContentHeader>
                          <p>{info.name}</p>
                          <div>
                            <b>{info.value}</b>
                            <span>EL</span>
                          </div>
                        </StakingContentHeader>
                        <StakingButton
                          active={moment().diff(props.startDate) >= 0}
                          onClick={() => {
                            if (moment().diff(props.startDate) < 0) return;
                            info.onClick();
                          }}>
                          <p>{info.btnType}</p>
                        </StakingButton>
                      </StakingContentBox>
                    ))
                  ) : (
                    <StakingDisableContent>
                      {t('governance.sectionThird.10')}
                    </StakingDisableContent>
                  )
                ) : (
                  <StakingDisableContent>Coming soon!</StakingDisableContent>
                )}
              </StakingContent>
            </StakingInterface>
          </StakingBody>
        </StakingArticle>
      </GovernanceLineCounter>
    </article>
  );
};

export default Staking;
