import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile from 'hooks/useIsMobile';
import Link from 'next/link';

const ContentItem: React.FC<{
  Icon: any;
  contentName: string;
  link: string;
}> = ({ Icon, contentName, link }) => {
  const { isTablet } = useIsMobile();

  return (
    <Link href={link} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <div>
          <div>{Icon}</div>
          <div>{contentName}</div>
          <div> {!isTablet && <Arrow />}</div>
        </div>
      </a>
    </Link>
  );
};

export default ContentItem;
