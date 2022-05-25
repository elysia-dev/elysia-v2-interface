import PageHeader from 'components/Common/PageHeader';
import ReCAPTCHA from 'react-google-recaptcha';
import { Trans, useTranslation } from 'react-i18next';
import * as gtag from 'lib/gtag';
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
import OnBoardingStep from 'enums/OnBoardingStep';

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

  const selectedStepOne = useCallback((assetType: RealEstateTypes) => {
    setSelectedRealEstateType(assetType);
    gtag.event({
      action: assetType,
      category: 'Asset type',
      label: '',
    });
  }, []);
  const selectedStepTwo = useCallback((nftUsecase: NFTApplicationTypes) => {
    setSelectedNFTAppliaction(nftUsecase);
    gtag.event({
      action: nftUsecase,
      category: 'nftUsecase',
      label: '',
    });
  }, []);

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
          <div>
            <Trans>{t('elbridge.whitepaper.0')}</Trans>
          </div>
          <Link
            href={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            passHref>
            <a target="_blank">
              <div>{t('elbridge.whitepaper.1')}</div>
            </a>
          </Link>
        </ElysiaWhitePaper>
        <Line />
        <QuestionWrapper>
          <div>{t('elbridge.nft_description.0')}</div>
          <NFTDescription active={activeBox.nftDescription}>
            <div
              onClick={() => {
                setActiveBox((prev) => ({
                  ...prev,
                  nftDescription: !prev.nftDescription,
                }));
              }}>
              <div>Q</div>
              <div>{t('elbridge.nft_description.1')}</div>
              <div />
            </div>
            <div>
              <div>{t('elbridge.nft_description.2')}</div>
            </div>
          </NFTDescription>
          <AssetNFTDescription active={activeBox.AssetNFTDescription}>
            <div
              onClick={() => {
                setActiveBox((prev) => ({
                  ...prev,
                  AssetNFTDescription: !prev.AssetNFTDescription,
                }));
              }}>
              <div>Q</div>
              <div>{t('elbridge.asset_nft_description.0')}</div>
              <div />
            </div>
            <div>
              <div>
                <div>{t('elbridge.asset_nft_description.1')}</div>
              </div>
              <div>
                <div>{t('elbridge.asset_nft_description.2')}</div>
              </div>
              <div>
                <div>
                  <Trans>{t('elbridge.asset_nft_description.3')}</Trans>
                </div>
              </div>
            </div>
          </AssetNFTDescription>
        </QuestionWrapper>
        <Line />
        <CreateNFTWrapper>
          <div>{t('elbridge.inquiry_nft.0')}</div>
          <div>{t('elbridge.inquiry_nft.1')}</div>
          <StepOne
            active={currentStep}
            isFinished={finishedStep.stepOne}
            selected={selectedStep.stepOne}>
            <div
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
              <div>{t('elbridge.step1.0')}</div>
            </div>
            <div>
              <div>{t('elbridge.step1.1')}</div>
              <div>
                <div
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.RealEstate
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(RealEstateTypes.RealEstate);
                  }}>
                  <Trans>{t('elbridge.step1.2')}</Trans>
                </div>
                <div
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.LoanReceivables
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(RealEstateTypes.LoanReceivables);
                  }}>
                  <Trans>{t('elbridge.step1.3')}</Trans>
                </div>
                <div
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
                    );
                  }}>
                  <Trans>{t('elbridge.step1.4')}</Trans>
                </div>
                <div
                  style={{
                    background:
                      selectedRealEstateType ===
                      RealEstateTypes.ProjectFinancing
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepOne(RealEstateTypes.ProjectFinancing);
                  }}>
                  <Trans>{t('elbridge.step1.5')}</Trans>
                </div>
              </div>
              <div>{t('elbridge.step1.6')}</div>
              <div
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
                    action: 'nextOfStep1',
                    category: 'Asset Type',
                    label:
                      typeof selectedRealEstateType === 'undefined'
                        ? 'No selected Asset Type'
                        : selectedRealEstateType,
                  });
                }}>
                {t('elbridge.next_button')}
              </div>
            </div>
          </StepOne>
          <StepTwo
            active={currentStep}
            isFinished={finishedStep.stepTwo}
            selected={selectedStep.stepTwo}>
            <div
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
              <div>{t('elbridge.step2.0')}</div>
            </div>
            <div>
              <div>{t('elbridge.step2.1')}</div>
              <div>
                <div
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Trading
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepTwo(NFTApplicationTypes.Trading);
                  }}>
                  {t('elbridge.step2.2')}
                </div>
                <div
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Investment
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepTwo(NFTApplicationTypes.Investment);
                  }}>
                  {t('elbridge.step2.3')}
                </div>
                <div
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Loan
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    selectedStepTwo(NFTApplicationTypes.Loan);
                  }}>
                  {t('elbridge.step2.4')}
                </div>
              </div>
              <div>{t('elbridge.step2.5')}</div>
              <div
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
                    action: 'nextOfStep2',
                    category: ' nftUsecase',
                    label:
                      typeof selectedNFTAppliaction === 'undefined'
                        ? 'No selected nftusecase'
                        : selectedNFTAppliaction,
                  });
                }}>
                {t('elbridge.next_button')}
              </div>
            </div>
          </StepTwo>
          <StepThree
            active={currentStep}
            isFinished={finishedStep.stepThree}
            selected={selectedStep.stepThree}>
            <div
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
              <div>{t('elbridge.step3.0')}</div>
            </div>
            <div>
              <div>{t('elbridge.step3.1')}</div>
              <div>
                <input
                  placeholder={t('elbridge.step3.2')}
                  value={realEstateAddress}
                  onChange={(e) => {
                    setRealEstateAddress(e.target.value);
                    gtag.event({
                      action: 'inputAddress',
                      category: 'realEstateAddress',
                      label: '',
                    });
                  }}
                />
              </div>
              <div
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
                    action: 'nextOfStep3',
                    category: 'realEstateAddress',
                    label: '',
                  });
                }}>
                {t('elbridge.next_button')}
              </div>
            </div>
          </StepThree>
          <StepFour
            active={currentStep}
            isFinished={finishedStep.stepFour}
            selected={selectedStep.stepFour}>
            <div
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
              <div>{t('elbridge.step4.0')}</div>
            </div>
            <div>
              <div>{t('elbridge.step4.1')}</div>
              <div>
                <input
                  placeholder="ex) elysialand@elysia.land"
                  value={userEmailAddress}
                  onChange={(e) => {
                    setUserEmailAddress(e.target.value);
                    gtag.event({
                      action: 'inputEmailAddress',
                      category: 'emailAddress',
                      label: '',
                    });
                  }}
                />
              </div>
              <div
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
                    action: 'nextOfStep4',
                    category: 'emailAddress',
                    label: '',
                  });
                }}>
                {t('elbridge.next_button')}
              </div>
            </div>
          </StepFour>
          <StepFive
            active={currentStep}
            isFinished={finishedStep.stepFive}
            selected={selectedStep.stepFive}>
            <div
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
              <div>{t('elbridge.step5.0')}</div>
            </div>
            <div>
              <div>{t('elbridge.step5.1')}</div>
              <div>
                <textarea
                  value={etc}
                  onChange={(e) => {
                    setEtc(e.target.value);
                    gtag.event({
                      action: ' inputOthers',
                      category: 'others',
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
                          action: ' agreement',
                          category: 'others',
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
                        action: 'checkBot',
                        category: 'others',
                        label: '',
                      });
                    }}
                    onExpired={() => setIsRecaptcha(false)}
                    hl={i18n.language}
                  />
                </div>
              </div>
              <div
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
                    action: 'submit',
                    category: 'others',
                    label: '',
                  });
                }}>
                {t('elbridge.step5.3')}
              </div>
            </div>
          </StepFive>
        </CreateNFTWrapper>
      </SectionWrapper>
    </>
  );
};

export default Section;
