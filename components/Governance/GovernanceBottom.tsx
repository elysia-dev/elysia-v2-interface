import forum from 'assets/images/elysia-forum@2x.png';
import snapshot from 'assets/images/Snapshot_logo@2x.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ArrowImage from 'assets/images/community/arrow.svg';
import {
  BottomArticle,
  BottomContainer,
  BottomContentBox,
  BottomContentBoxContainer,
  BottomHeader,
  ContentBoxFigure,
  ContentBoxParagraph,
  ContentBoxTitle,
  LeftLineCounter,
} from './style';

const GovernanceBottom = () => {
  const { t } = useTranslation();

  return (
    <BottomArticle>
      <BottomHeader>
        <LeftLineCounter>
          <p>3</p>
        </LeftLineCounter>
        <h2>{t('governance.section_fourth.0')}</h2>
      </BottomHeader>
      <BottomContainer>
        <p>{t('governance.section_fourth.1')}</p>
        <div />
      </BottomContainer>
      <BottomContainer>
        <h2>{t('governance.section_fourth.5')}</h2>
        <BottomContentBoxContainer>
          <BottomContentBox>
            <ContentBoxFigure>
              <Image src={forum} alt={'forum'} height={65} width={65} />
            </ContentBoxFigure>
            <ContentBoxTitle>
              <b>{t('governance.section_fourth.6')}</b>
              <a
                href={'https://forum.elysia.land'}
                target="_blank"
                rel="noopener noreferrer">
                <ArrowImage />
              </a>
            </ContentBoxTitle>
            <ContentBoxParagraph>
              {t('governance.section_fourth.7')}
            </ContentBoxParagraph>
          </BottomContentBox>

          <BottomContentBox>
            <ContentBoxFigure>
              <Image src={snapshot} alt={'snapshot'} height={65} width={65} />
            </ContentBoxFigure>
            <ContentBoxTitle>
              <b>{t('governance.section_fourth.8')}</b>
              <a
                href={'https://snapshot.org/#/elysia.eth/'}
                target="_blank"
                rel="noopener noreferrer">
                <ArrowImage />
              </a>
            </ContentBoxTitle>
            <ContentBoxParagraph>
              {t('governance.section_fourth.9')}
            </ContentBoxParagraph>
          </BottomContentBox>
        </BottomContentBoxContainer>
      </BottomContainer>
    </BottomArticle>
  );
};

export default GovernanceBottom;
