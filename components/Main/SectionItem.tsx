import RightArrow from 'assets/images/main/rightarrow@2x.webp';
import LeftArrow from 'assets/images/main/leftarrow@2x.webp';
import Image from 'next/image';
import { Trans } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainSectionItems } from './styles';

const SectionItem: React.FC<{
  section: string[];
  isLeftArrow: boolean;
  link: string;
  onClickEvent: () => void;
}> = ({ section, isLeftArrow, link, onClickEvent }) => {
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);

  return (
    <Link href={link} passHref>
      <MainSectionItems
        isLeftArrow={isLeftArrow}
        onClick={() => onClickEvent()}>
        <div>
          <figure>
            <figcaption>{section[0]}</figcaption>
            <Image
              src={isLeftArrow ? LeftArrow : RightArrow}
              alt={'Arrow'}
              width={35.08}
              height={35.08}
            />
          </figure>
          <h2>{section[1]}</h2>
          <p>
            <Trans>{section[2]}</Trans>
          </p>
        </div>
      </MainSectionItems>
    </Link>
  );
};

export default SectionItem;
