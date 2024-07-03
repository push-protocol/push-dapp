import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  pointsVaultApprovedUsers,
  pointsVaultPendingUsers,
  pointsVaultRejectedUsers,
  pointsVaultUsers,
} from 'queries/queryKeys';
import { approvePointsVaultUser } from 'queries/services';
import { PointsVaultActivitiesResponse, PointsVaultStatus, ApprovePointsVaultUserPayload } from 'queries/types';
import { usePointsVaultToken } from './usePointsVaultToken';

const getKeysFromStatus = (status: PointsVaultStatus) => {
  return status === 'REJECTED'
    ? [pointsVaultUsers, pointsVaultRejectedUsers]
    : [pointsVaultUsers, pointsVaultPendingUsers];
};

type UseApprovePVUserProps = {
  onSuccess?: () => void;
  onError?: () => void;
};

export const useApprovePVUser = ({ onSuccess, onError }: UseApprovePVUserProps) => {
  const queryClient = useQueryClient();
  const token = usePointsVaultToken();

  const mutation = useMutation({
    mutationFn: (payload) => {
      return approvePointsVaultUser({ ...payload, token });
    },
    onMutate: async ({ currentStatus }: ApprovePointsVaultUserPayload) => {
      const keys = getKeysFromStatus(currentStatus);
      await queryClient.cancelQueries({ queryKey: keys });
      await queryClient.cancelQueries({ queryKey: [pointsVaultUsers, pointsVaultApprovedUsers] });
      const previousResponse: InfiniteData<PointsVaultActivitiesResponse> | undefined = queryClient.getQueryData(keys);
      return { previousResponse };
    },
    onError: async (_, { currentStatus }, context) => {
      const keys = getKeysFromStatus(currentStatus);
      await queryClient.setQueryData(keys, context?.previousResponse);
      onError?.();
    },
    onSettled: async (_, __, { currentStatus }) => {
      const keys = getKeysFromStatus(currentStatus);
      await queryClient.invalidateQueries({ queryKey: keys });
      await queryClient.invalidateQueries({ queryKey: [pointsVaultUsers, pointsVaultApprovedUsers] });
      onSuccess?.();
    },
  });

  return { approvePVUserMutation: mutation };
};
