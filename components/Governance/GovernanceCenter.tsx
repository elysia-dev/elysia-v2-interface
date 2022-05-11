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

  return (
    <section>
      <div className={styles.center_circle}>
        <h2>How to join</h2>
      </div>
      <GovernanceLineCounter counter={1}>
        <div className={styles.center_section_01}>
          <section className={styles.center_section_01_header}>
            <section className="token_wrapper">
              <Image src={ELtoken} alt={'EL Token'} />
            </section>
            <div>
              <h2>Get the EL Token</h2>
              <p>
                ELYSIA 토큰은 엘리시아 DAO 법인의 ownership을 나타내며,
                엘리시아에 관심있는 누구나 거버넌스에 참여할 수 있도록 EL 토큰이
                많은 DEX와 CEX에 상장되어 있습니다.
              </p>
              <div>
                <div className={styles.governance_button}>
                  거래소 보기
                  <Image
                    src={ButtonArrow}
                    alt={'Button Arrow'}
                    width={18}
                    height={12}
                  />
                </div>
                <div className={styles.governance_button}>
                  토큰 이코노미
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
