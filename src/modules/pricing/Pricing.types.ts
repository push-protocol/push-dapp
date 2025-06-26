export type PricingPlan = {
  id: number;
  planName: string;
  currency: string | null;
  price: number | null;
  planFor: string;
  isPopular: boolean;
  billingCriteria: string;
  planBenefits: {
    benefitName: string;
    limit: string | number | null;
  }[];
};

export type PricingPlanTabsType = 'yearly' | 'monthly';
