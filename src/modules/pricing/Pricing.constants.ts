import { FAQItemTypes, PricingPlansItemTypes } from './Pricing.types';

export const pricingPlanList: PricingPlansItemTypes[] = [
  {
    id: 1,
    planName: 'Basic',
    currency: null,
    price: 0,
    planFor: 'For Casual degens',
    isPopular: false,
    billingCriteria: '',
    planBenefits: [
      {
        benefitName: 'Web3 notification',
        limit: 'Unlimited',
      },
      {
        benefitName: 'Telegram Delivery',
        limit: 1000,
      },
      {
        benefitName: 'Email Delivery',
        limit: 1000,
      },
      {
        benefitName: 'No-code logic builder',
        limit: null,
      },
    ],
  },
  {
    id: 2,
    planName: 'Pro',
    currency: '$',
    price: 12.49,
    planFor: 'For individuals',
    isPopular: true,
    billingCriteria: 'per month billed yearly',
    planBenefits: [
      {
        benefitName: 'Web3 notification',
        limit: 'Unlimited',
      },
      {
        benefitName: 'Telegram Delivery',
        limit: 1000,
      },
      {
        benefitName: 'Email Delivery',
        limit: 1000,
      },
      {
        benefitName: 'No-code logic builder',
        limit: null,
      },
    ],
  },
  {
    id: 3,
    planName: 'Growth',
    currency: '$',
    price: 42.49,
    planFor: 'For growing apps',
    isPopular: false,
    billingCriteria: 'per month billed yearly',
    planBenefits: [
      {
        benefitName: 'Web3 notification',
        limit: 'Unlimited',
      },
      {
        benefitName: 'Telegram Delivery',
        limit: 50000,
      },
      {
        benefitName: 'Email Delivery',
        limit: 50000,
      },
      {
        benefitName: 'Discord Delivery',
        limit: 50000,
      },
      {
        benefitName: 'Priority support within 48hrs',
        limit: null,
      },
      {
        benefitName: 'Platform analytics ',
        limit: null,
      },
      {
        benefitName: 'No-code logic builder',
        limit: null,
      },
    ],
  },
  {
    id: 4,
    planName: 'Enterprise',
    currency: null,
    price: null,
    planFor: 'For advanced solutions',
    isPopular: false,
    billingCriteria: 'Custom pricing available',
    planBenefits: [
      {
        benefitName: 'Web3 notification',
        limit: 'Unlimited',
      },
      {
        benefitName: 'Custom Telegram Delivery',
        limit: null,
      },
      {
        benefitName: 'Custom Email Delivery',
        limit: null,
      },
      {
        benefitName: 'Custom Discord Delivery',
        limit: null,
      },
      {
        benefitName: 'Premium support within 24hrs',
        limit: null,
      },
      {
        benefitName: 'Platform analytics ',
        limit: null,
      },
      {
        benefitName: 'No-code logic builder',
        limit: null,
      },
    ],
  },
];

export const faqList: FAQItemTypes[] = [
  {
    id: 1,
    question: 'What is Push?',
    answer:
      'Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc). Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.',
  },
  {
    id: 2,
    question: 'What is Push trying to solve?',
    answer:
      'Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc). Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.',
  },
  {
    id: 3,
    question: 'What are the web3 communication products launched by Push?',
    answer:
      'Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc). Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.',
  },
  {
    id: 4,
    question: 'How can I use Push as an end-user?',
    answer:
      'Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc). Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.',
  },
  {
    id: 5,
    question: 'Is Push a blockchain? Is Push decentralised?',
    answer:
      'Push is the world’s first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc). Any smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.',
  },
];
