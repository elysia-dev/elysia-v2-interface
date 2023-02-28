import WalletConnectConnector from 'core/connectors/WalletConnector';

const walletConnectConnector = (): WalletConnectConnector => {
  return new WalletConnectConnector({
    rpc: {
      1:
        process.env.NODE_ENV === 'development'
          ? 'https://elyfi-test.elyfi.world:8545'
          : process.env.NEXT_PUBLIC_JSON_RPC || '',
      56: 'https://bsc-dataseed.binance.org/',
      97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 1200,
    preferredNetworkId: 1337,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ADDRESS,
    qrcodeModalOptions: {
      mobileLinks: [
        'rainbow',
        'metamask',
        'argent',
        'trust',
        'imtoken',
        'pillar',
        'okx',
      ],
    },
  });
};

export default walletConnectConnector;
