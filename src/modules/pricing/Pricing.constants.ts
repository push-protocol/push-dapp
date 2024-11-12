import { PricingPlansItemTypes } from './Pricing.types';

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
