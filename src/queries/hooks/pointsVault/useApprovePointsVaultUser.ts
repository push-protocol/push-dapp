import { useMutation } from '@tanstack/react-query';
import { approveVaultUser } from 'queries/queryKeys';
import { approvePointsVaultUser } from 'queries/services';

export const useApprovePointsVaultUser = () => {
  return useMutation({
    mutationFn: approvePointsVaultUser,
    mutationKey: [approveVaultUser],
  });
};
