// React + Web3 Essentials
import { Web3OnboardProvider } from '@web3-onboard/react';
import ReactDOM from 'react-dom/client'

// External Packages
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Internal Components
import App from "./App";
import ErrorContextProvider from './contexts/ErrorContext';
import { VideoCallContextProvider } from './contexts/VideoCallContext';
import "./index.css";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import GlobalContextProvider from './contexts/GlobalContext';

// Internal Configs
import * as dotenv from "dotenv";
import { web3Onboard } from './connectors/web3Onboard';
import AppContextProvider from './contexts/AppContext';

// enable environmental variables across the entire application
dotenv.config();
// You should replace this uri with your own and put it into a .env file
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/epnsproject/epnsstaging",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <GlobalContextProvider>
          <Web3OnboardProvider web3Onboard={web3Onboard}>
            <ErrorContextProvider>
                <AppContextProvider>
                  <VideoCallContextProvider>
                    <App />
                  </VideoCallContextProvider>
                </AppContextProvider>
            </ErrorContextProvider>
          </Web3OnboardProvider>
        </GlobalContextProvider>
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
