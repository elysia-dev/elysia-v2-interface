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

export const baseUrl = 'https://slate.textile.io/ipfs';

export class Slate {
  static fetctABTokenIpfs = async (
    ipfsHash: string | undefined | null,
  ): Promise<AxiosResponse<ISlateResponse>> => {
    return axios.get(`${baseUrl}/${ipfsHash}`);
  };
}

export default Slate;
