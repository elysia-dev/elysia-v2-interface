// https://github.com/Uniswap/web3-react/tree/v6/packages/injected-connector/src
// window.ethereum 만 window.okxwallet 으로 바꿔서 사용

/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
import { AbstractConnector } from '@web3-react/abstract-connector';
import { AbstractConnectorArguments, ConnectorUpdate } from '@web3-react/types';

import { SendReturnResult, SendReturn, Send, SendOld } from './types';

function parseSendReturn(sendReturn: SendReturnResult | SendReturn): any {
  // eslint-disable-next-line no-prototype-builtins
  return sendReturn.hasOwnProperty('result') ? sendReturn.result : sendReturn;
}

export class NoEthereumProviderError extends Error {
  public constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'No Ethereum provider was found on window.okxwallet.';
  }
}

export class UserRejectedRequestError extends Error {
  public constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'The user rejected the request.';
  }
}

export class OkxConnector extends AbstractConnector {
  constructor(kwargs: AbstractConnectorArguments) {
    super(kwargs);

    this.handleNetworkChanged = this.handleNetworkChanged.bind(this);
    this.handleChainChanged = this.handleChainChanged.bind(this);
    this.handleAccountsChanged = this.handleAccountsChanged.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  private handleChainChanged(chainId: string | number): void {
    this.emitUpdate({ chainId, provider: window.okxwallet });
  }

  private handleAccountsChanged(accounts: string[]): void {
    if (accounts.length === 0) {
      this.emitDeactivate();
    } else {
      this.emitUpdate({ account: accounts[0] });
    }
  }

  private handleClose(code: number, reason: string): void {
    this.emitDeactivate();
  }

  private handleNetworkChanged(networkId: string | number): void {
    this.emitUpdate({ chainId: networkId, provider: window.okxwallet });
  }

  public async activate(): Promise<ConnectorUpdate> {
    if (!window.okxwallet) {
      throw new NoEthereumProviderError();
    }

    if (window.okxwallet.on) {
      window.okxwallet.on('chainChanged', this.handleChainChanged);
      window.okxwallet.on('accountsChanged', this.handleAccountsChanged);
      window.okxwallet.on('close', this.handleClose);
      window.okxwallet.on('networkChanged', this.handleNetworkChanged);
    }

    if ((window.okxwallet as any).isMetaMask) {
      (window.okxwallet as any).autoRefreshOnNetworkChange = false;
    }

    // try to activate + get account via eth_requestAccounts
    let account;
    try {
      account = await (window.okxwallet.send as Send)(
        'eth_requestAccounts',
      ).then((sendReturn) => parseSendReturn(sendReturn)[0]);
    } catch (error) {
      if ((error as any).code === 4001) {
        throw new UserRejectedRequestError();
      }
      // warning(
      //   false,
      //   'eth_requestAccounts was unsuccessful, falling back to enable',
      // )
    }

    // if unsuccessful, try enable
    if (!account) {
      // if enable is successful but doesn't return accounts, fall back to getAccount (not happy i have to do this...)
      account = await window.okxwallet
        ?.enable?.()
        .then((sendReturn) => sendReturn && parseSendReturn(sendReturn)[0]);
    }

    return { provider: window.okxwallet, ...(account ? { account } : {}) };
  }

  public async getProvider(): Promise<any> {
    return window.okxwallet;
  }

  public async getChainId(): Promise<number | string> {
    if (!window.okxwallet) {
      throw new NoEthereumProviderError();
    }

    let chainId;
    try {
      chainId = await (window.okxwallet.send as Send)('eth_chainId').then(
        parseSendReturn,
      );
    } catch {
      // warning(
      //   false,
      //   'eth_chainId was unsuccessful, falling back to net_version',
      // )
    }

    if (!chainId) {
      try {
        chainId = await (window.okxwallet.send as Send)('net_version').then(
          parseSendReturn,
        );
      } catch {
        // warning(
        //   false,
        //   'net_version was unsuccessful, falling back to net version v2',
        // )
      }
    }

    if (!chainId) {
      try {
        chainId = parseSendReturn(
          (window.okxwallet.send as SendOld)({ method: 'net_version' }),
        );
      } catch {
        // warning(
        //   false,
        //   'net_version v2 was unsuccessful, falling back to manual matches and static properties',
        // )
      }
    }

    if (!chainId) {
      if ((window.okxwallet as any).isDapper) {
        chainId = parseSendReturn(
          (window.okxwallet as any).cachedResults.net_version,
        );
      } else {
        chainId =
          (window.okxwallet as any).chainId ||
          (window.okxwallet as any).netVersion ||
          (window.okxwallet as any).networkVersion ||
          (window.okxwallet as any)._chainId;
      }
    }

    return chainId;
  }

  public async getAccount(): Promise<null | string> {
    if (!window.okxwallet) {
      throw new NoEthereumProviderError();
    }

    let account;
    try {
      account = await (window.okxwallet.send as Send)('eth_accounts').then(
        (sendReturn) => parseSendReturn(sendReturn)[0],
      );
    } catch {
      // warning(false, 'eth_accounts was unsuccessful, falling back to enable')
    }

    if (!account) {
      try {
        account = await window.okxwallet
          .enable()
          .then((sendReturn) => parseSendReturn(sendReturn)[0]);
      } catch {
        // warning(
        //   false,
        //   'enable was unsuccessful, falling back to eth_accounts v2',
        // )
      }
    }

    if (!account) {
      account = parseSendReturn(
        (window.okxwallet.send as SendOld)({ method: 'eth_accounts' }),
      )[0];
    }

    return account;
  }

  public deactivate() {
    if (window.okxwallet && window.okxwallet.removeListener) {
      window.okxwallet.removeListener('chainChanged', this.handleChainChanged);
      window.okxwallet.removeListener(
        'accountsChanged',
        this.handleAccountsChanged,
      );
      window.okxwallet.removeListener('close', this.handleClose);
      window.okxwallet.removeListener(
        'networkChanged',
        this.handleNetworkChanged,
      );
    }
  }

  public async isAuthorized(): Promise<boolean> {
    if (!window.okxwallet) {
      return false;
    }

    try {
      return await (window.okxwallet.send as Send)('eth_accounts').then(
        (sendReturn) => {
          if (parseSendReturn(sendReturn).length > 0) {
            return true;
          } else {
            return false;
          }
        },
      );
    } catch {
      return false;
    }
  }
}
