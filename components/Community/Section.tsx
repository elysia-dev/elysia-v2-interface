import { NoiseSvg } from 'components/Main/styles';
import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Image from 'next/image';
import Arrow from 'assets/images/community/arrow@2x.png';
import Discord from 'assets/images/community/discord_white@2x.png';
import Git from 'assets/images/community/git@2x.png';
import Facebook from 'assets/images/community/facebook@2x.png';
import Kakao from 'assets/images/community/kakao_white@2x.png';
import Medium from 'assets/images/community/medium@2x.png';
import Elysia from 'assets/images/community/elysia_icon@2x.png';
import Snapshot from 'assets/images/community/snapshot@2x.png';
import Tally from 'assets/images/community/tally@2x.png';
import Telegram from 'assets/images/community/telegram_white@2x.png';
import Twitter from 'assets/images/community/twitter@2x.png';
import We_chat from 'assets/images/community/wechat_@2x.png';
import Wechat from 'assets/images/community/wechat@2x.png';
import useIsMobile from 'hooks/useIsMobile';

const Section = () => {
  const { t } = useTranslation();
  const { isDesktop } = useIsMobile();

  return (
    <>
      <NoiseSvg>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="5.6" />
        </filter>
      </NoiseSvg>
      <SectionWrapper>
        <div>
          <div>
            <div>{t('community.0')}</div>
            <div>{t('community.1')}</div>
            <Trans>{t('community.2')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.3')}</div>
            <div>
              <div>
                <div>
                  <Image src={Discord} alt={'Discord'} width={30} height={30} />
                </div>
                <div>Discode</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Telegram}
                    alt={'Telegram'}
                    width={31}
                    height={31}
                  />
                </div>
                <div>Telegram</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image src={Kakao} alt={'Kakao'} width={29} height={29} />
                </div>
                <div>Kakaotalk</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image src={We_chat} alt={'Wechat'} width={30} height={30} />
                </div>
                <div>WeChat</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.4')}</div>
            <div>
              <div>
                <div>
                  <Image
                    src={Elysia}
                    alt={'Elysia'}
                    width={27}
                    height={29.72}
                  />
                </div>
                <div>Forum</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image src={Tally} alt={'Tally'} width={20} height={28} />
                </div>
                <div>Tally</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Snapshot}
                    alt={'Snapshot'}
                    width={23}
                    height={27}
                  />
                </div>
                <div>Snapshot</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.5')}</div>
            <div>
              <div>
                <div>
                  <Image src={Git} alt={'Git'} width={34.42} height={34.42} />
                </div>
                <div>Github</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image src={Medium} alt={'Medium'} width={38} height={21} />
                </div>
                <div>Medium</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.6')}</div>
            <div>
              <div>
                <div>
                  <Image src={Twitter} alt={'Twitter'} width={31} height={31} />
                </div>
                <div>Twitter</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Facebook}
                    alt={'Facebook'}
                    width={33.52}
                    height={33.52}
                  />
                </div>
                <div>Facebook</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image src={Medium} alt={'Medium'} width={38} height={21} />
                </div>
                <div>Medium</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
              <div>
                <div>
                  <Image src={Wechat} alt={'Wechat'} width={32} height={26} />
                </div>
                <div>WeChat</div>
                <div>
                  <Image src={Arrow} alt={'Arrow'} width={26} height={26} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
