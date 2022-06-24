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
        <h2>{t('governance.sectionFourth.0')}</h2>
      </BottomHeader>
      <BottomContainer>
        <p>{t('governance.sectionFourth.1')}</p>
        <div />
      </BottomContainer>
      <BottomContainer>
        <h2>{t('governance.sectionFourth.2')}</h2>
        <BottomContentBoxContainer>
          <BottomContentBox>
            <ContentBoxFigure>
              <Image src={forum} alt={'forum'} height={65} width={65} />
              <button>Coming Soon</button>
            </ContentBoxFigure>
            <ContentBoxTitle>
              <b>{t('governance.sectionFourth.3')}</b>
              <ArrowImage />
            </ContentBoxTitle>
            <ContentBoxParagraph>
              {t('governance.sectionFourth.4')}
            </ContentBoxParagraph>
          </BottomContentBox>
          <BottomContentBox>
            <ContentBoxFigure>
              <Image src={snapshot} alt={'snapshot'} height={65} width={65} />
              <button>Coming Soon</button>
            </ContentBoxFigure>
            <ContentBoxTitle>
              <b>{t('governance.sectionFourth.5')}</b>
              <ArrowImage />
            </ContentBoxTitle>
            <ContentBoxParagraph>
              {t('governance.sectionFourth.6')}
            </ContentBoxParagraph>
          </BottomContentBox>
        </BottomContentBoxContainer>
      </BottomContainer>
    </BottomArticle>
  );
};

export default GovernanceBottom;
