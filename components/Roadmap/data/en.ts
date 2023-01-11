import { RoadmapKey, TotalRoadmap } from './types';

const roadmap: TotalRoadmap = {
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
    {
      title: 'EL Token Economy Improvement',
      contents:
        'We are improving ELYSIA’s token economy to strengthen decentralization and increase token value.',
      dueDate: '2022.11.14',
      kind: 'PLANNING',
    },
  ],
  [RoadmapKey.NOW]: [
    {
      title: 'ELFI Token Economy Improvement',
      contents:
        'We are improving ELYFI’s token economy to strengthen decentralization and increase token value.',
      dueDate: 'Expected by Q1 2023',
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
      contents: "We are developing ELYFI v2 to complement ELYFI's contract.",
      dueDate: 'Expected by Q1 2023',
      kind: 'DEV',
    },
    {
      title: 'Large Global Exchanges Listing',
      contents:
        'To expand the liquidity of EL tokens, we are promoting listing on large global exchanges.',
      dueDate: 'Expected by Q1 2023',
      kind: 'MARKETING',
    },
  ],

  [RoadmapKey.FUTURE]: [
    {
      title: 'RWA Token Marketplace Introduction',
      contents:
        'We plan to launch a marketplace where RWA tokens based on real-world assets can be traded.',
      kind: 'DEV',
    },
    {
      title: 'ELYSIA Site Renewal',
      contents: 'We plan to renew the ELYSIA site for user convenience.',
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
      title: 'MakerDAO onboarding',
      contents:
        "We proceed onboarding process to secure MakerDAO liquidity using ELYSIA's RWA tokens as collateral.",
      dueDate: 'Expected by Q1 2023',
      kind: 'PLANNING',
    },
    {
      title: 'Released RWA explorer platform',
      contents:
        'We develop an integrated explorer platform that allows you to easily and conveniently check RWA token information. (ex. Xangle, CoinMarketCap)',
      dueDate: 'Expected by Q1 2023',
      kind: 'DEV',
    },
    {
      title: 'RWA Saas(Software as a Service) design and testing',
      contents:
        'We develop a solution that can easily convert real-world assets into RWA tokens through the ELYSIA Protocol.',
      dueDate: 'Expected by Q1 2023',
      kind: 'DEV',
    },
    {
      title: 'Prediction market platform design and testing',
      contents:
        'We develop a trading platform that predicts indices related to real-world assets.',
      dueDate: 'Expected by Q1 2023',
      kind: 'DEV',
    },
  ],
};

export default roadmap;
