import { useMutation } from '@tanstack/react-query';
import { creatingNewChannel } from 'queries/queryKeys';
import { createNewChannel } from 'queries/services';

export const useCreateChannel = () =>
  useMutation({
    mutationKey: [creatingNewChannel],
    mutationFn: createNewChannel
  });
