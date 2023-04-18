import React from 'react';
import ArrowWhite from 'assets/images/developers/arrow_white.svg';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ElysiaToken2 from 'assets/images/elysia_token2.svg';
import Image from 'next/image';
import { ELYFI_LINK_EN, ELYFI_LINK_KO } from 'constant';

export const LinkWrapper = styled.article`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 8vw;
  display: flex;
  justify-content: center;
  z-index: 2;
  height: 58px;

  > div {
    width: 90%;
    max-width: 1639px;
    display: flex;
    justify-content: flex-end;

    > article {
      width: 370px;
      box-shadow: 0px 0px 6px #0e2149;
      border-radius: 20px;
      opacity: 1;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      @media (max-width: 768px) {
        width: 100%;
      }

      section {
        padding: 16px 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        border-radius: 20px;
        cursor: pointer;
        transition: all 1s ease;
        &:hover {
          border: none;
          background: rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          display: flex;
          justify-content: center;
        }
        div.arrow {
          display: flex;
          justify-content: center;
        }

        > span {
          display: flex;
          @media (max-width: 768px) {
            margin-right: 15px;
          }
          > h2 {
            margin-left: 10px;
          }
        }
        h2 {
          line-height: 26px;
          color: #ffffff;
        }
      }
    }
  }
`;

const ElyfiLink = () => {
  const { t, i18n } = useTranslation();
  return (
    <LinkWrapper>
      <div>
        <article>
          <section
            onClick={() => {
              window.open(
                i18n.language === 'ko' ? ELYFI_LINK_KO : ELYFI_LINK_EN,
                '_blank',
              );
            }}>
            <span>
              <ElysiaToken2 />
              {/* <Image
                src={ElysiaToken2}
                alt={'elysia-token'}
                width={26}
                height={26}
              /> */}
              <h2>{t('main.CTAButton.0')}</h2>
            </span>
            {<div className="arrow">{<ArrowWhite />}</div>}
          </section>
        </article>
      </div>
    </LinkWrapper>
  );
};
export default ElyfiLink;
