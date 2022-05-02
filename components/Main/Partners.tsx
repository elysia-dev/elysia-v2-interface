import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Anjuke from 'assets/images/main/anjuke@2x.png';
import Argos from 'assets/images/main/argos@2x.png';
import Bithumb from 'assets/images/main/bithumb@2x.png';
import BithumbGlobal from 'assets/images/main/bithumbglobal@2x.png';
import BKL from 'assets/images/main/bkl@2x.png';
import Blocore from 'assets/images/main/blocore@2x.png';
import BuildBlock from 'assets/images/main/buildblock@2x.png';
import Certik from 'assets/images/main/certik@2x.png';
import Chainlink from 'assets/images/main/chainlink@2x.png';
import Crypto from 'assets/images/main/crypto@2x.png';
import Fang from 'assets/images/main/fang@2x.png';
import FBG from 'assets/images/main/fbg@2x.png';
import FLA from 'assets/images/main/fla@2x.png';
import Gopax from 'assets/images/main/gopax@2x.png';
import Hahmshout from 'assets/images/main/hahmshout@2x.png';
import Hexlant from 'assets/images/main/hexlant@2x.png';
import Hiblocks from 'assets/images/main/hiblocks@2x.png';
import HOW from 'assets/images/main/how@2x.png';
import HUB from 'assets/images/main/hub@2x.png';
import Icon from 'assets/images/main/icon@2x.png';
import Mexc from 'assets/images/main/mexc@2x.png';
import People from 'assets/images/main/people@2x.png';
import Percent from 'assets/images/main/percent@2x.png';
import Propwave from 'assets/images/main/propwave@2x.png';
import Shin from 'assets/images/main/shin@2x.png';
import SRC from 'assets/images/main/src@2x.png';
import TSMP from 'assets/images/main/tsmp@2x.png';
import World from 'assets/images/main/world@2x.png';
import Xangle from 'assets/images/main/xangle@2x.png';
import XTcom from 'assets/images/main/xtcom@2x.png';
import Haechilabs from 'assets/images/main/haechilabs@2x.png';

import { NoiseSvg, PartnersWrapper } from './styles';
import useIsMobile from 'hooks/useIsMobile';

const Partners = () => {
  const { t } = useTranslation();
  const { isDesktop } = useIsMobile();

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}>
      <NoiseSvg>
        <filter id="c">
          <feTurbulence type="fractalNoise" baseFrequency=".6" />
        </filter>
      </NoiseSvg>
      <PartnersWrapper>
        <div>
          <span>{t('main.partners.0')}</span>
          <br />
          <span>{t('main.partners.1')}</span>
        </div>
        <div>
          <div>
            <div>{t('main.partners.3')}</div>
            <div>
              <div>
                <Image src={FBG} alt={'FBG'} width={111} height={28} />
              </div>
              <div>
                <Image src={Blocore} alt={'blocore'} width={103} height={18} />
              </div>
            </div>
          </div>
          <div>
            <div>{t('main.partners.4')}</div>
            <div>
              <div>
                <Image src={Shin} alt={'Shin'} width={154} height={35} />
              </div>
              <div>
                <Image src={BKL} alt={'BKL'} width={154} height={36} />
              </div>
              <div>
                <Image src={FLA} alt={'FLA'} width={154} height={18} />
              </div>
              <div>
                <Image src={HUB} alt={'HUB'} width={154} height={39} />
              </div>
              <div>
                <Image src={HOW} alt={'HOW'} width={154} height={37} />
              </div>
              <div>
                <Image src={TSMP} alt={'TSMP'} width={154} height={55} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('main.partners.5')}</div>
            <div>
              <div>
                <Image src={Certik} alt={'Certik'} width={125} height={30} />
              </div>
              <div>
                <Image
                  src={Haechilabs}
                  alt={'Haechilabs'}
                  width={115}
                  height={18}
                />
              </div>
            </div>
          </div>
          <div>
            <div>{t('main.partners.6')}</div>
            <div>
              <div>
                <Image src={People} alt={'People'} width={156} height={38} />
              </div>
              <div>
                <Image src={Percent} alt={'Percent'} width={150} height={45} />
              </div>
              <div>
                <Image
                  src={BuildBlock}
                  alt={'BuildBlock'}
                  width={111}
                  height={23}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>{t('main.partners.7')}</div>
          <div>
            <div>
              <Image src={Bithumb} alt={'Bithumb'} width={115} height={28} />
            </div>
            <div>
              <Image src={Crypto} alt={'Cryto'} width={143} height={28} />
            </div>
            <div>
              <Image src={Mexc} alt={'Mexc'} width={157} height={20} />
            </div>
            <div>
              <Image
                src={BithumbGlobal}
                alt={'BithumbGlobal'}
                width={121}
                height={34}
              />
            </div>
            <div>
              <Image src={XTcom} alt={'XTcom'} width={131} height={27} />
            </div>
            <div>
              <Image src={Gopax} alt={'Gopax'} width={131} height={20} />
            </div>
            <div>
              <Image src={Xangle} alt={'Xangle'} width={131} height={24} />
            </div>
            <div>
              <Image
                src={Chainlink}
                alt={'Chainlink'}
                width={131}
                height={38}
              />
            </div>
            <div>
              <Image src={Fang} alt={'Fang'} width={131} height={34} />
            </div>
            <div>
              <Image src={Anjuke} alt={'Anjuke'} width={131} height={42} />
            </div>
            <div>
              <Image src={World} alt={'World'} width={131} height={39} />
            </div>
            <div>
              <Image src={Icon} alt={'Icon'} width={131} height={22} />
            </div>
            <div>
              <Image src={Hexlant} alt={'Hexlant'} width={131} height={24} />
            </div>
            <div>
              <Image
                src={Hahmshout}
                alt={'Hahmshout'}
                width={131}
                height={23}
              />
            </div>
            <div>
              <Image src={Hiblocks} alt={'Hiblocks'} width={131} height={24} />
            </div>
            <div>
              <Image src={Propwave} alt={'Propwave'} width={131} height={39} />
            </div>
            <div>
              <Image src={SRC} alt={'SRC'} width={131} height={60} />
            </div>
            <div>
              <Image src={Argos} alt={'Argos'} width={131} height={24} />
            </div>
          </div>
        </div>
      </PartnersWrapper>
    </div>
  );
};

export default Partners;
