import { RoadmapKey, TotalRoadmap } from './types';

const roadmap: TotalRoadmap = {
  [RoadmapKey.PAST]: [
    {
      title: '빗썸 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 한국 최대 거래소 중 하나인 빗썸 거래소에 상장하였습니다.',
      dueDate: '2020.03.25',
      kind: 'MARKETING',
    },
    {
      title: '고팍스 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 한국 최대 거래소 중 하나인 고팍스 거래소에 상장하였습니다.',
      dueDate: '2020.11.20',
      kind: 'MARKETING',
    },
    {
      title: '엘리파이 출시',
      contents:
        '엘리시아를 통해서 토큰화된 실물자산 토큰을 기반으로 금융 서비스를 제공하는 디파이를 출시하였습니다.',
      dueDate: '2021.07.15',
      kind: 'DEV',
    },
    {
      title: '온체인 거버넌스 출시',
      contents:
        '엘리파이의 탈중앙성 강화를 위해 온체인 거버넌스 시스템을 도입하였습니다.',
      dueDate: '2021.11.04',
      kind: 'DEV',
    },
    {
      title: 'MEXC 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 대형 글로벌 거래소 중 하나인 MEXC 거래소에 상장하였습니다.',
      dueDate: '2021.12.01',
      kind: 'MARKETING',
    },
    {
      title: 'FBG Capital 투자 유치',
      contents:
        '엘리시아가 아시아 최대 규모의 벤처캐피탈인 FBG 캐피탈로부터 100만 달러의 투자를 유치하였습니다.',
      dueDate: '2022.01.13',
      kind: 'MARKETING',
    },
    {
      title: '엘리파이 BSC 메인넷 도입',
      contents:
        '홀더들의 편의를 위해 엘리파이에 이더리움 대비 속도가 빠르고 가스비가 저렴한 BSC 메인넷을 도입하였습니다.',
      dueDate: '2022.01.20',
      kind: 'DEV',
    },
    {
      title: '엘리시아 미국 와이오밍주 DAO 법인 등록',
      contents:
        '실물자산 법적 소유권의 탈중앙화, 캐시플로우의 자동화를 위해 아시아 최초로 미국 와이오밍주 DAO 법인을 등록하였습니다.',
      dueDate: '2022.02.07',
      kind: 'PLANNING',
    },
    {
      title: '엘리파이 미국 부동산 상품 출시',
      contents:
        '세계 최대 규모인 미국 부동산 시장의 유동성을 활용하기 위해 미국 부동산을 기반으로 한 조각 투자 상품을 출시하였습니다.',
      dueDate: '2022.07.21',
      kind: 'DEV',
    },
    {
      title: ' 코인베이스 커스터디 추가',
      contents:
        '엘리시아가 코인베이스 커스터디에 선정되어 EL토큰 입출금이 지원됩니다.',
      dueDate: '2022.09.17',
      kind: 'MARKETING',
    },
    {
      title: 'EL 토큰 이코노미 개선',
      contents:
        '엘리시아의 탈중앙성 강화 및 토큰 가치 상승을 위해 토큰 이코노미를 개선하고 있습니다.',
      dueDate: '2022.11.14',
      kind: 'PLANNING',
    },
  ],
  [RoadmapKey.NOW]: [
    {
      title: 'ELFI 토큰 이코노미 개선',
      contents:
        '엘리시아의 탈중앙성 강화 및 토큰 가치 상승을 위해 토큰 이코노미를 개선하고 있습니다.',
      dueDate: '2023년 1분기 목표',
      kind: 'PLANNING',
    },

    {
      title: '엘리시아 DAO 법인 정관 업그레이드',
      contents:
        '엘리시아 DAO 법인을 활용한 실물자산 토큰화의 탈중앙성 강화를 위해 DAO 법인의 정관 업그레이드 작업을 진행하고 있습니다.',
      dueDate: '2023년 1분기 목표',
      kind: 'PLANNING',
    },
    {
      title: '엘리파이v2 출시',
      contents:
        '엘리파이의 컨트랙트를 보완하기 위해 엘리파이v2를 개발하고 있습니다.',
      dueDate: '2023년 1분기 목표',
      kind: 'DEV',
    },

    {
      title: '대형 글로벌 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 대형 글로벌 거래소 상장을 추진하고 있습니다.',
      dueDate: '2023년 1분기 목표',
      kind: 'MARKETING',
    },
    {
      title: ' 메이커다오 온보딩',
      contents:
        '엘리시아의 RWA 토큰을 담보로 메이커다오의 유동성을 확보하기 위해 온보딩 절차를 진행합니다.',
      dueDate: '2023년 1분기 목표',
      kind: 'PLANNING',
      isTest: true,
    },
    {
      title: ' RWA Saas(Software as a Service) 설계 및 테스트',
      contents:
        '엘리시아 프로토콜을 통해 실물자산을 RWA 토큰으로 쉽게 만들 수 있는 솔루션을 개발합니다.',
      kind: 'DEV',
      isTest: true,
    },
    {
      title: ' 예측 시장 플랫폼 설계 및 테스트',
      contents: '실물자산과 관련된 지수들을 예측하는 거래 플랫폼을 개발합니다.',
      dueDate: '2023년 1분기 목표',
      kind: 'DEV',
      isTest: true,
    },
  ],
  [RoadmapKey.FUTURE]: [
    {
      title: 'RWA 토큰 마켓플레이스 도입',
      contents:
        '실물자산을 기반으로 한 RWA 토큰이 거래될 수 있는 마켓플레이스를 출시할 계획입니다.',
      kind: 'DEV',
    },
    {
      title: '엘리시아 사이트 리뉴얼',
      contents: '사용자 편의성을 위해 엘리시아 사이트를 리뉴얼할 계획입니다.',
      kind: 'DEV',
    },
    {
      title: '엘리파이 사이트 리뉴얼',
      contents: '사용자 편의성을 위해 엘리파이 사이트를 리뉴얼할 계획입니다.',
      kind: 'DEV',
    },

    {
      title: 'RWA 익스플로러 플랫폼 출시',
      contents:
        'RWA 토큰의 정보를 쉽고 간편하게 확인할 수 있는 통합 익스플로러 플랫폼을 개발합니다. (ex. 쟁글, 코인마켓캡)',
      dueDate: '2023년 1분기 목표',
      kind: 'DEV',
    },
    {
      title: 'STO 기술 연구',
      contents:
        '다가올 STO 시대를 대비하여, 엘리시아가 제공할 수 있는 기술 솔루션(STO Market, Security Token 기술 표준 등)을 연구, 개발합니다.',
      kind: 'MARKETING',
    },
  ],
};

export default roadmap;
