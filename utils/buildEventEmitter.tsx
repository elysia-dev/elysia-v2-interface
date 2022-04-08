import ReactGA from 'react-ga';

const buildEventEmitter = (
  category: string,
  action: string,
  label: string,
): {
  clicked: () => void;
  created: () => void;
  canceled: () => void;
  failed: () => void;
} => {
  return {
    clicked: () => {
      ReactGA.event({
        category,
        action: `Click ${action}`,
        label,
      });
    },
    created: () => {
      ReactGA.event({
        category,
        action: `${action} tx is created`,
        label,
      });
    },
    canceled: () => {
      ReactGA.event({
        category,
        action: `${action} tx is canceled`,
        label,
      });
    },
    failed: () => {
      ReactGA.event({
        category,
        action: `${action} tx is encountered an error`,
        label,
      });
    },
  };
};

export default buildEventEmitter;
