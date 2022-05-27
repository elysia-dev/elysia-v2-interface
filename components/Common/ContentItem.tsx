import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile from 'hooks/useIsMobile';
import Link from 'next/link';
import ContentDescription from './ContentDescription';

const ContentItem: React.FC<{
  Icon: any;
  contentName: string;
  link?: string;
  isComingSoon?: boolean;
  description?: string;
}> = ({ Icon, contentName, link, isComingSoon, description }) => {
  const { isTablet } = useIsMobile();

  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <section>
              <figure>
                {Icon}
                <figcaption>{contentName}</figcaption>
              </figure>
              <article>{!isTablet && <Arrow />}</article>
            </section>
            <ContentDescription description={description} />
          </a>
        </Link>
      ) : (
        <a target="_blank" rel="noopener noreferrer">
          <section>
            <figure>
              {Icon}
              <figcaption>{contentName}</figcaption>
            </figure>
            <article>{!isTablet && !isComingSoon && <Arrow />}</article>
          </section>
          <ContentDescription description={description} />
        </a>
      )}
    </>
  );
};

export default ContentItem;
