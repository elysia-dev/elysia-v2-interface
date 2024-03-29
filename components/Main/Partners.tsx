import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Anjuke from 'assets/images/main/anjuke@2x.webp';
import Argos from 'assets/images/main/argos@2x.webp';
import Bithumb from 'assets/images/main/bithumb@2x.webp';
import BithumbGlobal from 'assets/images/main/bithumbglobal@2x.webp';
import BKL from 'assets/images/main/bkl@2x.webp';
import Blocore from 'assets/images/main/blocore@2x.webp';
import BuildBlock from 'assets/images/main/buildblock@2x.webp';
import Certik from 'assets/images/main/certik@2x.webp';
import Chainlink from 'assets/images/main/chainlink@2x.webp';
import Crypto from 'assets/images/main/crypto@2x.webp';
import Fang from 'assets/images/main/fang@2x.webp';
import FBG from 'assets/images/main/fbg@2x.webp';
import FLA from 'assets/images/main/fla@2x.webp';
import Gopax from 'assets/images/main/gopax@2x.webp';
import Hahmshout from 'assets/images/main/hahmshout@2x.webp';
import Hexlant from 'assets/images/main/hexlant@2x.webp';
import Hiblocks from 'assets/images/main/hiblocks@2x.webp';
import HOW from 'assets/images/main/how@2x.webp';
import HUB from 'assets/images/main/hub@2x.webp';
import Icon from 'assets/images/main/icon@2x.webp';
import Mexc from 'assets/images/main/mexc@2x.webp';
import People from 'assets/images/main/people@2x.webp';
import Percent from 'assets/images/main/percent@2x.webp';
import Propwave from 'assets/images/main/propwave@2x.webp';
import Shin from 'assets/images/main/shin@2x.webp';
import SRC from 'assets/images/main/src@2x.webp';
import TSMP from 'assets/images/main/tsmp@2x.webp';
import World from 'assets/images/main/world@2x.webp';
import Xangle from 'assets/images/main/xangle@2x.webp';
import XTcom from 'assets/images/main/xtcom@2x.webp';
import Haechilabs from 'assets/images/main/haechilabs@2x.webp';
import MetaGalaxia from 'assets/images/main/meta_galaxia.png';
import SlowMist from 'assets/images/main/SLOWMIST.png';

import Okx from 'assets/images/main/OKX.png';
import CoinbaseCustody from 'assets/images/main/coinbase_custody.png';
import Neopin from 'assets/images/main/neopin.png';
import Ozys from 'assets/images/main/ozys.png';
import megaton from 'assets/images/main/megaton_finance.png';
import Ceffu from 'assets/images/main/ceffu.png';
import Bkex from 'assets/images/main/BKEX.png';
import Btcex from 'assets/images/main/BTCEX.png';
import Havah from 'assets/images/main/HAVAH.png';

