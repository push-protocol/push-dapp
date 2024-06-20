import { FC, useEffect, useState } from 'react';
import { Box, Button } from 'blocks';
import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
import APP_PATHS from 'config/AppPaths';
import { getAuth } from "firebase/auth";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const rewardsArray = [
  {
    title: 'Follow @PushProtocol on X',
    points: 10000,
    buttonText: 'Follow',
  },
  {
    title: 'Join Push Discord',
    points: 10000,
    buttonText: 'Join Discord',
  },
  {
    title: 'Send 20 Messages using Push Chat',
    points: 1500,
    buttonText: 'Claim',
    disabled: true,
  },
  {
    title: 'Subscribe to 3 Channels on PushX',
    subtitle: 'Visit app.push.org/channels and opt-in to any 3 channels.',
    points: 1500,
    buttonText: 'Follow',
  },
];

export type RewardActivitiesProps = {};

const RewardsActivitiesList: FC<RewardActivitiesProps> = () => {


  //TODO: Work In Progress for the APIs integration
  // const [token, setToken] = useState(null);

  // const url = window.location.origin;
  // console.log("URL >>>", url);
  // // window.location.replace(`${url}${APP_PATHS.Channels}`);

  // const handleDiscordLogin = () => {
  //   const CLIENT_ID = '1252558464354484316';
  //   const REDIRECT_URI = `${url}${APP_PATHS.Rewards}`;
  //   const SCOPE = 'identify guilds guilds.join guilds.members.read';
  //   const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}`;

  //   window.location.href = AUTH_URL;
  // }

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const token = new URLSearchParams(hash.substring(1)).get('access_token');
  //     console.log("Token >>>", token);
  //     setToken(token);
  //     window.location.hash = '';
  //   }
  // }, []);

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCBcenRUEiP1VhssDp3a3VBhUa5xS_xKFA",
  //   authDomain: "push-login-8a0f9.firebaseapp.com",
  //   projectId: "push-login-8a0f9",
  //   storageBucket: "push-login-8a0f9.appspot.com",
  //   messagingSenderId: "937398385572",
  //   appId: "1:937398385572:web:d9fb710282e1831c859f31",
  //   measurementId: "G-0XW5EWYC8Q"
  // };

  // const app = initializeApp(firebaseConfig);

  // const auth = getAuth();
  // auth.languageCode = 'it';

  // const provider = new TwitterAuthProvider();
  // const handleLogin = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  //       // You can use these server side with your app's credentials to access the Twitter API.
  //       const credential = TwitterAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const secret = credential.secret;

  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log("User Details >>>>", user, token, secret);
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = TwitterAuthProvider.credentialFromError(error);

  //       console.log("Error >>>>>>>", errorCode, errorMessage, email, credential);
  //       // ...
  //     });
  // }

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ ml: "s4", initial: "s1" }}
    >
      {/* <Box>
        <Button onClick={handleDiscordLogin}>Join Discord</Button>
        <Button onClick={handleLogin}>Twitter</Button>
      </Box> */}


      {rewardsArray.map((item) => (
        <RewardsActivitiesListItem
          title={item.title}
          subtitle={item.subtitle}
          points={item.points}
          buttonText={item.buttonText}
          disabled={item.disabled}
        />
      ))}
    </Box>
  );
};

export { RewardsActivitiesList };
