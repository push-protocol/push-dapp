// React + Web3 Essentials
import { Web3OnboardProvider } from '@web3-onboard/react'
import { ethers } from "ethers";
import React from "react";

// External Packages
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Internal Components
import App from "./App";
import "./index.css";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import ChatUserContextProvider from './contexts/ChatUserContext';
import { VideoCallContextProvider } from './contexts/VideoCallContext';
import ErrorContextProvider from './contexts/ErrorContext';



// Internal Configs
import * as dotenv from "dotenv";
import { web3Onboard } from './connectors/web3Onboard';

// enable environmental variables across the entire application
dotenv.config();
// You should replace this uri with your own and put it into a .env file
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/epnsproject/epnsstaging",
  cache: new InMemoryCache(),
});

/**
 * A utility function used to get the provider
 */
function getLibrary(provider) {
  const gottenProvider = new ethers.providers.Web3Provider(provider, "any");
  // adding this is important to deal with changing networks
  gottenProvider.on("network", (_, oldNetwork) => {
    if (oldNetwork) {
      // when network has been changed, refresh the page
      window.location.reload();
    }
  });
  return gottenProvider;
}

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Web3OnboardProvider web3Onboard={web3Onboard}>
          <ErrorContextProvider>
          <ChatUserContextProvider>
            <VideoCallContextProvider>
              <App />
            </VideoCallContextProvider>
          </ChatUserContextProvider>
          </ErrorContextProvider>
        </Web3OnboardProvider>
      </ApolloProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
