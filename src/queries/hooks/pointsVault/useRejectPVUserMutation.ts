import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  pointsVaultApprovedUsers,
  pointsVaultPendingUsers,
  pointsVaultRejectedUsers,
  pointsVaultUsers,
} from 'queries/queryKeys';
import { rejectPointsVaultUser } from 'queries/services';
import { PointsVaultActivitiesResponse, PointsVaultStatus, RejectPointsVaultUserPayload } from 'queries/types';
import { usePointsVaultToken } from './usePointsVaultToken';

const getKeysFromStatus = (status: PointsVaultStatus) => {
  return status === 'COMPLETED'
    ? [pointsVaultUsers, pointsVaultApprovedUsers]
    : [pointsVaultUsers, pointsVaultPendingUsers];
};

type UseRejectPVUserProps = {
  onSuccess?: () => void;
  onError?: () => void;
};

export const useRejectPVUser = ({ onError, onSuccess }: UseRejectPVUserProps) => {
  const queryClient = useQueryClient();
  const token = usePointsVaultToken();

  const mutation = useMutation({
    mutationFn: (payload) => {
      return rejectPointsVaultUser({ ...payload, token });
    },
    onMutate: async ({ currentStatus }: RejectPointsVaultUserPayload) => {
      const keys = getKeysFromStatus(currentStatus);
      await queryClient.cancelQueries({ queryKey: keys });
      await queryClient.cancelQueries({ queryKey: [pointsVaultUsers, pointsVaultRejectedUsers] });
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
      await queryClient.invalidateQueries({ queryKey: [pointsVaultUsers, pointsVaultRejectedUsers] });
      onSuccess?.();
    },
  });

  return { rejectPVUserMutation: mutation };
};
