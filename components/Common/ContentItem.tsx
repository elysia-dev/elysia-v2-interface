import Arrow from 'assets/images/developers/arrow.svg';
import useMediaQueryState from 'hooks/useMediaQueryState';
import Link from 'next/link';
import ContentDescription from './ContentDescription';

const ContentItem: React.FC<{
  Icon: any;
  contentName: string;
  link?: string;
  isComingSoon?: boolean;
  description?: string;
  onClickEvent?: () => void;
}> = ({ Icon, contentName, link, isComingSoon, onClickEvent, description }) => {
  const mediaQueryState = useMediaQueryState();

  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onClickEvent?.();
            }}>
            <section>
              <figure>
                {Icon}
                <figcaption>{contentName}</figcaption>
              </figure>
              {!(mediaQueryState.mobile || mediaQueryState.tablet) && (
                <article>
                  <Arrow />
                </article>
              )}
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
            {!(mediaQueryState.mobile || mediaQueryState.tablet) &&
              !isComingSoon && (
                <article>
                  <Arrow />
                </article>
              )}
          </section>
          <ContentDescription description={description} />
        </a>
      )}
    </>
  );
};

export default ContentItem;
