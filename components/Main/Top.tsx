import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { MainTopWrapper, MainTopLink, MainTopPublicRelation } from './styles';
import useTotalStakedBalance from 'hooks/useTotalStakedBalance';
import { toCompact } from 'utils/formatters';
import { formatEther } from 'ethers/lib/utils';
import Image from 'next/image';
import Discord from 'assets/images/main/discord_white@2x.webp';
import Github from 'assets/images/main/github_white@2x.webp';
import Telegram from 'assets/images/main/telegram_white@2x.webp';
import Twitter from 'assets/images/main/twitter_white@2x.webp';
import useReserveData from 'hooks/useReserveData';
import { useMemo } from 'react';
import { parseTokenId } from 'utils/parseTokenId';
import CollateralCategory from 'enums/CollateralCategory';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const Top = () => {
  const { t } = useTranslation();
  const { tvl, isLoading } = useTotalStakedBalance();
  const { reserveState, getAssetBondsByNetwork } = useReserveData();

  const assetBonds = useMemo(() => {
    return getAssetBondsByNetwork();
  }, [getAssetBondsByNetwork]);

  const assetBondTokensBackedByEstate = useMemo(() => {
    return assetBonds
      .filter((product) => {
        const parsedId = parseTokenId(product.id);
        return CollateralCategory.Others !== parsedId.collateralCategory;
      })
      .sort((a, b) => {
        return b.loanStartTimestamp! - a.loanStartTimestamp! >= 0 ? 1 : -1;
      });
  }, [assetBonds]);

  const dataLoading = useMemo(() => {
    return isLoading || assetBondTokensBackedByEstate.length === 0;
  }, [isLoading, assetBondTokensBackedByEstate]);

  const renderTvl = useMemo(() => {
    return (
      <CountUp
        start={0}
        end={tvl}
        duration={1}
        formattingFn={(number) => `$${toCompact(number)}+`}
      />
    );
  }, [tvl]);

  return (
    <MainTopWrapper>
      <section>
        <h1>{t(`main.top.0`)}</h1>
        <h2>{t(`main.top.1`)}</h2>
      </section>
      <div className="dao_description">
        <h3>{t(`main.dao_description.0`)}</h3>
        <div>
          <h3>
            <Trans>{t(`main.dao_description.1`)}</Trans>
          </h3>
          <h3>
            <Trans>{t(`main.dao_description.2`)}</Trans>
          </h3>
          <h3>
            <Trans>{t(`main.dao_description.3`)}</Trans>
          </h3>
        </div>
      </div>
      <MainTopLink>
        <section>
          <Link href="https://twitter.com/Elysia_HQ" passHref>
            <a
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.MainTwitter,
                  category: GoogleAnalyticsCategory.Main,
                  label: '',
                });
              }}>
              <Image src={Twitter} alt={'twitter'} />
            </a>
          </Link>
        </section>
        <section>
          <Link href="https://t.me/elysia_official" passHref>
            <a
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.MainTelegram,
                  category: GoogleAnalyticsCategory.Main,
                  label: '',
                });
              }}>
              <Image src={Telegram} alt={'Telegram'} />
            </a>
          </Link>
        </section>
        <section>
          <Link href="https://discord.gg/d8zveNum7g" passHref>
            <a
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.MainDiscord,
                  category: GoogleAnalyticsCategory.Main,
                  label: '',
                });
              }}>
              <Image src={Discord} alt={'Discord'} />
            </a>
          </Link>
        </section>
        <section>
          <Link href="https://github.com/elysia-dev" passHref>
            <a
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.MainGithub,
                  category: GoogleAnalyticsCategory.Main,
                  label: '',
                });
              }}>
              <Image src={Github} alt={'Github'} />
            </a>
          </Link>
        </section>
      </MainTopLink>
      <MainTopPublicRelation>
        <section>
          <p>
            {dataLoading ? (
              <b>-</b>
            ) : (
              <b>
                <CountUp
                  start={0}
                  end={assetBondTokensBackedByEstate.length + 7}
                  duration={1}
                />
                +
              </b>
            )}
            <br />
            {t(`main.top_icon.0`)}
          </p>
        </section>
        <section>
          <p>
            {dataLoading ? (
              <b>-</b>
            ) : (
              <b>
                <CountUp start={0} end={83385} duration={1} />+
              </b>
            )}
            <br />
            {t(`main.top_icon.1`)}
          </p>
        </section>
        <section>
          <p>
            {dataLoading ? <b>-</b> : <b>{renderTvl}</b>}
            <br />
            {t(`main.top_icon.2`)}
          </p>
        </section>
      </MainTopPublicRelation>
    </MainTopWrapper>
  );
};

export default Top;
