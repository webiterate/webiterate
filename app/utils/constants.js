export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const INTERLEDGER = {
  XPRING: {
    BASE_URL: window.location.origin,
    ENDPOINTS: {
      BALANCE: '/payment/balance',
    },
    OPT: {
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  },
};
