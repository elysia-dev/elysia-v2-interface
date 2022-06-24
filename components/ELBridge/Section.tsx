import PageHeader from 'components/Common/PageHeader';
import ReCAPTCHA from 'react-google-recaptcha';
import { Trans, useTranslation } from 'react-i18next';
import {
  AssetNFTDescription,
  CreateNFTWrapper,
  ElysiaWhitePaper,
  NFTDescription,
  SectionWrapper,
  StepOne,
  StepThree,
  StepTwo,
  StepFour,
  StepFive,
  Line,
  QuestionWrapper,
  ELbridgeImage,
} from './styles';
import { useCallback, useMemo, useState } from 'react';
import RealEstateTypes from 'enums/ RealEstateTypes';
import NFTApplicationTypes from 'enums/ NFTApplicationTypes';
import Link from 'next/link';
import axios from 'axios';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const Section = () => {
  const { t, i18n } = useTranslation();
  const [activeBox, setActiveBox] = useState<{
    nftDescription?: boolean;
    AssetNFTDescription?: boolean;
    legalIssuesDescription?: boolean;
  }>({
    nftDescription: undefined,
    AssetNFTDescription: undefined,
    legalIssuesDescription: undefined,
  });
  const [selectedRealEstateType, setSelectedRealEstateType] = useState<
    string | undefined
  >();
  const [selectedNFTAppliaction, setSelectedNFTAppliaction] = useState<
    string | undefined
  >();
  const [currentStep, setCurrentStep] = useState('');
  const [selectedStep, setSelectedStep] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    stepFive: false,
  });
  const [realEstateAddress, setRealEstateAddress] = useState<
    string | undefined
  >();
  const [userEmailAddress, setUserEmailAddress] = useState<
    string | undefined
  >();
  const [etc, setEtc] = useState<string | undefined>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);
  const [finishedStep, setFinishedStep] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    stepFive: false,
  });

  const sendContact = () => {
    axios
      .post('https://api.elysia.land/land/contact', {
        email: userEmailAddress,
        content:
          '\nreal estate type : ' +
          selectedRealEstateType +
          '\nNFT Appliaction: ' +
          selectedNFTAppliaction +
          '\nreal estate address : ' +
          realEstateAddress +
          '\nuser email address : ' +
          userEmailAddress +
          '\netc : ' +
          etc,
      })
      .then(() => {
        alert(t('elbridge.contact'));
      })
      .catch(() => {
        alert(t('elbridge.fail'));
      });
  };

  const selectedStepOne = useCallback(
    (
      assetType: RealEstateTypes,
      action: GoogleAnalyticsAction,
      category: GoogleAnalyticsCategory,
    ) => {
      setSelectedRealEstateType(assetType);
      gtag.event({
        action: action,
        category: category,
        label: '',
      });
    },
    [],
  );
  const selectedStepTwo = useCallback(
    (
      nftUsecase: NFTApplicationTypes,
      action: GoogleAnalyticsAction,
      category: GoogleAnalyticsCategory,
    ) => {
      setSelectedNFTAppliaction(nftUsecase);
      gtag.event({
        action: action,
        category: category,
        label: '',
      });
    },
    [],
  );

  const isSubmit = useMemo(() => {
    return (
      isChecked &&
      isRecaptcha &&
      (userEmailAddress ||
        realEstateAddress ||
        selectedRealEstateType ||
        selectedNFTAppliaction ||
        etc)
    );
  }, [
    isChecked,
    isRecaptcha,
    userEmailAddress,
    realEstateAddress,
    selectedRealEstateType,
    selectedNFTAppliaction,
    etc,
  ]);

  return (
    <>
      <ELbridgeImage />
      <SectionWrapper>
        <PageHeader
          headers={[
            t('elbridge.top.0'),
            t('elbridge.top.1'),
            t('elbridge.top.2'),
          ]}
        />
        <ElysiaWhitePaper>
          <p>
            <Trans>{t('elbridge.whitepaper.0')}</Trans>
          </p>
          <Link
            href={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.ElBridgeWhitepaper,
                  category: GoogleAnalyticsCategory.ELBridge,
                  label: '',
                })
              }>
              <b>{t('elbridge.whitepaper.1')}</b>
            </a>
          </Link>
        </ElysiaWhitePaper>
        <Line />
        <QuestionWrapper>
          <h2>{t('elbridge.nft_description.0')}</h2>
          <NFTDescription active={activeBox.nftDescription}>
            <div
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.ElBridgeFAQNFT,
                  category: GoogleAnalyticsCategory.ELBridge,
                  label: '',
                });
                setActiveBox((prev) => ({
                  ...prev,
                  nftDescription: !prev.nftDescription,
                }));
              }}>
              <span>Q</span>
              <p>{t('elbridge.nft_description.1')}</p>
              <div />
            </div>
            <section>
              <p>{t('elbridge.nft_description.2')}</p>
            </section>
          </NFTDescription>
          <AssetNFTDescription active={activeBox.AssetNFTDescription}>
            <div
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.ElBridgeFAQWhyNFT,
                  category: GoogleAnalyticsCategory.ELBridge,
                  label: '',
                });
                setActiveBox((prev) => ({
                  ...prev,
                  AssetNFTDescription: !prev.AssetNFTDescription,
                }));
              }}>
              <span>Q</span>
              <p>{t('elbridge.asset_nft_description.0')}</p>
              <div />
            </div>
            <section>
              <p>{t('elbridge.asset_nft_description.1')}</p>
              <p>{t('elbridge.asset_nft_description.2')}</p>
              <p>
                <Trans>{t('elbridge.asset_nft_description.3')}</Trans>
              </p>
            </section>
          </AssetNFTDescription>
        </QuestionWrapper>
        <Line />
        <CreateNFTWrapper>
          <strong>{t('elbridge.inquiry_nft.0')}</strong>
          <h3>{t('elbridge.inquiry_nft.1')}</h3>
          <StepOne
            active={currentStep}
            isFinished={finishedStep.stepOne}
            selected={selectedStep.stepOne}>
            <section
              onClick={() => {
                setFinishedStep({
                  ...finishedStep,
                  stepOne: selectedStep.stepOne,
                });
                setSelectedStep((prev) => ({
                  ...prev,
                  stepOne: !prev.stepOne,
                }));
              }}>
              <h2>{t('elbridge.step1.0')}</h2>
            </section>
            <section>
              <p>{t('elbridge.step1.1')}</p>
              <section className="button-wrapper">
                <button
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.RealEstate
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(
                      RealEstateTypes.RealEstate,
                      GoogleAnalyticsAction.ElBridgeInquiryRealEstate,
                      GoogleAnalyticsCategory.AssetType,
                    );
                  }}>
                  <Trans>{t('elbridge.step1.2')}</Trans>
                </button>
                <button
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.LoanReceivables
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(
                      RealEstateTypes.LoanReceivables,
                      GoogleAnalyticsAction.ElBridgeInquiryLoanReceivables,
                      GoogleAnalyticsCategory.AssetType,
                    );
                  }}>
                  <Trans>{t('elbridge.step1.3')}</Trans>
                </button>
                <button
                  style={{
                    background:
                      selectedRealEstateType ===
                      RealEstateTypes.PrincipalAndInterestReceivables
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(
                      RealEstateTypes.PrincipalAndInterestReceivables,
                      GoogleAnalyticsAction.ElBridgeInquiryPrincipal,
                      GoogleAnalyticsCategory.AssetType,
                    );
                  }}>
                  <Trans>{t('elbridge.step1.4')}</Trans>
                </button>
                <button
                  style={{
                    background:
                      selectedRealEstateType ===
                      RealEstateTypes.ProjectFinancing
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(
                      RealEstateTypes.ProjectFinancing,
                      GoogleAnalyticsAction.ElBridgeInquiryProjectFinancing,
                      GoogleAnalyticsCategory.AssetType,
                    );
                  }}>
                  <Trans>{t('elbridge.step1.5')}</Trans>
                </button>
              </section>
              <span>{t('elbridge.step1.6')}</span>
              <button
                onClick={() => {
                  setSelectedStep((prev) => ({
                    ...prev,
                    stepOne: !prev.stepOne,
                    stepTwo: true,
                  }));
                  setFinishedStep((prev) => ({
                    ...prev,
                    stepOne: true,
                    stepTwo: prev.stepTwo && false,
                  }));
                  gtag.event({
                    action: GoogleAnalyticsAction.ElBridgeInquiryNextOfStep1,
                    category: GoogleAnalyticsCategory.AssetType,
                    label:
                      typeof selectedRealEstateType === 'undefined'
                        ? ''
                        : selectedRealEstateType,
                  });
                }}>
                {t('elbridge.next_button')}
              </button>
            </section>
          </StepOne>
          <StepTwo
            active={currentStep}
            isFinished={finishedStep.stepTwo}
            selected={selectedStep.stepTwo}>
            <section
              onClick={() => {
                setFinishedStep({
                  ...finishedStep,
                  stepTwo: selectedStep.stepTwo,
                });
                setSelectedStep((prev) => ({
                  ...prev,
                  stepTwo: !prev.stepTwo,
                }));
              }}>
              <h2>{t('elbridge.step2.0')}</h2>
            </section>
            <section>
              <p>{t('elbridge.step2.1')}</p>
              <section className="button-wrapper">
                <button
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Trading
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepTwo(
                      NFTApplicationTypes.Trading,
                      GoogleAnalyticsAction.ElBridgeInquiryTrade,
                      GoogleAnalyticsCategory.NftUsecase,
                    );
                  }}>
                  {t('elbridge.step2.2')}
                </button>
                <button
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Investment
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepTwo(
                      NFTApplicationTypes.Investment,
                      GoogleAnalyticsAction.ElBridgeInquiryInvestment,
                      GoogleAnalyticsCategory.NftUsecase,
                    );
                  }}>
                  {t('elbridge.step2.3')}
                </button>
                <button
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Loan
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepTwo(
                      NFTApplicationTypes.Loan,
                      GoogleAnalyticsAction.ElBridgeInquiryLoan,
                      GoogleAnalyticsCategory.NftUsecase,
                    );
                  }}>
                  {t('elbridge.step2.4')}
                </button>
              </section>
              <span>{t('elbridge.step2.5')}</span>
              <button
                onClick={() => {
                  setSelectedStep((prev) => ({
                    ...prev,
                    stepTwo: false,
                    stepThree: true,
                  }));
                  setFinishedStep((prev) => ({
                    ...prev,
                    stepTwo: true,
                    stepThree: prev.stepThree && false,
                  }));
                  gtag.event({
                    action: GoogleAnalyticsAction.ElBridgeInquiryNextOfStep2,
                    category: GoogleAnalyticsCategory.NftUsecase,
                    label:
                      typeof selectedNFTAppliaction === 'undefined'
                        ? ''
                        : selectedNFTAppliaction,
                  });
                }}>
                {t('elbridge.next_button')}
              </button>
            </section>
          </StepTwo>
          <StepThree
            active={currentStep}
            isFinished={finishedStep.stepThree}
            selected={selectedStep.stepThree}>
            <section
              onClick={() => {
                setFinishedStep({
                  ...finishedStep,
                  stepThree: selectedStep.stepThree,
                });
                setSelectedStep((prev) => ({
                  ...prev,
                  stepThree: !prev.stepThree,
                }));
              }}>
              <h2>{t('elbridge.step3.0')}</h2>
            </section>
            <section>
              <p>{t('elbridge.step3.1')}</p>
              <input
                placeholder={t('elbridge.step3.2')}
                value={realEstateAddress}
                onChange={(e) => {
                  setRealEstateAddress(e.target.value);
                  gtag.event({
                    action: GoogleAnalyticsAction.ElBridgeInquiryInputAddress,
                    category: GoogleAnalyticsCategory.RealEstateAddress,
                    label: '',
                  });
                }}
              />
              <button
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                }}
                onClick={() => {
                  setSelectedStep((prev) => ({
                    ...prev,
                    stepThree: false,
                    stepFour: true,
                  }));
                  setFinishedStep((prev) => ({
                    ...prev,
                    stepThree: true,
                  }));
                  gtag.event({
                    action: GoogleAnalyticsAction.ElBridgeInquiryNextOfStep3,
                    category: GoogleAnalyticsCategory.RealEstateAddress,
                    label: '',
                  });
                }}>
                {t('elbridge.next_button')}
              </button>
            </section>
          </StepThree>
          <StepFour
            active={currentStep}
            isFinished={finishedStep.stepFour}
            selected={selectedStep.stepFour}>
            <section
              onClick={() => {
                setFinishedStep({
                  ...finishedStep,
                  stepFour: selectedStep.stepFour,
                });
                setSelectedStep((prev) => ({
                  ...prev,
                  stepFour: !prev.stepFour,
                }));
              }}>
              <h2>{t('elbridge.step4.0')}</h2>
            </section>
            <section>
              <p>{t('elbridge.step4.1')}</p>
              <input
                placeholder="ex) cs@elysia.land"
                value={userEmailAddress}
                onChange={(e) => {
                  setUserEmailAddress(e.target.value);
                  gtag.event({
                    action:
                      GoogleAnalyticsAction.ElBridgeInquiryInputEmailAddress,
                    category: GoogleAnalyticsCategory.EmailAddress,
                    label: '',
                  });
                }}
              />
              <button
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                }}
                onClick={() => {
                  setSelectedStep((prev) => ({
                    ...prev,
                    stepFour: false,
                    stepFive: true,
                  }));
                  setFinishedStep((prev) => ({
                    ...prev,
                    stepFour: true,
                  }));
                  gtag.event({
                    action: GoogleAnalyticsAction.ElBridgeInquiryNextOfStep4,
                    category: GoogleAnalyticsCategory.EmailAddress,
                    label: '',
                  });
                }}>
                {t('elbridge.next_button')}
              </button>
            </section>
          </StepFour>
          <StepFive
            active={currentStep}
            isFinished={finishedStep.stepFive}
            selected={selectedStep.stepFive}>
            <section
              onClick={() => {
                setFinishedStep({
                  ...finishedStep,
                  stepFive: selectedStep.stepFive,
                });
                setSelectedStep((prev) => ({
                  ...prev,
                  stepFive: !prev.stepFive,
                }));
              }}>
              <h2>{t('elbridge.step5.0')}</h2>
            </section>
            <section>
              <p>{t('elbridge.step5.1')}</p>
              <section>
                <textarea
                  value={etc}
                  onChange={(e) => {
                    setEtc(e.target.value);
                    gtag.event({
                      action: GoogleAnalyticsAction.ElBridgeInquiryInputOthers,
                      category: GoogleAnalyticsCategory.Others,
                      label: '',
                    });
                  }}
                />
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={(e) => {
                        setIsChecked(e.target.checked);
                        if (!e.target.checked) return;
                        gtag.event({
                          action:
                            GoogleAnalyticsAction.ElBridgeInquiryAgreement,
                          category: GoogleAnalyticsCategory.Others,
                          label: '',
                        });
                      }}
                    />
                    <label htmlFor="checkbox"></label>
                  </div>
                  <div>
                    {t('elbridge.step5.2')} ({' '}
                    <Link href={`/${i18n.language}/Policy`} passHref>
                      <a>
                        <span>Privacy Policy</span>
                      </a>
                    </Link>{' '}
                    )
                  </div>
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey={'6LdAI24aAAAAAG0QIW1ZdyfsQMHrW3uwskzlVTH7'}
                    onChange={() => {
                      setIsRecaptcha(true);
                      gtag.event({
                        action: GoogleAnalyticsAction.ElBridgeInquiryCheckBot,
                        category: GoogleAnalyticsCategory.Others,
                        label: '',
                      });
                    }}
                    onExpired={() => setIsRecaptcha(false)}
                    hl={i18n.language}
                  />
                </div>
              </section>
              <button
                style={{
                  backgroundColor: isSubmit ? '#000000' : '#b6b6b6',
                  color: isSubmit ? '#ffffff' : '#3b3b3b',
                }}
                onClick={() => {
                  if (!isSubmit) return;
                  sendContact();
                  setSelectedStep((prev) => ({
                    ...prev,
                    stepFive: false,
                  }));
                  setFinishedStep((prev) => ({
                    ...prev,
                    stepFive: true,
                  }));
                  gtag.event({
                    action: GoogleAnalyticsAction.ElBridgeInquirySubmit,
                    category: GoogleAnalyticsCategory.Others,
                    label: '',
                  });
                  setSelectedNFTAppliaction('');
                  setSelectedRealEstateType('');
                  setUserEmailAddress('');
                  setRealEstateAddress('');
                  setEtc('');
                }}>
                {t('elbridge.step5.3')}
              </button>
            </section>
          </StepFive>
        </CreateNFTWrapper>
      </SectionWrapper>
    </>
  );
};

export default Section;
