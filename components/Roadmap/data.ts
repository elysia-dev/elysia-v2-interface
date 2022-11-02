export const RoadmapKeyType = {
  PAST: 'PAST',
  NOW: 'NOW',
  FUTURE: 'FUTURE',
  TEST: 'TEST',
} as const;

export type RoadmapType = {
  title: string;
  contents: string;
  dueDate: string;
};

type TotalRoadmap = {
  [key in keyof typeof RoadmapKeyType]: RoadmapType[];
};

export const totalRoadmap: TotalRoadmap = {
  [RoadmapKeyType.PAST]: [
    {
      title: '빗썸 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 한국 최대 거래소 중 하나인 빗썸 거래소에 상장하였습니다.',
      dueDate: '2020.03.25',
    },
    {
      title: '고팍스 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 한국 최대 거래소 중 하나인 고팍스 거래소에 상장하였습니다.',
      dueDate: '2020.11.20',
    },
    {
      title: '엘리파이 출시',
      contents:
        '엘리시아를 통해서 토큰화된 실물자산 토큰을 기반으로 금융 서비스를 제공하는 디파이를 출시하였습니다.',
      dueDate: '2021.07.15',
    },
    {
      title: '온체인 거버넌스 출시',
      contents:
        '엘리파이의 탈중앙성 강화를 위해 온체인 거버넌스 시스템을 도입하였습니다.',
      dueDate: '2021.11.04',
    },
    {
      title: 'MEXC 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 대형 글로벌 거래소 중 하나인 MEXC 거래소에 상장하였습니다.',
      dueDate: '2021.12.01',
    },
    {
      title: 'FBG Capital 투자 유치',
      contents:
        '엘리시아가 아시아 최대 규모의 벤처캐피탈인 FBG 캐피탈로부터 100만 달러의 투자를 유치하였습니다.',
      dueDate: '2022.01.13',
    },
    {
      title: '엘리파이 BSC 메인넷 도입',
      contents:
        '홀더들의 편의를 위해 엘리파이에 이더리움 대비 속도가 빠르고 가스비가 저렴한 BSC 메인넷을 도입하였습니다.',
      dueDate: '2022.01.20',
    },
    {
      title: '엘리시아 미국 와이오밍주 DAO 법인 등록',
      contents:
        '실물자산 법적 소유권의 탈중앙화, 캐시플로우의 자동화를 위해 아시아 최초로 미국 와이오밍주 DAO 법인을 등록하였습니다.',
      dueDate: '2022.02.07',
    },
    {
      title: '엘리파이 미국 부동산 상품 출시',
      contents:
        '세계 최대 규모인 미국 부동산 시장의 유동성을 활용하기 위해 미국 부동산을 기반으로 한 조각 투자 상품을 출시하였습니다.',
      dueDate: '2022.07.21',
    },
    {
      title: ' 코인베이스 커스터디 추가',
      contents:
        '엘리시아가 코인베이스 커스터디에 선정되어 EL토큰 입출금이 지원됩니다.',
      dueDate: '2022.09.17',
    },
  ],
  [RoadmapKeyType.NOW]: [
    {
      title: 'EL 토큰 이코노미 개선',
      contents:
        '엘리시아의 탈중앙성 강화 및 토큰 가치 상승을 위해 토큰 이코노미를 개선하고 있습니다.',
      dueDate: '2022년 4분기',
    },
    {
      title: 'ELFI 토큰 이코노미 개선',
      contents:
        '엘리시아의 탈중앙성 강화 및 토큰 가치 상승을 위해 토큰 이코노미를 개선하고 있습니다.',
      dueDate: '2022년 4분기',
    },
    {
      title: '다양한 부동산 자산 토큰화 로직 설계 및 테스트',
      contents:
        '주거용 부동산, 상업용 부동산, 부동산 PF 등 다양한 부동산 자산의 상품화를 위해 로직 설계 및 테스트를 진행하고 있습니다.',
      dueDate: '2022년 4분기',
    },
    {
      title: '엘리시아 DAO 법인 정관 업그레이드',
      contents:
        '엘리시아 DAO 법인을 활용한 실물자산 토큰화의 탈중앙성 강화를 위해 DAO 법인의 정관 업그레이드 작업을 진행하고 있습니다.',
      dueDate: '2023년 1분기',
    },
    {
      title: '엘리파이v2 출시',
      contents:
        '엘리파이의 컨트랙트를 보완하기 위해 엘리파이v2를 개발하고 있습니다.',
      dueDate: '2023년 1분기',
    },

    {
      title: '대형 글로벌 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 대형 글로벌 거래소 상장을 추진하고 있습니다.',
      dueDate: '2023년 1분기',
    },
  ],
  [RoadmapKeyType.FUTURE]: [
    {
      title: '실물자산 토큰화 온보딩 페이지 출시',
      contents:
        '실물자산 소유주가 직접 토큰화 신청을 할 수 있는 온보딩 페이지를 출시할 계획입니다.',
      dueDate: '???',
    },
    {
      title: 'RWA 토큰 마켓플레이스 도입',
      contents:
        '실물자산을 기반으로 한 RWA 토큰이 거래될 수 있는 마켓플레이스를 출시할 계획입니다.',
      dueDate: ' ???',
    },
    {
      title: '엘리시아 사이트 리뉴얼',
      contents: '사용자 편의성을 위해 엘리시아 사이트를 리뉴얼할 계획입니다.',
      dueDate: '기간: ???',
    },
    {
      title: '엘리파이 사이트 리뉴얼',
      contents: '사용자 편의성을 위해 엘리파이 사이트를 리뉴얼할 계획입니다.',
      dueDate: '기간: ???',
    },
  ],
  [RoadmapKeyType.TEST]: [
    {
      title: 'EL 토큰 이코노미 개선',
      contents:
        '엘리시아의 탈중앙성 강화 및 토큰 가치 상승을 위해 토큰 이코노미를 개선하고 있습니다.',
      dueDate: '2022년 4분기',
    },
    {
      title: 'ELFI 토큰 이코노미 개선',
      contents:
        '엘리시아의 탈중앙성 강화 및 토큰 가치 상승을 위해 토큰 이코노미를 개선하고 있습니다.',
      dueDate: '2022년 4분기',
    },
    {
      title: '다양한 부동산 자산 토큰화 로직 설계 및 테스트',
      contents:
        '주거용 부동산, 상업용 부동산, 부동산 PF 등 다양한 부동산 자산의 상품화를 위해 로직 설계 및 테스트를 진행하고 있습니다.',
      dueDate: '2022년 4분기',
    },
    {
      title: '엘리시아 DAO 법인 정관 업그레이드',
      contents:
        '엘리시아 DAO 법인을 활용한 실물자산 토큰화의 탈중앙성 강화를 위해 DAO 법인의 정관 업그레이드 작업을 진행하고 있습니다.',
      dueDate: '2023년 1분기',
    },
    {
      title: '엘리파이v2 출시',
      contents:
        '엘리파이의 컨트랙트를 보완하기 위해 엘리파이v2를 개발하고 있습니다.',
      dueDate: '2023년 1분기',
    },

    {
      title: '대형 글로벌 거래소 상장',
      contents:
        'EL 토큰의 유동성 확대를 위해 대형 글로벌 거래소 상장을 추진하고 있습니다.',
      dueDate: '2023년 1분기',
    },
  ],
};
