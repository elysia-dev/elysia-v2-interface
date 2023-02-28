import Wallet from 'enums/Wallet';

export const setWalletConnect = (wallet: Wallet): void => {
  window.sessionStorage.setItem('@connect', wallet);
};

export const isWalletConnector = (): boolean => {
  return window.sessionStorage.getItem('@connect') === Wallet.WalletConnect;
};

export const isMetamask = (): boolean => {
  return window.sessionStorage.getItem('@connect') === Wallet.Metamask;
};

export const isCoinbaseWallet = (): boolean => {
  return window.sessionStorage.getItem('@connect') === Wallet.CoinbaseWallet;
};

export const isOkx = (): boolean => {
  return window.sessionStorage.getItem('@connect') === Wallet.Okx;
};

export const clearWallet = () => window.sessionStorage.removeItem('@connect');

export const isMoblie = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
