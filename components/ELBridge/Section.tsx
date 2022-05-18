import PageHeader from 'components/Common/PageHeader';
import { useTranslation } from 'react-i18next';
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
import { useState } from 'react';
import RealEstateTypes from 'enums/ RealEstateTypes';
import OnBoardingStep from 'enums/OnBoardingStep';
import NFTApplicationTypes from 'enums/ NFTApplicationTypes';

const Section = () => {
  const { t } = useTranslation();
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
  const [currentStep, setCurrentStep] = useState(OnBoardingStep.RealEstateType);

  return (
    <>
      <ELbridgeImage />
      <SectionWrapper>
        <PageHeader
          headers={[
            'EL Bridge (On-boarding)',
            'Real world asset into digital NFT',
            '사용자들은 DAO를 통해 실제 부동산이 NFT로 만들어지는 과정에 참여하고, 제대로 변환이 이루어지는지 감시할 수 있습니다.',
          ]}
        />
        <ElysiaWhitePaper>
          <div>
            현재 변환과정을 실제 스마트 컨트랙트 상에서 체험해볼 수 있는 기능을
            개발중입니다. <br />
            자세한 변환과정은 ELYSIA 백서(Issuance)에서 확인할 수 있습니다.
          </div>
          <div>ELYSIA 백서 바로가기</div>
        </ElysiaWhitePaper>
        <Line />
        <QuestionWrapper>
          <div>자주 묻는 질문</div>
          <NFTDescription active={activeBox.nftDescription}>
            <div>
              <div>Q</div>
              <div>NFT란 무엇인가요?</div>
              <div
                onClick={() => {
                  setActiveBox((prev) => ({
                    ...prev,
                    nftDescription: !prev.nftDescription,
                  }));
                }}
              />
            </div>
            {/* <div>
                * 요즘 많이 등장하는 NFT (Non-Fungible Token)는 “대체 불가능한
                토큰 (코인)”이라는 뜻입니다.
              </div>
              <div>
                <div>*</div>
                <div>
                  &nbsp;블록체인 기술을 이용한 금융 시스템에서는 현실세계에서
                  존재하는 자산을 1:1로 매칭시켜주는 디지털 원본이 필요하고,
                  <br /> 이 디지털 원본을 NFT라는 형태로 만들어서 블록체인상의
                  거래에서 하나의 증명서처럼 활용할 수 있습니다.
                </div>
              </div> */}
            {/* <div>이미지</div> */}
          </NFTDescription>
          <AssetNFTDescription active={activeBox.AssetNFTDescription}>
            <div>
              <div>Q</div>
              <div>왜 부동산 NFT가 필요한가요?</div>
              <div
                onClick={() => {
                  setActiveBox((prev) => ({
                    ...prev,
                    AssetNFTDescription: !prev.AssetNFTDescription,
                  }));
                }}
              />
            </div>
            {/* <div>
                <div>*</div>
                <div>
                  최근 많은 실물자산 (미술품, 저작권을 가진 창작물 등)이 NFT로
                  만들어져서 블록체인상에서 활발하게 거래되고 있습니다. <br />
                  이 NFT들은 거래내역이 안전하게 블록체인상에 기록되기 때문에
                  사기나 위조 걱정없이 여러 금융시스템 (매매, 담보대출,
                  <br />
                  투자 등) 에서 사용될 수 있습니다.
                </div>
              </div>
              <div>
                <div>*</div>
                <div>
                  이런 거래의 편의성 및 자금 유입의 유동성 측면에도 불구하고,
                  아직까지 그 누구도 부동산을 NFT화시켜서 기존 블록체인 <br />
                  금융시스템에 편입한 사례는 없었습니다. 부동산은 전통
                  금융시장에서도 복잡한 여러 서류를 갖춰야하고, 큰 돈이 오가는
                  <br />
                  시장이기에 진입장벽이 높은 편이기 때문입니다. ELYSIA에서는
                  기존에 여러 부동산을 거래했던 경험 및 별도 블록체인
                  <br />
                  기술팀 (스마트 컨트랙트 등)을 운영한 경험을 바탕으로, 세계
                  최초로 부동산 NFT를 통한 경제 시스템을 만들고자 합니다.
                </div>
              </div>
              <div>
                <div>*</div>
                <div>
                  실물자산인 부동산을 토대로 NFT를 만든다면 아래와 같은 장점이
                  있습니다.
                  <br />
                  1. 기존 블록체인 금융시스템 (디파이 등) 을 이용한 부동산 NFT
                  담보 대출 <br />
                  2. 가상화폐를 이용해 더 많은 수요자들에게 투자유치 or 판매{' '}
                  <br />
                  3. 가상세계에서 부동산 NFT 그 자체를 이용한 가치 창출 <br />
                  4. DAO를 이용한 투자금 조성
                </div>
              </div>
            </div>
            <div>이미지</div> */}
          </AssetNFTDescription>
          {/* <LegalIssuesDescription active={activeBox.legalIssuesDescription}>
            <div>
              <div>Q</div>
              <div>법적인 이슈는 없나요?</div>
              <div
                onClick={() => {
                  setActiveBox((prev) => ({
                    ...prev,
                    legalIssuesDescription: !prev.legalIssuesDescription,
                  }));
                }}
              />
            </div>
            <div>
                <div>*</div>
                <div>
                  현재 명확하게 규정된 관련 법규는 존재하지 않으며, ELYSIA에서는
                  지속적으로 법무법인과의 논의를 통해 혹시라도 <br />
                  있을 법적인 이슈에 대응하고 있습니다. 또한 부동산 NFT를 만드는
                  과정에서 의도적인 서류 위조/조작 행위를 방지하기 <br />
                  위해 KYC (Know Your Customer) 과정에서 제출한 서류가 본인임을
                  확인하고, 허위로 작성되었을 경우 법적 책임을 <br />
                  받는다는 손해배상 계약을 체결합니다.
                </div>
              </div>
            <div>이미지</div>
          </LegalIssuesDescription> */}
        </QuestionWrapper>
        <Line />
        <CreateNFTWrapper>
          {/* <CreatedNFTCount>
            지금까지 <span>총 {totalCreatedNFT}명</span>이 부동산 NFT가
            만들어지는 과정을 체험했습니다.
            <br />
            아래 과정을 통해 부동산이 어떻게 NFT로 만들어지는지 확인해보세요!
          </CreatedNFTCount> */}
          <StepOne active={currentStep}>
            <div>
              <div>1. 부동산 유형 선택</div>
            </div>
            <div>
              <div>
                NFT로 만들고 싶은 (토큰화하고 싶은) 부동산 유형을 선택해주세요!
              </div>
              <div>
                <div
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.RealEstateToken
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedRealEstateType(RealEstateTypes.RealEstateToken);
                  }}>
                  부동산 토큰
                  <br />
                  (Real estate Token)
                </div>
                <div
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.ABTokenAType
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedRealEstateType(RealEstateTypes.ABTokenAType);
                  }}>
                  대출채권
                  <br />
                  (ABToken - a type)
                </div>
                <div
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.ABTokenBType
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedRealEstateType(RealEstateTypes.ABTokenBType);
                  }}>
                  원리금 수취권
                  <br />
                  (ABToken - b type)
                </div>
                <div
                  style={{
                    background:
                      selectedRealEstateType === RealEstateTypes.PFToken
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedRealEstateType(RealEstateTypes.PFToken);
                  }}>
                  프로젝트 파이낸싱
                  <br />
                  (PF Token)
                </div>
              </div>
              <div
                onClick={() => {
                  if (typeof selectedRealEstateType === 'undefined') return;
                  setCurrentStep(OnBoardingStep.NFTApplication);
                  gtag.event({
                    action: 'on-boarding step1',
                    category: 'step1',
                    label: selectedRealEstateType,
                  });
                }}>
                다음
              </div>
            </div>
          </StepOne>
          <StepTwo active={currentStep}>
            <div>
              <div>2. NFT 용도 (NFT를 만들어서 어디에 사용하고싶나요?)</div>
            </div>
            <div>
              <div>
                NFT를 만든 뒤에 어떤 경제활동을 제일 먼저하고 싶은지
                선택해주세요!
              </div>
              <div>
                <div
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Trading
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedNFTAppliaction(NFTApplicationTypes.Trading);
                  }}>
                  매매
                </div>
                <div
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Investment
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedNFTAppliaction(NFTApplicationTypes.Investment);
                  }}>
                  투자
                </div>
                <div
                  style={{
                    background:
                      selectedNFTAppliaction === NFTApplicationTypes.Loan
                        ? '#343F57'
                        : undefined,
                  }}
                  onClick={() => {
                    setSelectedNFTAppliaction(NFTApplicationTypes.Loan);
                  }}>
                  대출
                </div>
              </div>
              <div
                onClick={() => {
                  if (typeof selectedRealEstateType === 'undefined') return;
                  setCurrentStep(OnBoardingStep.RealEstateAddress);
                  gtag.event({
                    action: 'on-boarding step2',
                    category: 'step2',
                    label: selectedRealEstateType,
                  });
                }}>
                다음
              </div>
            </div>
          </StepTwo>
          <StepThree active={currentStep}>
            <div>
              <div>3. 부동산 주소 입력</div>
            </div>
            <div>
              <div>
                NFT를 만들고 싶은 (토큰화하고 싶은) 부동산의 주소를
                입력해주세요.
              </div>
              <div>
                <input />
              </div>
              <div
                onClick={() => {
                  if (typeof selectedRealEstateType === 'undefined') return;
                  setCurrentStep(OnBoardingStep.RealEstateAddress);
                  gtag.event({
                    action: 'on-boarding step2',
                    category: 'step2',
                    label: selectedRealEstateType,
                  });
                }}>
                다음
              </div>
            </div>
          </StepThree>
          <StepFour active={currentStep}>
            <div>
              <div>4. 입력자 정보 입력</div>
            </div>
            <div>
              <div>입력자의 이메일 주소를 입력해주세요.</div>
              <div>
                <input />
              </div>
              <div
                onClick={() => {
                  if (typeof selectedRealEstateType === 'undefined') return;
                  setCurrentStep(OnBoardingStep.RealEstateAddress);
                  gtag.event({
                    action: 'on-boarding step2',
                    category: 'step2',
                    label: selectedRealEstateType,
                  });
                }}>
                다음
              </div>
            </div>
          </StepFour>
          <StepFive active={currentStep}>
            <div>
              <div>5. 기타</div>
            </div>
            <div>
              <div>기타 문의사항을 남겨주세요</div>
              <div>
                <input />
                <div>
                  <input type="checkbox" /> 개인정보처리방침에 약관에
                  동의합니다.
                </div>
              </div>
              <div
                onClick={() => {
                  if (typeof selectedRealEstateType === 'undefined') return;
                  setCurrentStep(OnBoardingStep.RealEstateAddress);
                  gtag.event({
                    action: 'on-boarding step2',
                    category: 'step2',
                    label: selectedRealEstateType,
                  });
                }}>
                제출하기
              </div>
            </div>
          </StepFive>
        </CreateNFTWrapper>
      </SectionWrapper>
    </>
  );
};

export default Section;
