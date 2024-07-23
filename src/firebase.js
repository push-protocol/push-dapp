// External Packages
import { initializeApp } from '@firebase/app';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';

// Internal Components
import { registerDeviceToken } from './services';

// Internal Configs
import { appConfig } from 'config';

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = { ...appConfig.firebaseConfig };
const TOKEN_KEY = 'EPNS_BASE_PUSH_TOKEN';
const CACHEPREFIX = 'PUSH_TOKEN_';

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const getLocalToken = () => localStorage.getItem(TOKEN_KEY);
const setLocalToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const getPushToken = async () => {
  try {
    let token = getLocalToken(TOKEN_KEY);
    if (!token) {
      token = await getToken(messaging, {
        vapidKey: appConfig.vapidKey,
      });
      setLocalToken(token);
    }
    return token;
  } catch (err) {
    console.error('An error occurred while retrieving token. ', err);
    throw err;
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const browserFunction = async (account) => {
  try {
    const tokenKey = `${CACHEPREFIX}${account}`;
    const tokenExists = localStorage.getItem(tokenKey) || localStorage.getItem(CACHEPREFIX); //temp to prevent more than 1 account to register
    if (!tokenExists) {
      const response = await getPushToken();

      await registerDeviceToken({
        token: response,
        account: account,
      });
      localStorage.setItem(tokenKey, response);
      localStorage.setItem(CACHEPREFIX, 'response'); //temp to prevent more than 1 account to register
    }
  } catch (e) {
    console.error('Error setting up the browser notification', e);
  }
};
