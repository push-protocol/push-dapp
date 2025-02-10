import { appConfig } from 'config';

/**
 * Rewards system is a separate micro-service backend so we have separate baseURLs for it.
 *
 * - prod, staging and dev env will only allow request from app.push.org, dev.push.org and staging.push.org
 * - w2w and alpha will make request to the dev baseURL.
 * - preview will also make request to staging.push.org
 */
export const getRewardsBaseURL = () => {
  switch (appConfig.appEnv) {
    case 'prod':
      return `https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case 'staging':
      return `https://us-east1-push-stage-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case 'dev':
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
    default:
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
  }
};

export const getCustomDeliveryURL = () => {
  switch (appConfig.appEnv) {
    case 'prod':
      return `https://custom-delivery.push.org`;
    case 'staging':
      return `https://custom-delivery-dev.push.org`;
    case 'dev':
      return `https://custom-delivery-dev.push.org`;
    default:
      return `https://custom-delivery-dev.push.org`;
  }
};

export const analyticsBaseURL = 'https://backend.epns.io/apis/v1';
export const analyticsBaseURLV2 = 'https://backend.epns.io/apis/v2';
export const pushsupportBaseURL = 'https://tooling.push.org/apis';
