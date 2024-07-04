import { useMutation } from '@tanstack/react-query';
import { createUserRewardsDetails } from '../../queryKeys';
import { createUserRewardsDetail } from '../../services';

export const useCreateRewardsUser = () =>
  useMutation({
    mutationKey: [createUserRewardsDetails],
    mutationFn: createUserRewardsDetail,
  });
