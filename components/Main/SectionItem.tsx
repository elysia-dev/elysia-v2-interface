import RightArrow from 'assets/images/main/rightarrow@2x.webp';
import LeftArrow from 'assets/images/main/leftarrow@2x.webp';
import Image from 'next/image';
import { Trans } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SectionItem: React.FC<{
  section: string[];
  isLeftArrow: boolean;
  link: string;
}> = ({ section, isLeftArrow, link }) => {
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);

  return (
    <Link href={link} passHref>
      <div>
        <div>
          <div>
            {isLeftArrow ? (
              <span>
                <Image
                  src={LeftArrow}
                  alt={'LeftArrow'}
                  width={35.08}
                  height={35.08}
                />
                <span> {section[0]}</span>
              </span>
            ) : (
              <span>
                <span> {section[0]}</span>
                <Image
                  src={RightArrow}
                  alt={'RightArrow'}
                  width={35.08}
                  height={35.08}
                />
              </span>
            )}
            <p>{section[1]}</p>
          </div>
          <p
            style={{
              fontSize: lng === 'ko' ? '1.2rem' : '1.375rem',
            }}>
            <Trans>{section[2]}</Trans>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SectionItem;
