import { useGetPricingInfo } from 'queries';

export const useGetPricingPlanDetails = (pricingPlanStatus: any, walletAddress: string) => {
  const { data: pricingInfoList } = useGetPricingInfo();
  const pricingListDescriptions = [
    {
      id: 1,
      description: 'For casual degens',
    },
    {
      id: 2,
      description: 'For individuals',
    },
    {
      id: 3,
      description: 'For growing apps',
    },
    {
      id: 4,
      description: 'For advanced solutions',
    },
  ];

  const selectedPlan = pricingInfoList?.find(
    (planItem: { id: number }) =>
      planItem?.id == parseInt(pricingPlanStatus?.pricing_plan_id ? pricingPlanStatus?.pricing_plan_id : '1'),
  );

  const isUserOnFreePlan = selectedPlan?.id == 1;
  const isUserOnEnterprisePlan = selectedPlan?.id == 4;
  const isUserOnYearlyPlan = pricingPlanStatus?.pricingPlanTaken?.[0]?.duration == 12;

  return { selectedPlan, isUserOnFreePlan, isUserOnEnterprisePlan, isUserOnYearlyPlan, pricingListDescriptions };
};
