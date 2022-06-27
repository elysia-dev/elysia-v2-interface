import { Trans, useTranslation } from 'react-i18next';
import { MainPressWrapper } from './styles';
import usa from 'assets/images/main/usa@2x.webp';
import ko from 'assets/images/main/ko@2x.webp';
import cn from 'assets/images/main/cn@2x.webp';
import yahoo from 'assets/images/main/Yahoo_Finance_2021@2x.webp';
import decenter from 'assets/images/main/decenter@2x.webp';
import xinhua from 'assets/images/main/xinhua-logo-feature_0@2x.webp';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

interface IPressArray {
  flag: StaticImageData;
  press: StaticImageData;
  header: string;
  content: string;
  link: string;
  ga: GoogleGAAction;
}

const Press = () => {
  const { t } = useTranslation();

  const pressArray: IPressArray[] = [
    {
      flag: usa,
      press: yahoo,
      header: t('main.press.3'),
      content: t('main.press.4'),
      link: 'https://finance.yahoo.com/news/elysia-first-asia-obtains-approval-140000251.html?guccounter=2&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIbW0698fC2KnO771rsi89QhICI2s8b-egkyVs02mzNRM-Bhxnrvux1Tjyz8BcEo5rRruAn_XbdofYeXz9hTIKcDqFCKHmbZe1G5SK9c8eqfEzEKMNz_-tq9P2dadujlBGC8NdrdUe0d99qFtgSKiwbPpQJ34dPkSFneqn5_k1F0',
      ga: GoogleGAAction.MainPressEn,
    },
    {
      flag: ko,
      press: decenter,
      header: t('main.press.5'),
      content: t('main.press.6'),
      link: 'https://decenter.kr/NewsView/2621R4BTIW/GZ03',
      ga: GoogleGAAction.MainPressKo,
    },
    {
      flag: cn,
      press: xinhua,
      header: t('main.press.7'),
      content: t('main.press.8'),
      link: 'http://www.xinhuanet.com/money/2020-09/04/c_1126453754.htm',
      ga: GoogleGAAction.MainPressCn,
    },
  ];

  return (
    <MainPressWrapper>
      <h2>{t('main.press.0')}</h2>
      <h3>{t('main.press.1')}</h3>
      <section>
        {pressArray.map((pressData, index) => {
          return (
            <Link href={pressData.link} passHref key={`press_${index}`}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  googleGAEvent(pressData.ga, GoogleGACategory.Main)
                }>
                <section>
                  <div>
                    <Image
                      src={pressData.flag}
                      alt="Flag"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div>
                    <Image
                      src={pressData.press}
                      alt="Press"
                      width={118}
                      height={43}
                    />
                  </div>
                </section>
                <section>
                  <b>{pressData.header}</b>
                  <p>
                    <Trans>{pressData.content}</Trans>
                  </p>
                </section>
              </a>
            </Link>
          );
        })}
      </section>
    </MainPressWrapper>
  );
};

export default Press;
