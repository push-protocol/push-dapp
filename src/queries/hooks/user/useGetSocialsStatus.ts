import { useMutation } from '@tanstack/react-query';

import { userSocialStatus } from '../../queryKeys';
import { getUserSocialsStatus } from '../../services';

export const useGetSocialsStatus = () =>
  useMutation({
    mutationKey: [userSocialStatus],
    mutationFn: getUserSocialsStatus,
  });
