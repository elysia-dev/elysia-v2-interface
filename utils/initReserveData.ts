const initReserveData = {
  id: '',
  lTokenInterestIndex: '',
  lastUpdateTimestamp: 0,
  borrowAPY: '',
  depositAPY: 0,
  totalBorrow: '',
  totalDeposit: '',
  lTokenUserBalanceCount: 0,
  dTokenUserBalanceCount: 0,
  deposit: [
    {
      id: '',
    },
  ],
  incentivePool: {
    id: '',
  },
  borrow: [
    {
      id: '',
      amount: '',
      timestamp: 0,
      tokenId: '',
    },
  ],
  repay: [
    {
      id: '',
      userDTokenBalance: '',
      feeOnCollateralServiceProvider: '',
      timestamp: 0,
      tokenId: '',
    },
  ],
  reserveHistory: [
    {
      id: '',
      timestamp: 0,
      borrowAPY: '',
      depositAPY: '',
      totalBorrow: '',
      totalDeposit: '',
    },
  ],
  lToken: {
    id: '',
  },
  assetBondTokens: [],
};

export default initReserveData;
