import PageHeader from 'components/Common/PageHeader';
import { useTranslation } from 'react-i18next';
import {
  AssetNFTDescription,
  CreatedNFTCount,
  CreateNFTWrapper,
  ElysiaWhitePaper,
  LegalIssuesDescription,
  NFTDescription,
  SectionWrapper,
} from './styles';

const Section = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionWrapper>
        <PageHeader
          headers={[t('developers.0'), t('developers.1'), t('developers.2')]}
        />
        <NFTDescription>
          <div>
            <div>Q. NFT란 무엇인가요?</div>
            <div>
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
            </div>
          </div>
          <div>이미지</div>
        </NFTDescription>
        <AssetNFTDescription>
          <div>
            <div>Q. 왜 부동산 NFT가 필요한가요?</div>
            <div>
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
          <div>이미지</div>
        </AssetNFTDescription>
        <LegalIssuesDescription>
          <div>
            <div>Q. 법적인 이슈는 없나요?</div>
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
          </div>
          <div>이미지</div>
        </LegalIssuesDescription>
        <CreatedNFTCount>
          <div>
            지금까지 총 00명이 부동산 NFT가 만들어지는 과정을 체험했습니다.
          </div>
          <div>
            아래 과정을 통해 부동산이 어떻게 NFT로 만들어지는지 확인해보세요!
          </div>
        </CreatedNFTCount>
        <CreateNFTWrapper>
          <div>진행중인 프로그래스바</div>
          <div>
            <div>
              <div>1) 부동산 유형 선택</div>
              <div>
                NFT로 만들고 싶은 (토큰화하고 싶은) 부동산 유형을 선택해주세요!
              </div>
            </div>
            <div>
              <div>
                부동산 토큰
                <br />
                (Real estate Token)
              </div>
              <div>
                대출채권
                <br />
                (ABToken - a type)
              </div>
              <div>
                원리금 수취권
                <br />
                (ABToken - b type)
              </div>
              <div>
                프로젝트 파이낸싱
                <br />
                (PF Token)
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>2) NFT 용도 선택</div>
              <div>
                NFT를 만든 뒤에 어떤 경제활동을 제일 먼저하고 싶은지
                선택해주세요!
              </div>
            </div>
            <div>
              <div>NFT 담보 대출</div>
              <div>손쉬운 투자유치 및 판매</div>
              <div>
                가상세계에서
                <br /> NFT를 이용한 가치 창출
              </div>
              <div>DAO를 이용한 투자금 조성</div>
            </div>
          </div>
          <div>
            <div>
              <div>3) KYC (Know Your Customer)</div>
              <div>
                본인인증절차 및 만들어진 NFT를 가지고 있을 가상화폐 지갑과
                부동산 소유주가 모두 동일인인지 확인하는 과정을 진행합니다!
              </div>
            </div>
            <div>
              <div>
                <div>1. 본인인증절차</div>
                <div>
                  <div>이미지</div>
                  <div>
                    <div>휴대폰 인증</div>
                    <div>공인인증서 인증</div>
                    <div>신용카드 인증</div>
                    <div>실명계좌 인증</div>
                  </div>
                  <div>
                    <div>본인인증 완료</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>2. 본인-가상화폐 지갑 인증</div>
                  <div>본인인증 다시하기</div>
                </div>
                <div>
                  <div>이미지</div>
                  <div>
                    <div>
                      신분증과 가상화폐지갑을 동시에 촬영한 사진을 통해 <br />
                      앞서 확인한 본인과 지갑의 소유주가 동일인임을 확인합니다!
                    </div>
                  </div>
                  <div>
                    <div>지갑인증 완료</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>3. 본인-부동산 소유주 인증</div>
                  <div>본인인증 다시하기</div>
                  <div>지갑인증 다시하기</div>
                </div>
                <div>
                  <div>이미지</div>
                  <div>
                    <div>
                      등기부등본상의 소유주와 앞서 인증한 사람이 동일인임을
                      <br />
                      확인하는 과정을 통해 부동산 소유주 일치여부를 확인합니다!
                    </div>
                  </div>
                  <div>
                    <div>소유즈 인증 완료</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>4) 스마트 컨트랙트 실행 (NFT 발행)</div>
            <div>
              블록체인 시스템에서는 금융거래, 부동산 계약, 공증 등 다양한 형태의
              계약을 체결하고 이행할 수 있도록 “스마트 컨트랙트"라는
              <br />
              개념을 사용합니다. 서면으로 이루어지던 계약을 코드로 구현한 이
              스마트 컨트랙트를 이용하면, 중앙관리자가 없어도 정해진 규칙을
              <br />
              충족시키면 시스템에서 계약이 성립되도록 만들 수 있습니다!
            </div>
            <div>
              <div>이미지</div>
              <div>
                블록체인 코드상에 기록되는 정보
                <br />
                - 부동산 등기부등본 파일
                <br />
                - 등기에 있는 부동산 정보 및 소유자 정보 입력 (주소 등)
                <br />- 그 외 계약에 필요한 정보
              </div>
              <div>스마트 컨트랙트 실행</div>
            </div>
          </div>
          <div>
            <div>5) 손해배상계약 체결</div>
            <div>
              KYC 과정에서 제출한 서류가 본인임을 확인하고, 허위로 작성되었을
              경우 법적 책임을 받는다는 손해배상 계약을 체결합니다.
              <br />
              NFT 소유자(A)가 실물 자산 소유자(B)에게 실물 자산의 양도를
              요청했는데, B가 실물 자산을 양도하지 않을 경우
              <br />
              이에 대해 A가 법적으로 보호받을 수 있도록 손해배상계약을
              체결합니다!
            </div>
            <div>
              <div>
                <div>
                  손해배상계약내용 예시
                  <br />
                  * 자산토큰(NFT) 소유자가 실물 자산 소유자에게 자산토큰을
                  제시했을 때, 원 실물자산의
                  <br />
                  소유자는 자산토큰 소유자에게 해당 실물자산(또는 그에 상응하는
                  현금)을 양도해야 한다. <br />
                  * 해당 손해배상계약은 공증되었기 때문에 바로 강제 집행이
                  가능하다.
                  <br />
                  또한 이를 지키지 않을 시, 손해배상 금액과는 별도로 위약벌을
                  내야 한다. * 해당 부동산의 소유주는 정관이 정하는 시기까지
                  등기사항전부증명서의 상태를 변경할 수 없다.
                  <br />
                  이를 위반하여 발생하는 손해에 대해 손해배상계약에 따라
                  위약벌과 손해배상금액을 배상해야 한다. <br />
                  * 해당 계약서, 부동산, 등기 정보로는 한 번 밖에 토큰을 발행할
                  수 없으며, 이를 위반할 경우
                  <br />
                  손해배상계약에 따라 위약벌과 손해배상금액을 배상해야 한다.
                </div>
                <div>
                  ** 손해배상계약 내용은 법적 검토 후에 수정 및 추가될 수
                  있습니다.
                </div>
              </div>
              <div>
                <div>실제 손해배상계약서 예시</div>
                <div>손해배상계약 체결</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>6) 거버넌스 진행 (NFT 심사)</div>
            </div>
            <div>
              <div>
                <div>
                  블록체인 금융시스템은 모두가 익명으로 참여가능한 시스템으로,
                  <br />
                  투표권을 가진 참여자들이 이 부동산을 NFT화시킬지 말지를
                  결정합니다!
                </div>
                <div>
                  이 과정을 통해 부적합한 부동산이 변환되거나, NFT에 문제가
                  있는지
                  <br />
                  없는지를 누구나 검증할 수 있습니다.
                </div>
              </div>
              <div>이미지</div>
            </div>
            <div>거버넌스 실행</div>
          </div>
          <div>
            <div>7) NFT 완성!</div>
            <div>
              축하합니다! 당신은 방금 전세계에서 0번째 부동산 NFT를
              만들었습니다.
              <br />
              이제 이 NFT를 이용해서 더 유연한 자금 흐름을 만들고 가상세계에서
              다양한 경제 활동을 진행해보세요!
            </div>
            <div>
              <div>이미지</div>
              <div>이미지</div>
              <div>
                <div>만들어진 NFT 활용하기</div>
              </div>
            </div>
          </div>
          <div>
            <div>8) 부동산 NFT 활용방법</div>
            <div>
              ELYSIA에서는 이미 부동산 NFT를 이용한 다양한 금융 활동을 진행하고
              있습니다. <br />
              관심있을 경우 cs@elysia.land로 연락주세요!
            </div>
            <div>이미지</div>
          </div>
        </CreateNFTWrapper>
        <ElysiaWhitePaper>
          <div>
            현재 변환과정을 실제 스마트 컨트랙트 상에서 체험해볼 수 있는 기능을
            개발중입니다. <br />
            자세한 변환과정은 ELYSIA 백서(Issuance)에서 확인할 수 있습니다.
          </div>
          <div>ELYSIA 백서 바로가기</div>
        </ElysiaWhitePaper>
      </SectionWrapper>
    </>
  );
};

export default Section;
