import { useMutation } from '@tanstack/react-query';
import { reactivatingChannel } from 'queries/queryKeys';
import { reactivateChannel } from 'queries/services';

export const useReactivateChannel = () =>
  useMutation({
    mutationKey: [reactivatingChannel],
    mutationFn: reactivateChannel
  });
