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

export type PricingPlanStatusResponse = {
  id: number;
  channel: string;
  email_quota_used: number;
  telegram_quota_used: number;
  discord_quota_used: number;
  pricing_plan_id: string;
  email_total_quota: number;
  telegram_total_quota: number;
  discord_total_quota: number;
  expirationTimestamp: number;
} | null;
