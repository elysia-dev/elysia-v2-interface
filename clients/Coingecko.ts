import axios from 'axios';

export type PriceType = {
  elPrice: number;
};

export const pricesFetcher = (url: string): Promise<PriceType> =>
  axios.get(url).then((res) => res.data);
