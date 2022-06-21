import envs from 'envs';
import moment from 'moment';
import { request } from 'graphql-request';
import { IReserveSubgraphData } from 'types/reserveSubgraph';

const minimumTimestamp = moment().subtract(35, 'days').unix();

export const reserveQuery = `
{
  reserves {
    id
    lTokenInterestIndex
    lastUpdateTimestamp
    borrowAPY
    depositAPY
    totalBorrow
    totalDeposit
    lTokenUserBalanceCount
    dTokenUserBalanceCount
    deposit(first: 1000) {
      id
    }
    incentivePool {
      id
    }
    borrow {
      id
      amount
      timestamp
      tokenId
    }
    repay {
      id
      userDTokenBalance
      feeOnCollateralServiceProvider
      timestamp
      tokenId
    }
    reserveHistory(
      first:500
      orderBy: timestamp
      where: { timestamp_gt: ${minimumTimestamp} }
    ) {
      id
      timestamp
      borrowAPY
      depositAPY
      totalBorrow
      totalDeposit
    }
    lToken {
      id
    }
  },
  assetBondTokens(
    orderBy: loanStartTimestamp
    orderDirection: desc
    where: { state_gt: 2 }
  ) {
    id
    state
    signer {
      id
    }
    borrower {
      id
    }
    collateralServiceProvider {
      id
    }
    reserve {
      id
    }
    principal
    debtCeiling
    couponRate
    interestRate
    delinquencyRate
    loanStartTimestamp
    collateralizeTimestamp
    maturityTimestamp
    liquidationTimestamp
    ipfsHash
    signerOpinionHash
  }
}
`;

export const bscReserveDataFetcher = (): Promise<IReserveSubgraphData[]> =>
  request(envs.subgraphApiEndpoint.bscSubgraphURI, reserveQuery);

export const ethReserveDataFetcher = (): Promise<IReserveSubgraphData[]> =>
  request(envs.subgraphApiEndpoint.subgraphURI, reserveQuery);