import { PartnersWrapper } from './styles';
import Link from 'next/link';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <PartnersWrapper>
      <h2>{t('main.partners.0')}</h2>
      <h3>{t('main.partners.1')}</h3>
      <section>
        <div>
          <p>{t('main.partners.3')}</p>
          <section id="backed_by">
            <div>
              <Link href="http://fbg.capital/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={FBG} alt={'FBG'} width={111} height={28} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.blocore.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Blocore}
                    alt={'blocore'}
                    width={103}
                    height={18}
                  />
                </a>
              </Link>
            </div>
          </section>
        </div>
        <div>
          <p>{t('main.partners.4')}</p>
          <section id="legal_review">
            <div>
              <Link href="https://www.shinkim.com/eng/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Shin} alt={'Shin'} width={154} height={35} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.bkl.co.kr/law" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={BKL} alt={'BKL'} width={154} height={36} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://focuslawasia.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={FLA} alt={'FLA'} width={154} height={18} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="http://hublaw.co.kr/www/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={HUB} alt={'HUB'} width={154} height={39} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.howlaws.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={HOW} alt={'HOW'} width={154} height={37} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.tsmplaw.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={TSMP} alt={'TSMP'} width={154} height={55} />
                </a>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div>
          <p>{t('main.partners.5')}</p>
          <section id="audit">
            <div>
              <Link href="https://www.certik.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Certik} alt={'Certik'} width={125} height={30} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://haechi.io/en" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Haechilabs}
                    alt={'Haechilabs'}
                    width={115}
                    height={18}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.slowmist.com/#home" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={SlowMist}
                    alt={'SlowMist'}
                    width={115}
                    height={21}
                  />
                </a>
              </Link>
            </div>
          </section>
        </div>
        {/* <div>
            <div>{t('main.partners.6')}</div>
            <div>
              <div>
                <Link href="https://www.peoplefund.co.kr/" passHref>
                  <a rel="noopener noreferrer" target="_blank">
                    <Image
                      src={People}
                      alt={'People'}
                      width={156}
                      height={38}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://www.8percent.kr/" passHref>
                  <a rel="noopener noreferrer" target="_blank">
                    <Image
                      src={Percent}
                      alt={'Percent'}
                      width={150}
                      height={45}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://buildblock.io/" passHref>
                  <a rel="noopener noreferrer" target="_blank">
                    <Image
                      src={BuildBlock}
                      alt={'BuildBlock'}
                      width={111}
                      height={23}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
      </section>
      <section>
        <div id="business_wrapper">
          <p>{t('main.partners.7')}</p>
          <section id="business">
            <div>
              <Link href="https://www.bithumb.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Bithumb}
                    alt={'Bithumb'}
                    width={115}
                    height={28}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://crypto.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Crypto} alt={'Cryto'} width={143} height={28} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.mexc.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Mexc} alt={'Mexc'} width={157} height={20} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.bitglobal.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={BithumbGlobal}
                    alt={'BithumbGlobal'}
                    width={121}
                    height={34}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.xt.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={XTcom} alt={'XTcom'} width={131} height={27} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.gopax.co.kr/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Gopax} alt={'Gopax'} width={131} height={20} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.xangle.io/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Xangle} alt={'Xangle'} width={131} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.chain.link/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Chainlink}
                    alt={'Chainlink'}
                    width={131}
                    height={38}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.fang.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Fang} alt={'Fang'} width={131} height={34} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.anjuke.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Anjuke} alt={'Anjuke'} width={131} height={42} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.jinse.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={World} alt={'World'} width={131} height={39} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.iconloop.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Icon} alt={'Icon'} width={131} height={22} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.hexlant.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Hexlant}
                    alt={'Hexlant'}
                    width={131}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="http://hahmshout.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Hahmshout}
                    alt={'Hahmshout'}
                    width={131}
                    height={23}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.hiblocks.io/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Hiblocks}
                    alt={'Hiblocks'}
                    width={131}
                    height={24}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://propwave.tistory.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={Propwave}
                    alt={'Propwave'}
                    width={131}
                    height={39}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.snusrc.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={SRC} alt={'SRC'} width={131} height={60} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://metagalaxia.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={MetaGalaxia}
                    alt={'MetaGalaxia'}
                    width={131}
                    height={24}
                  />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.okx.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Okx} alt={'Okx'} width={131} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.coinbase.com/prime/custody" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={CoinbaseCustody}
                    alt={'CoinbaseCustody'}
                    width={150}
                    height={28}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://neopin.io/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Neopin} alt={'Neopin'} width={131} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://ozys.io/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Ozys} alt={'Ozys'} width={150} height={30} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://megaton.fi/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image
                    src={megaton}
                    alt={'megaton'}
                    width={140}
                    height={30}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.ceffu.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Ceffu} alt={'Ceffu'} width={131} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.bkex.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Bkex} alt={'Bkex'} width={131} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.btcex.com/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Btcex} alt={'Btcex'} width={131} height={26} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://havah.io/" passHref>
                <a rel="noopener noreferrer" target="_blank">
                  <Image src={Havah} alt={'Havah'} width={131} height={50} />
                </a>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </PartnersWrapper>
  );
};

export default Partners;
