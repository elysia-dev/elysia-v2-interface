import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile from 'hooks/useIsMobile';
import Link from 'next/link';

const ContentItem: React.FC<{
  Icon: any;
  contentName: string;
  link?: string;
  isComingSoon?: boolean;
}> = ({ Icon, contentName, link, isComingSoon }) => {
  const { isTablet } = useIsMobile();

  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <div>
              <div>{Icon}</div>
              <div>{contentName}</div>
              <div> {!isTablet && <Arrow />}</div>
            </div>
          </a>
        </Link>
      ) : (
        <a target="_blank" rel="noopener noreferrer">
          <div>
            <div>{Icon}</div>
            <div>{contentName}</div>
            <div> {!isTablet && !isComingSoon && <Arrow />}</div>
          </div>
        </a>
      )}
    </>
  );
};

export default ContentItem;
