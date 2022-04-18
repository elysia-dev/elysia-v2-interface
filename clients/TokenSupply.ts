import axios from 'axios';

export const totalSupplyFetcher = (url: string): Promise<any> =>
  axios.get(url).then((res) => res.data);

export const circulatingSupplyFetcher = (url: string): Promise<any> =>
  axios.get(url).then((res) => res.data);
