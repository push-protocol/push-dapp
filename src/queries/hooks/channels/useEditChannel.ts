import { useMutation } from '@tanstack/react-query';
import { updateChannelDetails } from 'queries/queryKeys';
import { editChannelDetails } from 'queries/services';

export const useEditChannel = () =>
  useMutation({
    mutationKey: [updateChannelDetails],
    mutationFn: editChannelDetails
  });
