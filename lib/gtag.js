// lib/gtag.js

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (process.env.NODE_ENV === 'development') return;
  if (typeof window === undefined) return;
  window.gtag('config', process.env.NEXT_PUBLIC_SITE_KEY, {
    page_title: url,
  });
};
export const configGtag = () => {
  if (process.env.NODE_ENV === 'development') return;
  if (typeof window === undefined) return;
  window.gtag('config', process.env.NEXT_PUBLIC_SITE_KEY);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label }) => {
  if (process.env.NODE_ENV === 'development') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
