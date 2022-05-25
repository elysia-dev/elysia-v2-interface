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
    <section>
      <div className={styles.center_circle}>
        <h2>{t('governance.section_second.0')}</h2>
      </div>
      <GovernanceLineCounter counter={1}>
        <div className={styles.center_section_01}>
          <section className={styles.center_section_01_header}>
            <section className="token_wrapper">
              <Image src={ELtoken} alt={'EL Token'} />
            </section>
            <div>
              <h2>{t('governance.section_second.1')}</h2>
              <p>{t('governance.section_second.2')}</p>
              <div>
                <div
                  className={styles.governance_button}
                  onClick={() => {
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
                </div>
                <div
                  className={styles.governance_button}
                  onClick={() => {
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
                </div>
              </div>
            </div>
          </section>
          <section className={styles.center_section_01_body}>
            <div className={styles.center_section_01_body_box}>
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
            </div>
            <p>* powered by crypto.com</p>
          </section>
        </div>
      </GovernanceLineCounter>
    </section>
  );
};

export default GovernanceCenter;
