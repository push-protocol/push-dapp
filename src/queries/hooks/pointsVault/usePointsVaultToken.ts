import { useMutationState } from '@tanstack/react-query';
import { pointsVaultUserLoginKey } from 'queries/queryKeys';

export const usePointsVaultToken = () => {
  const data: any = useMutationState({
    filters: { mutationKey: [pointsVaultUserLoginKey] },
    select: (mutation) => mutation.state.data,
  });

  return data?.[0]?.token as string;
};
