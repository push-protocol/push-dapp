import { useMutation } from '@tanstack/react-query';
import { deactivatingChannel } from 'queries/queryKeys';
import { deactivateChannel } from 'queries/services';

export const useDeactivateChannel = () =>
  useMutation({
    mutationKey: [deactivatingChannel],
    mutationFn: deactivateChannel
  });
