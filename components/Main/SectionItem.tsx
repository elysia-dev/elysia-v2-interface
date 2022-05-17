import RightArrow from 'assets/images/main/rightarrow@2x.webp';
import LeftArrow from 'assets/images/main/leftarrow@2x.webp';
import Image from 'next/image';
import { Trans } from 'react-i18next';
import Link from 'next/link';

const SectionItem: React.FC<{
  section: string[];
  isLeftArrow: boolean;
  link: string;
}> = ({ section, isLeftArrow, link }) => {
  return (
    <div>
      <div>
        <div>
          <Link href={link} passHref>
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
          </Link>
          <p>{section[1]}</p>
        </div>
        <p>
          <Trans>{section[2]}</Trans>
        </p>
      </div>
    </div>
  );
};

export default SectionItem;
