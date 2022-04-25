import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { MainTopWrapper } from './styles';
import useTotalStakedBalance from 'hooks/useTotalStakedBalance';
import { formatCommaSmallZeroDisits } from 'utils/formatters';
import { formatEther } from 'ethers/lib/utils';

const Top = () => {
  const { i18n } = useTranslation();
  const { totalBalance } = useTotalStakedBalance();

  return (
    <MainTopWrapper>
      <div>
        <div>
          <div>ELYSIA PROTOCOL</div>
          <div>Real world asset tokenization DAO.</div>
          엘리시아는 부동산과 같은 실물자산을 토큰화하고,
          <br /> 이를 탈중앙화조직 DAO를 이용해 유동화할 수 있는 서비스를
          제공합니다.
          <br /> 사용자는 이 토큰을 토대로 디파이 등 다양한 블록체인 생태계에서
          활동할 수 있습니다.
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
              Changed Real Estate
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
              Community Delegates
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
              <span>+</span>
              <br />
              Total Value Locked
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
              Github commit
            </div>
          </div>
        </div>
      </div>
    </MainTopWrapper>
  );
};

export default Top;
