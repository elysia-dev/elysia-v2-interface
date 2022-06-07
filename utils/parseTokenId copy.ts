import { BigNumber } from 'ethers';

export type AssetBondIdData = {
  nonce: number;
  countryCode: number;
  collateralServiceProviderIdentificationNumber: number;
  collateralLatitude: number;
  collateralLatitudeSign: number;
  collateralLongitude: number;
  collateralLongitudeSign: number;
  collateralDetail: number;
  collateralCategory: number;
  productNumber: number;
};

const EmptyAssetBondIdData: AssetBondIdData = {
  nonce: 0,
  countryCode: 0,
  collateralServiceProviderIdentificationNumber: 0,
  collateralLatitude: 0,
  collateralLatitudeSign: 0,
  collateralLongitude: 0,
  collateralLongitudeSign: 0,
  collateralDetail: 0,
  collateralCategory: 0,
  productNumber: 0,
};

type AssetBondIdDataDigits = {
  nonce: number;
  countryCode: number;
  collateralServiceProviderIdentificationNumber: number;
  collateralLatitude: number;
  collateralLatitudeSign: number;
  collateralLongitude: number;
  collateralLongitudeSign: number;
  collateralDetail: number;
  collateralCategory: number;
  productNumber: number;
};

const assetBondIdDataDigits = {
  nonce: 10,
  countryCode: 12,
  collateralServiceProviderIdentificationNumber: 50,
  collateralLatitude: 28,
  collateralLatitudeSign: 1,
  collateralLongitude: 28,
  collateralLongitudeSign: 1,
  collateralDetail: 40,
  collateralCategory: 10,
  productNumber: 10,
};

export const parseTokenId = (
  tokenId: string | null | undefined,
): AssetBondIdData => {
  if (!tokenId) return EmptyAssetBondIdData;

  const binaryTokenId = BigNumber.from(tokenId).toBigInt().toString(2);
  const parsedTokenId = {} as AssetBondIdData;

  let end = 256;

  (
    Object.keys(assetBondIdDataDigits) as (keyof AssetBondIdDataDigits)[]
  ).forEach((key) => {
    let start = end - assetBondIdDataDigits[key] + 1;
    start = start !== end ? start : start - 1;
    parsedTokenId[key] = parseInt(binaryTokenId.slice(start, end), 2) || 0;
    end -= assetBondIdDataDigits[key];
  });

  return parsedTokenId;
};
