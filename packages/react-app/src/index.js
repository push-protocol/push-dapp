import React from "react";
import ReactDOM from "react-dom";
import { ethers } from "ethers";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import * as serviceWorker from "./serviceWorker";
import * as dotenv from "dotenv";

import App from "./App";
import store from "./redux/store";
import "./index.css";

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
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
