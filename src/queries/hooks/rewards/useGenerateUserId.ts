import { useMutation } from '@tanstack/react-query';
import { generateUserIdByWallet } from 'queries/queryKeys';
import { generateUserId } from 'queries/services/rewards';

export const useGenerateUserId = () =>
  useMutation({
    mutationKey: [generateUserIdByWallet],
    mutationFn: generateUserId
  });
