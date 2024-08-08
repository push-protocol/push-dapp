import { useMutation } from '@tanstack/react-query';

import { unsubscribe } from 'queries/queryKeys';

import { unsubscribeChannel } from 'queries/services';

export const useUnsubscribeChannel = () =>
  useMutation({
    mutationKey: [unsubscribe],
    mutationFn: unsubscribeChannel,
  });
