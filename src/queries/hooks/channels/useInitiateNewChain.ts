import { useMutation } from '@tanstack/react-query';

import { initiateNewChain } from '../../queryKeys';

import { initiateNewChain as initiateNewChainService } from '../../services';

export const useInitiateNewChain = () =>
  useMutation({
    mutationKey: [initiateNewChain],
    mutationFn: initiateNewChainService,
  });
