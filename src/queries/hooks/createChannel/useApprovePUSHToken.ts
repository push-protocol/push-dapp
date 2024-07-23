import { useMutation } from '@tanstack/react-query';
import { approvingPUSHToken } from 'queries/queryKeys';
import { approvePUSHTokens } from 'queries/services';

export const useApprovePUSHToken = () =>
  useMutation({
    mutationKey: [approvingPUSHToken],
    mutationFn: approvePUSHTokens
  });
