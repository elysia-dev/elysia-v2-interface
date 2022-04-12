export const setWalletConnect = (wallet: string): void => {
  window.sessionStorage.setItem('@connect', wallet);
};

export const isWalletConnector = (): boolean => {
  return window.sessionStorage.getItem('@connect') === 'WalletConnect';
};

export const isMetamask = (): boolean => {
  return window.sessionStorage.getItem('@connect') === 'Metamask';
};

export const isMoblie = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
