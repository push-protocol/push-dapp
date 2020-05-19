import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";
import App from "pages/App";
import * as serviceWorker from "./serviceWorker";

import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from "ethers";

// You should replace this uri with your own and put it into a .env file
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app",
});

function getLibrary(provider, connector) {
  return new ethers.providers.Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(

    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
      { <App /> }
      </Web3ReactProvider>
    </ApolloProvider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
