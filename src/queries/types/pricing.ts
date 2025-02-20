export type PricingPlanType = {
  id: number;
  name: string;
  value: number;
  email_quota: number;
  telegram_quota: number;
  discord_quota: number;
  duration: number;
  discount: number;
  description: string;
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
  pricingPlanTaken: Array<{
    id: number;
    channel: string;
    created_at: string;
    duration: number;
    expiration: number;
    is_active: number;
    next_renewal: string | null;
    pricing_plan_id: string;
  }>;
} | null;

export type PricingPlanPaymentDetails = {
  id: number;
  channel: string;
  payment_id: string;
  pricing_plan_id: string;
  amount: number;
  currency: string;
  created_at: number;
  payment_network: string;
  payment_status: 'SUCCESS' | 'INITIATED' | 'FAILED';
  transaction_hash: string;
  expires_at: number;
  message: string;
  durationInMonths: number;
};

export type PricingPaymentHistory = PricingPlanPaymentDetails[];

export type InitiatePaymentType = {
  success: boolean;
  paymentId: string;
  amount: number;
  message: string;
};
