/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// load the appropriate config as per the server state
let appendName = 'prod';

if (import.meta.env.VITE_APP_DEPLOY_ENV == 'PROD') {
  appendName = 'prod';
} else if (import.meta.env.VITE_APP_DEPLOY_ENV == 'STAGING') {
  appendName = 'staging';
} else if (import.meta.env.VITE_APP_DEPLOY_ENV == 'DEV') {
  appendName = 'dev';
} else if (import.meta.env.VITE_APP_DEPLOY_ENV == 'PREVIEW') {
  appendName = 'dev';
} else if (import.meta.env.VITE_APP_DEPLOY_ENV == 'LOCALHOST') {
  appendName = 'localhost';
} else if (import.meta.env.VITE_APP_DEPLOY_ENV == 'W2W') {
  appendName = 'staging';
} else if (import.meta.env.VITE_APP_DEPLOY_ENV == 'ALPHA') {
  appendName = 'prod';
} else {
  throw new Error('⚠️  Provide proper VITE_APP_DEPLOY_ENV in .env ⚠️');
}

// dynamic import
const dynamicConfigModule = await import(`./config-${appendName}.js`);
const dynamicConfig = dynamicConfigModule.config;
const addressesModule = await import(`./config-${appendName}.js`);
const addresses = addressesModule.addresses;
const CHAIN_DETAILSMODULE = await import(`./config-${appendName}.js`);
const CHAIN_DETAILS = CHAIN_DETAILSMODULE.CHAIN_DETAILS;

const generalConfigModule = await import('./config-general');
const generalConfig = generalConfigModule.config;
const abisModule = await import('./config-general');
const abis = abisModule.abis;

// combine config
const appConfig = { ...dynamicConfig, ...generalConfig };

// export it out
export { CHAIN_DETAILS, abis, addresses, appConfig };

export const defaultSnapOrigin = 'npm:@pushprotocol/snap';
