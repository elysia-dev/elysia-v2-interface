import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

export const sendGAMetamask = () => {
  gtag.event({
    action: GoogleAnalyticsAction.Metamask,
    category: GoogleAnalyticsCategory.Wallet,
    label: '',
  });
};
export const sendGAWalletConnect = () => {
  gtag.event({
    action: GoogleAnalyticsAction.WalletConnect,
    category: GoogleAnalyticsCategory.Wallet,
    label: '',
  });
};
