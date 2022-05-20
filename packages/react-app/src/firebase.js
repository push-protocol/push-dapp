import { initializeApp } from "@firebase/app";
import { envConfig } from "@project/contracts";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = { ...envConfig.firebaseConfig };
const TOKEN_KEY = "EPNS_BASE_PUSH_TOKEN";

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