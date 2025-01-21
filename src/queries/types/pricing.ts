export type PricingPlanType = {
  id: number;
  name: string;
  value: number;
  email_quota: number;
  telegram_quota: number;
  discord_quota: number;
  duration: number;
  discount: number;
  description: string; // Description is a stringified array
};

export type PricingInfoResponse = PricingPlanType[];
