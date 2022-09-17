// load the appropriate config as per the server state
let appendName = 'prod';

if (process.env.REACT_APP_DEPLOY_ENV == 'PROD') {
  appendName = 'prod';
} else if (process.env.REACT_APP_DEPLOY_ENV == 'STAGING') {
  appendName = 'staging';
} else if (process.env.REACT_APP_DEPLOY_ENV == 'DEV') {
  appendName = 'dev';
} else if (process.env.REACT_APP_DEPLOY_ENV == 'LOCALHOST') {
  appendName = 'localhost';
} else if (process.env.REACT_APP_DEPLOY_ENV == 'W2W') {
  appendName = 'staging';
} else if (process.env.REACT_APP_DEPLOY_ENV == 'ALPHA') {
  appendName = 'prod';
} else {
  throw new Error('⚠️  Provide proper REACT_APP_DEPLOY_ENV in .env ⚠️');
}

// dynamic import
const dynamicConfig = require(`./config-${appendName}`).config;
const addresses = require(`./config-${appendName}`).addresses;

const generalConfig = require('./config-general').config;
const abis = require('./config-general').abis;

// combine config
const appConfig = { ...dynamicConfig, ...generalConfig };

// export it out
export { appConfig, addresses, abis };
