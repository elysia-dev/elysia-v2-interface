import testVars from './test.json';
import prodVars from './prod.json';

interface EnvironmentVariables {
  staking: {
    elStakingPoolAddress: string;
    elStakingV2PoolAddress: string;
  };
  token: {
    elAddress: string;
    daiAddress: string;
    usdtAddress: string;
    usdcAddress: string;
    busdAddress: string;
  };
  subgraphApiEndpoint: {
    subgraphURI: string;
    bscSubgraphURI: string;
  };
  externalApiEndpoint: {
    etherscanURI: string;
    coingackoURL: string;
  };
  tokenizer: {
    daiTokenizerAddress: string;
    usdtTokenizerAddress: string;
    busdTokenizerAddress: string;
  };
}

const vars =
  process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_TEST_MODE
    ? (prodVars as unknown as EnvironmentVariables)
    : (testVars as unknown as EnvironmentVariables);

export default vars;
