import { useMutation } from '@tanstack/react-query';

//Constants
import { initiateNewChain } from '../../queryKeys';

//Services
import { initiateNewChain as initiateNewChainService } from '../../services';

export const useInitiateNewChain = () =>
  useMutation({
    mutationKey: [initiateNewChain],
    mutationFn: initiateNewChainService,
  });
