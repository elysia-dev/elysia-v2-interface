import TokenImg from 'assets/images/ELYSIA_DAO_TOKEN3@2x.png';
import Image from 'next/image';
import useSWR from 'swr';
import envs from 'core/envs';
import styles from './Governance.module.scss';
import Arrow from './Arrow';
import { pricesFetcher } from 'clients/Coingecko';
import priceMiddleware from 'middleware/priceMiddleware';
import { Trans, useTranslation } from 'react-i18next';
import Questionmark from './Questionmark';
import { useState } from 'react';
import {
  circulatingSupplyFetcher,
  totalSupplyFetcher,
} from 'clients/TokenSupply';
import { formatCommaSmallZeroDisits } from 'utils/formatters';
import LanguageType from 'enums/LanguageType';
import ELtoken from 'assets/images/governance/el.png';
import ButtonArrow from 'assets/images/governance/button-arrow.png';
import GovernanceLineCounter from './GovernanceLineCounter';
import { useRouter } from 'next/router';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import { GoogleAnalyticsEvent } from 'utils/gaEvent';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const GovernanceCenter = () => {
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );
  const { data: totalSupply } = useSWR(
    'https://api.elysia.land/q/elTotalSupply',
    circulatingSupplyFetcher,
  );
  const { data: circulatingSupply } = useSWR(
    'https://api.elysia.land/q/elTotalCoins',
    totalSupplyFetcher,
  );
  const { t, i18n } = useTranslation();
  const [guideType, setGuideType] = useState('');
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);

  return (
    <article>
      <div className={styles.center_circle}>
        <b>{t('governance.section_second.0')}</b>
      </div>
      <GovernanceLineCounter counter={1}>
        <div className={styles.center_section_01}>
          <article className={styles.center_section_01_header}>
            <figure className="token_wrapper">
              <Image src={ELtoken} alt={'EL Token'} />
            </figure>
            <div>
              <h2>{t('governance.section_second.1')}</h2>
              <p>{t('governance.section_second.2')}</p>
              <div>
                <button
                  className={styles.governance_button}
                  onClick={() => {
                    GoogleAnalyticsEvent(
                      GoogleAnalyticsAction.GovExchange,
                      GoogleAnalyticsCategory.Governance,
                    );
                    window.open(
                      'https://coinmarketcap.com/currencies/elysia/markets/',
                    );
                  }}>
                  {t('governance.section_second.3')}
                  <Image
                    src={ButtonArrow}
                    alt={'Button Arrow'}
                    width={18}
                    height={12}
                  />
                </button>
                <button
                  className={styles.governance_button}
                  onClick={() => {
                    GoogleAnalyticsEvent(
                      GoogleAnalyticsAction.GovTokenEconomy,
                      GoogleAnalyticsCategory.Governance,
                    );
                    window.open(
                      lng === LanguageType.KO
                        ? 'https://elysia.gitbook.io/elysia-whitepaper-v2-0/v/korean/token-economy/minting-fee'
                        : 'https://elysia.gitbook.io/elysia-whitepaper-v2-0/token-economy/minting-fee',
                    );
                  }}>
                  {t('governance.section_second.4')}
                  <Image
                    src={ButtonArrow}
                    alt={'Button Arrow'}
                    width={18}
                    height={12}
                  />
                </button>
              </div>
            </div>
          </article>
          <article className={styles.center_section_01_body}>
            <section className={styles.center_section_01_body_box}>
              <div>
                <p>{t('governance.section_second.6')}</p>
                <h2>$ {data?.elPrice.toFixed(4)}</h2>
              </div>
              <div>
                <p>{t('governance.section_second.7')} </p>
                <h2>7,000,000,000 EL</h2>
              </div>
              <div>
                <p>{t('governance.section_second.9')}</p>
                <h2>{formatCommaSmallZeroDisits(totalSupply)} EL</h2>
              </div>
              <div>
                <p>{t('governance.section_second.11')}</p>
                <h2>{formatCommaSmallZeroDisits(circulatingSupply)} EL</h2>
              </div>
            </section>
            <p>* powered by crypto.com</p>
          </article>
        </div>
      </GovernanceLineCounter>
    </article>
  );
};

export default GovernanceCenter;
