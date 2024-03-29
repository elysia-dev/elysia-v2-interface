import Image from 'next/image';
import useSWR from 'swr';
import envs from 'core/envs';
import { pricesFetcher } from 'clients/Coingecko';
import priceMiddleware from 'middleware/priceMiddleware';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {
  circulatingSupplyFetcher,
  totalSupplyFetcher,
  totalInsuranceFetcher,
} from 'clients/TokenSupply';
import { roundNumber } from 'utils/formatters';
import LanguageType from 'enums/LanguageType';
import ELtoken from 'assets/images/governance/el.png';
import ButtonArrow from 'assets/images/governance/button-arrow.png';
import GovernanceLineCounter from './GovernanceLineCounter';
import { useRouter } from 'next/router';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import {
  Button,
  CenterGetELToken,
  CenterGetELTokenBody,
  CenterGetELTokenHeader,
  CenterHeaderCircle,
} from './style';

const GovernanceCenter = () => {
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );
  const { data: totalSupply } = useSWR(
    'https://token.elysia.land/api/el/totalSupply',
    circulatingSupplyFetcher,
  );
  const { data: circulatingSupply } = useSWR(
    'https://token.elysia.land/api/el/totalCoins',
    totalSupplyFetcher,
  );
  const { data: totalInsurance } = useSWR(
    'https://token.elysia.land/api/el/totalInsurance',
    totalInsuranceFetcher
  )
  const { t, i18n } = useTranslation();
  const [guideType, setGuideType] = useState('');
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);

  return (
    <article>
      <CenterHeaderCircle>
        <b>{t('governance.section_second.0')}</b>
      </CenterHeaderCircle>
      <GovernanceLineCounter counter={1}>
        <CenterGetELToken>
          <CenterGetELTokenHeader>
            <figure className="token_wrapper">
              <Image src={ELtoken} alt={'EL Token'} />
            </figure>
            <div>
              <h2>{t('governance.section_second.1')}</h2>
              <p>{t('governance.section_second.2')}</p>
              <div>
                <Button
                  onClick={() => {
                    gtag.event({
                      action: GoogleAnalyticsAction.GovExchange,
                      category: GoogleAnalyticsCategory.Governance,
                      label: '',
                    });
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
                </Button>
                <Button
                  onClick={() => {
                    gtag.event({
                      action: GoogleAnalyticsAction.GovTokenEconomy,
                      category: GoogleAnalyticsCategory.Governance,
                      label: '',
                    });
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
                </Button>
              </div>
            </div>
          </CenterGetELTokenHeader>
          <CenterGetELTokenBody>
            <div>
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
                <h2>{roundNumber(totalSupply)} EL</h2>
              </div>
              <div>
                <p>{t('governance.section_second.11')}</p>
                <h2>{roundNumber(circulatingSupply)} EL</h2>
              </div>
              <div>
                <p>{t('governance.section_second.13')}</p>
                <h2>{roundNumber(totalInsurance)} EL</h2>
              </div>
            </div>
            <p>* powered by crypto.com</p>
          </CenterGetELTokenBody>
        </CenterGetELToken>
      </GovernanceLineCounter>
    </article>
  );
};

export default GovernanceCenter;
