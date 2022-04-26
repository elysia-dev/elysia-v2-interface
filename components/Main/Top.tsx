import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { MainTopWrapper } from './styles';
import useTotalStakedBalance from 'hooks/useTotalStakedBalance';
import { formatCommaSmallZeroDisits } from 'utils/formatters';
import { formatEther } from 'ethers/lib/utils';

const Top = () => {
  const { t, i18n } = useTranslation();
  const { totalBalance } = useTotalStakedBalance();

  return (
    <MainTopWrapper>
      <div>
        <div>
          <div>{t(`main.top.0`)}</div>
          <div>{t(`main.top.1`)}</div>
          <Trans>{t(`main.top.2`)}</Trans>
        </div>
        <div>
          <div>
            <Link href="https://twitter.com/Elysia_HQ" passHref>
              <a rel="noopener noreferrer" target="_blank">
                Twitter icon1
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://t.me/elysia_official" passHref>
              <a rel="noopener noreferrer" target="_blank">
                Telegram icon1
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://discord.com/invite/JjjYrE5Ww8" passHref>
              <a rel="noopener noreferrer" target="_blank">
                Discord icon12
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/elysia-dev" passHref>
              <a rel="noopener noreferrer" target="_blank">
                Github icon 13
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <div>icon</div>
            <div>
              <CountUp start={0} end={20} duration={1} />
              <span>+</span>
              <br />
              {t(`main.top_icon.0`)}
            </div>
          </div>
          <div>
            <Link href={`${i18n.language}/Governance`} passHref>
              <div>icon</div>
            </Link>
            <div>
              <CountUp start={0} end={2000} duration={1} />
              <span>+</span>
              <br />
              {t(`main.top_icon.1`)}
            </div>
          </div>
          <div>
            <Link href={`${i18n.language}/Ecosystem`} passHref>
              <div>icon</div>
            </Link>
            <div>
              $
              <CountUp
                start={0}
                end={parseInt(formatEther(totalBalance))}
                formattingFn={(number: any) => {
                  return formatCommaSmallZeroDisits(number);
                }}
                duration={1}
              />
              {/* <span>+</span> */}
              <br />
              {t(`main.top_icon.2`)}
            </div>
          </div>
          <div>
            <Link href={`${i18n.language}/Developers`} passHref>
              <div>icon</div>
            </Link>
            <div>
              <CountUp start={0} end={3000} duration={1} />
              <span>+</span>
              <br />
              {t(`main.top_icon.3`)}
            </div>
          </div>
        </div>
      </div>
    </MainTopWrapper>
  );
};

export default Top;
