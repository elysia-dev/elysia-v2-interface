interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    isCoinbaseWallet?: boolean;
    providers?: any;

    selectedProvider?: any;
    providerMap?: Map<string, any>;
    setSelectedProvider?: (provider: any) => void;

    request?: any;
    send: unknown;
    enable: () => Promise<string[]>;
    on?: (method: string, listener: (...args: any[]) => void) => void;
    removeListener?: (
      method: string,
      listener: (...args: any[]) => void,
    ) => void;
  };

  web3?: {};
}
