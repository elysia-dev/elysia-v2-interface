// lib/gtag.js

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_SITE_KEY, {
    page_title: 'titleeee',
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    // value: value,
  });
};
