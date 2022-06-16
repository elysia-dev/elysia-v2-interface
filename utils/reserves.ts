import envs from 'core/envs';

export interface IReserve {
  name: string;
  decimals: number;
  address: string;
  tokenizer?: string;
}

const reserves: IReserve[] = [
  {
    name: 'USDT',
    decimals: 6,
    address: envs.token.usdtAddress,
    tokenizer: envs.tokenizer.usdtTokenizerAddress,
  },
  {
    name: 'DAI',
    decimals: 18,
    address: envs.token.daiAddress,
    tokenizer: envs.tokenizer.daiTokenizerAddress,
  },
  {
    name: 'EL',
    decimals: 18,
    address: envs.token.elAddress,
  },
  {
    name: 'ETH',
    decimals: 18,
    address: '0x',
  },
  {
    name: 'USDC',
    decimals: 6,
    address: envs.token.usdcAddress,
  },
  {
    name: 'BUSD',
    decimals: 18,
    address: envs.token.busdAddress,
    tokenizer: envs.tokenizer.busdTokenizerAddress,
  },
];

export default reserves;
