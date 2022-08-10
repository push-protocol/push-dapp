import { initializeApp } from "@firebase/app";
import { envConfig } from "@project/contracts";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";
import { postReq } from "api";

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = { ...envConfig.firebaseConfig };
const TOKEN_KEY = "EPNS_BASE_PUSH_TOKEN";
const CACHEPREFIX = "PUSH_TOKEN_";

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const getLocalToken = () => localStorage.getItem(TOKEN_KEY);
const setLocalToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const getPushToken = async () => {
  try {
    let token = getLocalToken(TOKEN_KEY);
    if(!token){
      token = await getToken(messaging, {
        vapidKey: envConfig.vapidKey,
      });
      setLocalToken(token);
    }
    return token;
  } catch (err) {
    console.log('\n\n\n\n')
    console.log("An error occurred while retrieving token. ", err);
    console.log('\n\n\n\n')
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export const browserFunction = async(account)=>{
  try{
    const tokenKey = `${CACHEPREFIX}${account}`;
    const tokenExists = localStorage.getItem(tokenKey) || localStorage.getItem(CACHEPREFIX); //temp to prevent more than 1 account to register
    if (!tokenExists) {
      const response = await getPushToken();
      const object = {
        op: 'register',
        wallet: account.toLowerCase(),
        device_token: response,
        platform: 'dapp',
      };
      await postReq('/pushtokens/register', object);
      localStorage.setItem(tokenKey, response);
      localStorage.setItem(CACHEPREFIX, 'response'); //temp to prevent more than 1 account to register
    }
  }catch(e){
    console.log("Error setting up the browser notification",e);
  }
}