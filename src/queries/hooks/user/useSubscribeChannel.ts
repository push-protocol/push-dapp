import { useMutation } from '@tanstack/react-query';

import { subscribe } from 'queries/queryKeys';

import { subscribeToChannel } from 'queries/services';

export const useSubscribeChannel = () =>
  useMutation({
    mutationKey: [subscribe],
    mutationFn: subscribeToChannel,
  });
