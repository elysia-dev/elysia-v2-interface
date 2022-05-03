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
  const { isDesktop, isTablet } = useIsMobile();
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
                  <Image
                    src={Discord}
                    alt={'Discord'}
                    width={isDesktop ? 20 : 30}
                    height={isDesktop ? 20 : 30}
                  />
                </div>
                <div>Discode</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Telegram}
                    alt={'Telegram'}
                    width={isDesktop ? 21 : 31}
                    height={isDesktop ? 21 : 31}
                  />
                </div>
                <div>Telegram</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Kakao}
                    alt={'Kakao'}
                    width={isDesktop ? 19 : 29}
                    height={isDesktop ? 19 : 29}
                  />
                </div>
                <div>Kakaotalk</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={We_chat}
                    alt={'Wechat'}
                    width={isDesktop ? 20 : 30}
                    height={isDesktop ? 20 : 30}
                  />
                </div>
                <div>WeChat</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
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
                    width={isDesktop ? 17 : 27}
                    height={isDesktop ? 19.72 : 29.72}
                  />
                </div>
                <div>Forum</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Tally}
                    alt={'Tally'}
                    width={isDesktop ? 10 : 20}
                    height={isDesktop ? 18 : 28}
                  />
                </div>
                <div>Tally</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Snapshot}
                    alt={'Snapshot'}
                    width={isDesktop ? 13 : 23}
                    height={isDesktop ? 17 : 27}
                  />
                </div>
                <div>Snapshot</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
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
                  <Image
                    src={Git}
                    alt={'Git'}
                    width={isDesktop ? 24.42 : 34.42}
                    height={isDesktop ? 24.42 : 34.42}
                  />
                </div>
                <div>Github</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Medium}
                    alt={'Medium'}
                    width={isDesktop ? 28 : 38}
                    height={isDesktop ? 11 : 21}
                  />
                </div>
                <div>Medium</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
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
                  <Image
                    src={Twitter}
                    alt={'Twitter'}
                    width={isDesktop ? 21 : 31}
                    height={isDesktop ? 21 : 31}
                  />
                </div>
                <div>Twitter</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Facebook}
                    alt={'Facebook'}
                    width={isDesktop ? 23.52 : 33.52}
                    height={isDesktop ? 23.52 : 33.52}
                  />
                </div>
                <div>Facebook</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Medium}
                    alt={'Medium'}
                    width={isDesktop ? 28 : 38}
                    height={isDesktop ? 11 : 21}
                  />
                </div>
                <div>Medium</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={Wechat}
                    alt={'Wechat'}
                    width={isDesktop ? 22 : 32}
                    height={isDesktop ? 16 : 26}
                  />
                </div>
                <div>WeChat</div>
                <div>
                  {!isTablet && (
                    <Image
                      src={Arrow}
                      alt={'Arrow'}
                      width={isDesktop ? 20 : 26}
                      height={isDesktop ? 20 : 26}
                    />
                  )}
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
