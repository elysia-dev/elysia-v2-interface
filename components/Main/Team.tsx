import { Trans, useTranslation } from 'react-i18next';
import { MainTeamWrapper } from './styles';
import member1 from 'assets/images/main/ELY_서동욱@2x.webp';
import member2 from 'assets/images/main/ELY_이재복@2x.webp';
import member3 from 'assets/images/main/ELY_이종현@2x.webp';
import member4 from 'assets/images/main/ELY_이현민@2x.webp';
import member5 from 'assets/images/main/ELY_임정건@2x.webp';
import member6 from 'assets/images/main/ELY_차원준@2x.webp';
import usa from 'assets/images/main/usa@2x.webp';
import ko from 'assets/images/main/ko@2x.webp';
import cn from 'assets/images/main/cn@2x.webp';
import yahoo from 'assets/images/main/Yahoo_Finance_2021@2x.webp';
import decenter from 'assets/images/main/decenter@2x.webp';
import xinhua from 'assets/images/main/xinhua-logo-feature_0@2x.webp';
import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}>
      <MainTeamWrapper>
        <div>
          <div>
            <span>{t('main.developers.0')}</span>
            <br />
            <span>{t('main.developers.1')}</span>
          </div>
          <div>
            <div>
              <Image src={member5} alt={'member5'} width={148} height={148} />
            </div>
            <div>
              <Image src={member6} alt={'member6'} width={148} height={148} />
            </div>
            <div>
              <Image src={member1} alt={'member1'} width={148} height={148} />
            </div>
            <div>
              <Image src={member4} alt={'member4'} width={148} height={148} />
            </div>
            <div>
              <Image src={member2} alt={'member2'} width={148} height={148} />
            </div>
            <div>
              <Image src={member3} alt={'member3'} width={148} height={148} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>{t('main.press.0')}</span>
            <br />
            <span>{t('main.press.1')}</span>
          </div>
          <div>
            <Link
              href={
                'https://finance.yahoo.com/news/elysia-first-asia-obtains-approval-140000251.html?guccounter=2&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIbW0698fC2KnO771rsi89QhICI2s8b-egkyVs02mzNRM-Bhxnrvux1Tjyz8BcEo5rRruAn_XbdofYeXz9hTIKcDqFCKHmbZe1G5SK9c8eqfEzEKMNz_-tq9P2dadujlBGC8NdrdUe0d99qFtgSKiwbPpQJ34dPkSFneqn5_k1F0'
              }
              passHref>
              <a target="_blank" rel="noopener noreferrer">
                <div>
                  <div>
                    <Image src={usa} alt={'usa'} width={42} height={42} />
                  </div>
                  <div>
                    <Image src={yahoo} alt={'yahoo'} width={118} height={43} />
                  </div>
                </div>
                <div>
                  <div>{t('main.press.3')}</div>
                  <div>
                    <Trans>{t('main.press.4')}</Trans>
                  </div>
                </div>
                {/* </div> */}
              </a>
            </Link>
            <Link
              href={'https://decenter.kr/NewsView/2621R4BTIW/GZ03'}
              passHref>
              <a target="_blank" rel="noopener noreferrer">
                <div>
                  <div>
                    <Image src={ko} alt={'ko'} width={42} height={42} />
                  </div>
                  <div>
                    <Image
                      src={decenter}
                      alt={'decenter'}
                      width={118}
                      height={43}
                    />
                  </div>
                </div>
                <div>
                  <div>{t('main.press.5')}</div>
                  <div>{t('main.press.6')}</div>
                </div>
                {/* </div> */}
              </a>
            </Link>
            <Link
              href={
                'http://www.xinhuanet.com/money/2020-09/04/c_1126453754.htm'
              }
              passHref>
              <a target="_blank" rel="noopener noreferrer">
                <div>
                  <div>
                    <Image src={cn} alt={'cn'} width={42} height={42} />
                  </div>
                  <div>
                    <Image
                      src={xinhua}
                      alt={'xinhua'}
                      width={118}
                      height={43}
                    />
                  </div>
                </div>
                <div>
                  <div>{t('main.press.7')}</div>
                  <div>{t('main.press.8')}</div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </MainTeamWrapper>
    </div>
  );
};

export default Team;
