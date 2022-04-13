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

const GovernanceCenter = () => {
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );
  const { data: totalSupply } = useSWR(
    process.env.NEXT_PUBLIC_CIRCULATING_SUPPLY_API,
    circulatingSupplyFetcher,
  );
  const { data: circulatingSupply } = useSWR(
    process.env.NEXT_PUBLIC_TOTAL_SUPPLY_API,
    totalSupplyFetcher,
  );
  const { t } = useTranslation();
  const [guideType, setGuideType] = useState('');

  return (
    <div className={styles.governance_center}>
      <div>{t('governance.section_second.0')}</div>
      <div className={styles.governance_center_content_wrapper}>
        <div className={styles.governance_center_content_description}>
          <div>01</div>
          <div>{t('governance.section_second.1')}</div>
          <div>
            <Trans>{t('governance.section_second.2')}</Trans>
          </div>
          <div className={styles.governance_center_content_wrapper_button}>
            <div>
              <a
                href="https://coinmarketcap.com/currencies/elysia/markets/"
                rel="noopener noreferer"
                target="_blank">
                {t('governance.section_second.3')}
                <Arrow />
              </a>
            </div>
            <div className={styles.governance_center_content_button}>
              {t('governance.section_second.4')}
              <Arrow />
            </div>
          </div>
        </div>
        <div>
          <Image src={TokenImg} alt={'TokenImg'} width={358} height={358} />
        </div>
      </div>
      <div>
        <div className={styles.governance_center_info_header}>
          {t('governance.section_second.5')}
        </div>
        <div className={styles.governance_center_info_box}>
          <div>
            <div>{t('governance.section_second.6')}</div>
            <div>$ {data?.elPrice.toFixed(4)}</div>
          </div>
          <div>
            <div>
              {t('governance.section_second.7')}{' '}
              <Questionmark
                guideText={t('governance.section_second.8')}
                visible={guideType === 'box1'}
                mouseEnter={() => setGuideType('box1')}
                mouseLeave={() => setGuideType('')}
              />
            </div>
            <div>7,000,000,000 EL</div>
          </div>
          <div>
            <div>
              {t('governance.section_second.9')}
              <Questionmark
                guideText={t('governance.section_second.10')}
                visible={guideType === 'box2'}
                mouseEnter={() => setGuideType('box2')}
                mouseLeave={() => setGuideType('')}
              />
            </div>
            <div>{formatCommaSmallZeroDisits(totalSupply)} EL</div>
          </div>
          <div>
            <div>
              {t('governance.section_second.11')}
              <Questionmark
                guideText={t('governance.section_second.12')}
                visible={guideType === 'box3'}
                mouseEnter={() => setGuideType('box3')}
                mouseLeave={() => setGuideType('')}
              />
            </div>
            <div>{formatCommaSmallZeroDisits(circulatingSupply)} EL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceCenter;
