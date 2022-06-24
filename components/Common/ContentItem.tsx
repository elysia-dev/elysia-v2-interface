import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile, { MediaQueryState } from 'hooks/useIsMobile';
import Link from 'next/link';
import { Trans } from 'react-i18next';

const ContentItem: React.FC<{
  Icon: any;
  contentName: string;
  link?: string;
  isComingSoon?: boolean;
  description?: string;
  onClickEvent?: () => void;
}> = ({ Icon, contentName, link, isComingSoon, onClickEvent, description }) => {
  const { mediaQueryState } = useIsMobile();

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
              {mediaQueryState !== MediaQueryState.Tablet && (
                <article>
                  <Arrow />
                </article>
              )}
            </section>
            <p>
              <Trans>{description}</Trans>
            </p>
          </a>
        </Link>
      ) : (
        <a target="_blank" rel="noopener noreferrer">
          <section>
            <figure>
              {Icon}
              <figcaption>{contentName}</figcaption>
            </figure>
            {mediaQueryState !== MediaQueryState.Tablet && !isComingSoon && (
              <article>
                <Arrow />
              </article>
            )}
          </section>
          <p>
            <Trans>{description}</Trans>
          </p>
        </a>
      )}
    </>
  );
};

export default ContentItem;
