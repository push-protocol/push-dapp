import { useMutation } from '@tanstack/react-query';
import { updateUserProfileDetails } from 'queries/queryKeys';
import { updateUserProfileInfo } from 'queries/services';

export const useUpdateUserProfileInfo = () =>
  useMutation({
    mutationKey: [updateUserProfileDetails],
    mutationFn: updateUserProfileInfo,
  });
