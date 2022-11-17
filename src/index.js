// React + Web3 Essentials
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";

// External Packages
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";

// Internal Components
import { VideoCallContextProvider } from 'contexts/VideoCallContext';
import App from "./App";
import "./index.css";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";

// Internal Configs
import * as dotenv from "dotenv";

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
  <HashRouter>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <VideoCallContextProvider>
            <App />
          </VideoCallContextProvider>
        </Web3ReactProvider>
      </ApolloProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
