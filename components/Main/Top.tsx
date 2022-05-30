import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { MainTopWrapper } from './styles';
import useTotalStakedBalance from 'hooks/useTotalStakedBalance';
import { toCompact } from 'utils/formatters';
import { formatEther } from 'ethers/lib/utils';
import Image from 'next/image';
import Discord from 'assets/images/main/discord_white@2x.webp';
import Github from 'assets/images/main/github_white@2x.webp';
import Telegram from 'assets/images/main/telegram_white@2x.webp';
import Twitter from 'assets/images/main/twitter_white@2x.webp';
import useReserveData from 'hooks/useReserveData';
import { useMemo } from 'react';
import { parseTokenId } from 'utils/parseTokenId';
import CollateralCategory from 'enums/CollateralCategory';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

const Top = () => {
  const { t } = useTranslation();
  const { totalBalance } = useTotalStakedBalance();
  const { reserveState, getAssetBondsByNetwork } = useReserveData();

  const assetBonds = useMemo(() => {
    return getAssetBondsByNetwork();
  }, [reserveState]);

  const assetBondTokensBackedByEstate = useMemo(() => {
    return assetBonds
      .filter((product) => {
        const parsedId = parseTokenId(product.id);
        return CollateralCategory.Others !== parsedId.collateralCategory;
      })
      .sort((a, b) => {
        return b.loanStartTimestamp! - a.loanStartTimestamp! >= 0 ? 1 : -1;
      });
  }, [assetBonds]);

  return (
    <MainTopWrapper>
      <div>
        <div>
          <div>{t(`main.top.0`)}</div>
          <div>{t(`main.top.1`)}</div>
        </div>
        <div>
          <div>
            <Link href="https://twitter.com/Elysia_HQ" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  googleGAEvent(
                    GoogleGAAction.MainTwitter,
                    GoogleGACategory.Main,
                  );
                }}>
                <Image src={Twitter} alt={'twitter'} />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://t.me/elysia_official" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  googleGAEvent(
                    GoogleGAAction.Maintelegram,
                    GoogleGACategory.Main,
                  );
                }}>
                <Image src={Telegram} alt={'Telegram'} />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://discord.gg/d8zveNum7g" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  googleGAEvent(
                    GoogleGAAction.MainDiscord,
                    GoogleGACategory.Main,
                  );
                }}>
                <Image src={Discord} alt={'Discord'} />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/elysia-dev" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  googleGAEvent(
                    GoogleGAAction.MainGithub,
                    GoogleGACategory.Main,
                  );
                }}>
                <Image src={Github} alt={'Github'} />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>
                <CountUp
                  start={0}
                  end={assetBondTokensBackedByEstate.length + 7}
                  duration={1}
                />
                +
              </span>
              <br />
              {t(`main.top_icon.0`)}
            </div>
          </div>
          <div>
            <div>
              <span>
                <CountUp start={0} end={83385} duration={1} />+
              </span>
              <br />
              {t(`main.top_icon.1`)}
            </div>
          </div>
          <div>
            <div>
              <span>${toCompact(parseInt(formatEther(totalBalance)))}+</span>
              <br />
              {t(`main.top_icon.2`)}
            </div>
          </div>
        </div>
      </div>
    </MainTopWrapper>
  );
};

export default Top;
