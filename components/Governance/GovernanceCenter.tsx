import Image from 'next/image';
import useSWR from 'swr';
import envs from 'envs';
import { pricesFetcher } from 'clients/Coingecko';
import priceMiddleware from 'middleware/priceMiddleware';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {
  circulatingSupplyFetcher,
  totalSupplyFetcher,
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

  console.log(roundNumber(totalSupply));

  return (
    <article>
      <CenterHeaderCircle>
        <b>{t('governance.sectionSecond.0')}</b>
      </CenterHeaderCircle>
      <GovernanceLineCounter counter={1}>
        <CenterGetELToken>
          <CenterGetELTokenHeader>
            <figure className="token_wrapper">
              <Image src={ELtoken} alt={'EL Token'} />
            </figure>
            <div>
              <h2>{t('governance.sectionSecond.1')}</h2>
              <p>{t('governance.sectionSecond.2')}</p>
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
                  {t('governance.sectionSecond.3')}
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
                      action: GoogleAnalyticsAction.GovTokeneconomy,
                      category: GoogleAnalyticsCategory.Governance,
                      label: '',
                    });
                    window.open(
                      lng === LanguageType.KO
                        ? 'https://elysia.gitbook.io/elysia-whitepaper-v2-0/v/korean/token-economy/minting-fee'
                        : 'https://elysia.gitbook.io/elysia-whitepaper-v2-0/token-economy/minting-fee',
                    );
                  }}>
                  {t('governance.sectionSecond.4')}
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
                <p>{t('governance.sectionSecond.5')}</p>
                <h2>$ {data?.elPrice.toFixed(4)}</h2>
              </div>
              <div>
                <p>{t('governance.sectionSecond.6')} </p>
                <h2>7,000,000,000 EL</h2>
              </div>
              <div>
                <p>{t('governance.sectionSecond.7')}</p>
                <h2>{roundNumber(totalSupply)} EL</h2>
              </div>
              <div>
                <p>{t('governance.sectionSecond.8')}</p>
                <h2>{roundNumber(circulatingSupply)} EL</h2>
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
