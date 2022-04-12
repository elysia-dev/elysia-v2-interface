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

const GovernanceCenter = () => {
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );
  const { t } = useTranslation();
  const [guideType, setGuideType] = useState('');

  return (
    <div className={styles.governance_center}>
      <div className={styles.governance_center_header}>
        {t('governance.section_second.0')}
      </div>
      <div className={styles.governance_center_content_wrapper}>
        <div className={styles.governance_center_content_description}>
          <div className={styles.governance_center_content_description_first}>
            01
          </div>
          <div className={styles.governance_center_content_description_second}>
            {t('governance.section_second.1')}
          </div>
          <div className={styles.governance_center_content_description_third}>
            <Trans>{t('governance.section_second.2')}</Trans>
          </div>
          <div className={styles.governance_center_content_wrapper_button}>
            <div className={styles.governance_center_content_button}>
              {t('governance.section_second.3')}
              <Arrow />
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
      <div className={styles.governance_center_info_wrapper}>
        <div className={styles.governance_center_info_header}>
          {t('governance.section_second.5')}
        </div>
        <div className={styles.governance_center_info_box}>
          <div className={styles.governance_center_info_content}>
            <div>{t('governance.section_second.6')}</div>
            <div>$ {data?.elPrice.toFixed(4)}</div>
          </div>
          <div className={styles.governance_center_info_content}>
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
          <div className={styles.governance_center_info_content}>
            <div>
              {t('governance.section_second.9')}
              <Questionmark
                guideText={t('governance.section_second.10')}
                visible={guideType === 'box2'}
                mouseEnter={() => setGuideType('box2')}
                mouseLeave={() => setGuideType('')}
              />
            </div>
            <div>6,570,000,000 EL</div>
          </div>
          <div className={styles.governance_center_info_content}>
            <div>
              {t('governance.section_second.11')}
              <Questionmark
                guideText={t('governance.section_second.12')}
                visible={guideType === 'box3'}
                mouseEnter={() => setGuideType('box3')}
                mouseLeave={() => setGuideType('')}
              />
            </div>
            <div>6,570,000,000 EL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceCenter;
