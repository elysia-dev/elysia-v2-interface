import axios, { AxiosResponse } from 'axios';

export interface ISlateResponse {
  version: 'v1';
  tokenId: string;
  description: string;
  images: {
    type: number;
    hash: string;
    provider: 'slate' | 'infura' | 's3';
    link: string;
  }[];
  documents: {
    type: number;
    hash: string;
    provider: 'slate' | 'infura';
    link: string;
  }[];
}

export const baseUrl = 'https://ipfs.io/ipfs';

export class Slate {
  static fetchABTokenIpfs = async (
    ipfsHash: string | undefined | null,
  ): Promise<AxiosResponse<ISlateResponse>> => {
    return axios.get(`${baseUrl}/${ipfsHash}`);
  };
}

export default Slate;
