import { useMutation } from '@tanstack/react-query';
import { createUserRewardsDetails } from '../../queryKeys';
import { createUserRewardsDetail } from '../../services';

export const useCreateUserRewardsDetails = () =>
  useMutation({
    mutationKey: [createUserRewardsDetails],
    mutationFn: createUserRewardsDetail,
  });
