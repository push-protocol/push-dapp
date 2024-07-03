import { useMutationState } from '@tanstack/react-query';
import { pointsVaultUserLogin } from 'queries/queryKeys';

export const usePointsVaultToken = () => {
  const data: any = useMutationState({
    filters: { mutationKey: [pointsVaultUserLogin] },
    select: (mutation) => mutation.state.data,
  });

  return data?.[0]?.token as string;
};
