import { Trans, useTranslation } from 'react-i18next';
import { CommunityWrapper, SectionWrapper } from './styles';

const Section = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div>
        <div>
          <span>{t('community.0')}</span>
          <br />
          <span>{t('community.1')}</span>
          <br />
          <Trans>{t('community.2')}</Trans>
        </div>
      </div>
      <div>
        <div>
          <div>{t('community.3')}</div>
          <div>
            <div>
              <div>아이콘</div>
              <div>Discode</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Telegram</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Kakaotalk</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>WeChat</div>
              <div>화살표</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>{t('community.4')}</div>
          <div>
            <div>
              <div>아이콘</div>
              <div>Discode</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Telegram</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Kakaotalk</div>
              <div>화살표</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>{t('community.5')}</div>
          <div>
            <div>
              <div>아이콘</div>
              <div>Discode</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Telegram</div>
              <div>화살표</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>{t('community.6')}</div>
          <div>
            <div>
              <div>아이콘</div>
              <div>Discode</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Telegram</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>Kakaotalk</div>
              <div>화살표</div>
            </div>
            <div>
              <div>아이콘</div>
              <div>WeChat</div>
              <div>화살표</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;
