import * as gtag from 'lib/gtag';

export const GoogleAnalyticsEvent = (
  action: string,
  category: string,
  label?: string,
) => {
  gtag.event({
    action,
    category,
    label: label ? label : '',
  });
};
