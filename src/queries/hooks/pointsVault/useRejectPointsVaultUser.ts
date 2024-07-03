import { useMutation } from '@tanstack/react-query';
import { rejectVaultUser } from 'queries/queryKeys';
import { rejectPointsVaultUser } from 'queries/services';

export const useRejectPointsVaultUser = () => {
  return useMutation({
    mutationFn: rejectPointsVaultUser,
    mutationKey: [rejectVaultUser],
  });
};
