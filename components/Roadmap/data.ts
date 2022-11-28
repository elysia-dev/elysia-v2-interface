export const RoadmapKey = {
  PAST: 'PAST',
  NOW: 'NOW',
  FUTURE: 'FUTURE',
  TEST: 'TEST',
} as const;

export type Roadmap = {
  title: string;
  contents: string;
  kind: 'DEV' | 'PLANNING' | 'MARKETING'; // 개발, 기획, 마케팅
  dueDate?: string;
};

type TotalRoadmap = {
  [key in keyof typeof RoadmapKey]: Roadmap[];
};

export const totalRoadmapKR: TotalRoadmap = {
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
      dueDate: '2022년 4분기 목표',
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
  ],
  [RoadmapKey.FUTURE]: [
    {
      title: '실물자산 토큰화 온보딩 페이지 출시',
      contents:
        '실물자산 소유주가 직접 토큰화 신청을 할 수 있는 온보딩 페이지를 출시할 계획입니다.',
      kind: 'DEV',
    },
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
  ],
  [RoadmapKey.TEST]: [
    {
      title: '다양한 부동산 자산 토큰화 로직 설계 및 테스트',
      contents:
        '주거용 부동산, 상업용 부동산, 부동산 PF 등 다양한 부동산 자산의 상품화를 위해 로직 설계 및 테스트를 진행하고 있습니다.',
      dueDate: '2022년 4분기 목표',
      kind: 'DEV',
    },
  ],
};

export const totalRoadmapEN: TotalRoadmap = {
  [RoadmapKey.PAST]: [
    {
      title: 'Bithumb Exchange Listing',
      contents:
        'To expand the liquidity of EL tokens, we listed EL tokens on the Bithumb Exchange, one of the largest exchanges in Korea.',
      dueDate: '2020.03.25',
      kind: 'MARKETING',
    },
    {
      title: 'Gopax Exchange Listing',
      contents:
        'To expand the liquidity of EL tokens, we listed EL tokens on the Gopax Exchange, one of the largest exchanges in Korea.',
      dueDate: '2020.11.20',
      kind: 'MARKETING',
    },
    {
      title: 'ELYFI Release',
      contents:
        'We launched DeFi, which provides financial services based on real-world asset tokens created through ELYSIA.',
      dueDate: '2021.07.15',
      kind: 'DEV',
    },
    {
      title: 'On-chain Governance Launch',
      contents:
        'We introduced an on-chain governance system to strengthen the decentralization of ELYFI.',
      dueDate: '2021.11.04',
      kind: 'DEV',
    },
    {
      title: 'MEXC Exchange Listing',
      contents:
        'To expand the liquidity of EL tokens, we listed EL tokens on the MEXC Exchange, one of the largest global exchanges.',
      dueDate: '2021.12.01',
      kind: 'MARKETING',
    },
    {
      title: 'FBG Capital Investment Attraction',
      contents:
        'ELYSIA has raised $1 million in investment from FBG Capital, the largest venture capital in Asia.',
      dueDate: '2022.01.13',
      kind: 'MARKETING',
    },
    {
      title: 'ELYFI BSC Mainnet Introduction',
      contents:
        'For the convenience of ELYFI users, we introduced the BSC mainnet, which is faster than Ethereum and has a lower gas cost.',
      dueDate: '2022.01.20',
      kind: 'DEV',
    },
    {
      title: 'DAO LLC in Wyoming, USA, Establishment',
      contents:
        'To decentralize legal ownership of real-world assets and automate cash flows, we established the first DAO LLC in Wyoming, USA, from Asia.',
      dueDate: '2022.02.07',
      kind: 'PLANNING',
    },
    {
      title: 'ELYFI US Real Estate Product Launch',
      contents:
        "To utilize the liquidity of the world's largest US real estate market, we launched a fractional investment product based on US real estate.",
      dueDate: '2022.07.21',
      kind: 'DEV',
    },
    {
      title: ' Coinbase Custody Selection',
      contents:
        'ELYSIA has been selected for Coinbase custody, deposit and withdrawal of EL tokens are supported.',
      dueDate: '2022.09.17',
      kind: 'MARKETING',
    },
  ],
  [RoadmapKey.NOW]: [
    {
      title: 'EL Token Economy Improvement',
      contents:
        'We are improving ELYSIA’s token economy to strengthen decentralization and increase token value.',
      dueDate: 'Expected by Q4 2022',
      kind: 'PLANNING',
    },
    {
      title: 'ELFI Token Economy Improvement',
      contents:
        'We are improving ELYFI’s token economy to strengthen decentralization and increase token value.',
      dueDate: 'Expected by Q4 2022',
      kind: 'PLANNING',
    },
    {
      title: 'ELYSIA DAO LLC Articles of Incorporation Upgrade',
      contents:
        "To strengthen the decentralization of tokenization of real-world assets using the ELYSIA DAO LLC, we are upgrading the DAO LLC's articles of incorporation.",
      dueDate: 'Expected by Q1 2023',
      kind: 'PLANNING',
    },
    {
      title: 'ELYFI v2 Release',
      contents:
        "Description: We are developing ELYFI v2 to complement ELYFI's contract.",
      dueDate: 'Expected by Q1 2023',
      kind: 'DEV',
    },
    {
      title: 'Large Global Exchanges Listing',
      contents:
        'Description: To expand the liquidity of EL tokens, we are promoting listing on large global exchanges.',
      dueDate: 'Expected by Q1 2023',
      kind: 'MARKETING',
    },
  ],

  [RoadmapKey.FUTURE]: [
    {
      title: 'Real-World Asset Tokenization Onboarding Page Release',
      contents:
        'We plan to launch an onboarding page where real-world asset owners can directly apply for tokenization.',
      kind: 'DEV',
    },
    {
      title: 'RWA Token Marketplace Introduction',
      contents:
        'We plan to launch a marketplace where RWA tokens based on real-world assets can be traded.',
      kind: 'DEV',
    },
    {
      title: 'ELYSIA Site Renewal',
      contents:
        'Description: We plan to renew the ELYSIA site for user convenience.',
      kind: 'DEV',
    },
    {
      title: 'ELYFI Site Renewal',
      contents: 'We plan to renew the ELYFI site for user convenience.',
      kind: 'DEV',
    },
  ],
  [RoadmapKey.TEST]: [
    {
      title: 'Various Real Estate Asset Tokenization Logic Designs and Test',
      contents:
        'We are designing and testing logic for the commercialization of various real estates assets such as residential real estate, commercial real estate, and real estate PF.',
      dueDate: 'Expected by Q4 2022',
      kind: 'MARKETING',
    },
  ],
};
