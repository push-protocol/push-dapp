// React + Web3 Essentials
import { Web3OnboardProvider } from '@web3-onboard/react';
import ReactDOM from 'react-dom/client';

// External Packages
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Internal Components
import App from './App';
import ErrorContextProvider from './contexts/ErrorContext';
import { VideoCallContextProvider } from './contexts/VideoCallContext';
import './index.css';
import store from './redux/store';
import { unregister as unregisterServiceWorker } from './serviceWorker';
import GlobalContextProvider from './contexts/GlobalContext';

// Internal Configs
import { config as dotEnvConfig } from 'dotenv';
import { web3Onboard } from './connectors/web3Onboard';
import AppContextProvider from './contexts/AppContext';
import { getPreviewURL } from '../vite.config';

// enable environmental variables across the entire application
dotEnvConfig();

const publicURL = import.meta.env.PUBLIC_URL;

const getBaseName = () => getPreviewURL() || publicURL;
console.log(getBaseName());
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={getBaseName()}>
    <Provider store={store}>
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
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregisterServiceWorker();
