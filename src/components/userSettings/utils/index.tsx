type ExpirationDetails = {
  timeRemaining?: string; // Human-readable time remaining
  expirationDate?: string; // Formatted expiration date
  isExpired: boolean; // Flag to indicate if the plan has expired
};

export const calculateExpirationDetails = (
  pricingPlanStatus: { expirationTimestamp: number } | null,
): ExpirationDetails => {
  if (!pricingPlanStatus) {
    return { isExpired: true }; // If no pricing plan, mark it as expired
  }

  const currentTimestamp = Date.now();
  const expirationTimestamp = pricingPlanStatus.expirationTimestamp;

  if (currentTimestamp >= expirationTimestamp) {
    return { isExpired: true }; // If expired, no time remaining or expiry date
  }

  const timeRemainingMillis = expirationTimestamp - currentTimestamp;

  // Calculate time components
  const days = Math.floor(timeRemainingMillis / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemainingMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemainingMillis % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemainingMillis % (1000 * 60)) / 1000);

  // Create human-readable time remaining string
  const timeRemaining = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  // Format expiration date as "Month Day, Year" (e.g., "November 20, 2024")
  const expirationDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(expirationTimestamp));

  return {
    timeRemaining,
    expirationDate,
    isExpired: false, // Plan is active
  };
};
