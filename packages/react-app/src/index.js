import React from "react";
import ReactDOM from "react-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import './index.css';

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from "ethers";

import * as dotenv from "dotenv";
dotenv.config();

// You should replace this uri with your own and put it into a .env file
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/epnsproject/epnsstaging",
  cache: new InMemoryCache()
});

ReactDOM.render(

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root"),

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
