import { BigNumber, utils } from 'ethers';

/* big number to string with comma */
export const formatComma = (value: BigNumber): string =>
  new Intl.NumberFormat('en').format(parseFloat(utils.formatEther(value)));

/* number to string with six digits and comma (e.g., 10,123.456789)  */
export const formatSixDigit = (value: number): string => {
  if (value <= 0.0000001) {
    return '0';
  }
  return new Intl.NumberFormat('en', {
    maximumFractionDigits: 6,
    minimumFractionDigits: 6,
  }).format(value);
};

/* number to string to returns an integer without decimal points. decimal points are rounded off */
export const roundNumber = (value: number): string =>
  new Intl.NumberFormat('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const toCompact = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);

export const toPercent = (value: BigNumber): string =>
  `${toCompact(parseFloat(utils.formatUnits(value, 25)))}%`;

export const toCompactForBignumber = (
  value: BigNumber | number,
  decimals?: number,
): string =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(parseFloat(utils.formatUnits(value, decimals || 18)));

export const toUsd = (value: BigNumber, decimals?: number): string =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    parseFloat(utils.formatUnits(value, decimals || 18)),
  );
