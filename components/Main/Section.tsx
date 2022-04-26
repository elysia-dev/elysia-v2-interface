import { t } from 'i18next';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import { MainSectionWrapper } from './styles';

const Section = () => {
  const { i18n } = useTranslation();

  return (
    <MainSectionWrapper>
      <div>
        <div>
          <div>
            <span>{t('main.section_el_bridge.0')} -&gt;</span>
            <br />
            <span>{t('main.section_el_bridge.1')}</span>
            <br />
            {t('main.section_el_bridge.2')}
          </div>
          <p>
            <Trans>{t('main.section_el_bridge.3')}</Trans>
          </p>
        </div>
        <div>이미지</div>
      </div>
      <div>
        <div>이미지</div>
        <div>
          <div>
            <Link href={`${i18n.language}/Governance`} passHref>
              <span>&lt;- {t('main.section_governance.0')}</span>
            </Link>
            <br />
            <span>{t('main.section_governance.1')}</span>
          </div>
          <p>
            <Trans>{t('main.section_governance.2')}</Trans>
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <Link href={`${i18n.language}/Ecosystem`} passHref>
              <span>{t('main.section_ecosystem.0')} -&gt;</span>
            </Link>
            <br />
            <span>{t('main.section_ecosystem.1')}</span>
            <br />
            {t('main.section_ecosystem.2')}
          </div>
          <p>
            <Trans>{t('main.section_ecosystem.3')}</Trans>
          </p>
        </div>
        <div>이미지</div>
      </div>
      <div>
        <div>이미지</div>
        <div>
          <div>
            <Link href={`${i18n.language}/Community`} passHref>
              <span>&lt;- {t('main.section_community.0')}</span>
            </Link>
            <br />
            <span>{t('main.section_community.1')}</span>
            <br />
            {t('main.section_community.2')}
          </div>
          <p>
            <Trans>{t('main.section_community.3')}</Trans>
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <Link href={`${i18n.language}/Developers`} passHref>
              <span>{t('main.section_developers.0')} -&gt;</span>
            </Link>
            <br />
            <span>{t('main.section_developers.1')}</span>
            <br />
            {t('main.section_developers.2')}
          </div>
          <p>
            <Trans>{t('main.section_developers.3')}</Trans>
          </p>
        </div>
        <div>이미지</div>
      </div>
      <div>
        <div>이미지</div>
        <div>
          <div>
            <Link href={`${i18n.language}/Documents`} passHref>
              <span> &lt;- {t('main.section_documents.0')}</span>
            </Link>
            <br />
            <span>{t('main.section_documents.1')}</span>
            <br />
            {t('main.section_documents.2')}
          </div>
          <p>
            <Trans>{t('main.section_documents.3')}</Trans>
          </p>
        </div>
      </div>
    </MainSectionWrapper>
  );
};

export default Section;
