import { Trans, useTranslation } from 'react-i18next';
import { MainTeamWrapper, NoiseSvg } from './styles';
import member1 from 'assets/images/main/ELY_서동욱@2x.png';
import member2 from 'assets/images/main/ELY_이재복@2x.png';
import member3 from 'assets/images/main/ELY_이종현@2x.png';
import member4 from 'assets/images/main/ELY_이현민@2x.png';
import member5 from 'assets/images/main/ELY_임정건@2x.png';
import member6 from 'assets/images/main/ELY_차원준@2x.png';
import usa from 'assets/images/main/usa@2x.png';
import ko from 'assets/images/main/ko@2x.png';
import cn from 'assets/images/main/cn@2x.png';
import yahoo from 'assets/images/main/Yahoo_Finance_2021@2x.png';
import decenter from 'assets/images/main/decenter@2x.png';
import xinhua from 'assets/images/main/xinhua-logo-feature_0@2x.png';
import Image from 'next/image';

const Team = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}>
      <NoiseSvg>
        <filter id="a">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" />
        </filter>
      </NoiseSvg>
      <MainTeamWrapper>
        <div>
          <div>
            <span>{t('main.developers.0')}</span>
            <br />
            <span>{t('main.developers.1')}</span>
            {/* <br /> */}
            {/* {t('main.developers.2')} */}
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
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <div>
                <div>
                  <Image src={cn} alt={'cn'} width={42} height={42} />
                </div>
                <div>
                  <Image src={xinhua} alt={'xinhua'} width={118} height={43} />
                </div>
              </div>
              <div>
                <div>{t('main.press.7')}</div>
                <div>{t('main.press.8')}</div>
              </div>
            </div>
          </div>
        </div>
      </MainTeamWrapper>
    </div>
  );
};

export default Team;
