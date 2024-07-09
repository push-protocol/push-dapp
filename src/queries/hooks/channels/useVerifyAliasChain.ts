import { useMutation } from '@tanstack/react-query';

//Constants
import { verifyAliasChain } from '../../queryKeys';

//Services
import { verifyAliasChain as verifyAliasChainService } from '../../services';

export const useVerifyAliasChain = () =>
  useMutation({
    mutationKey: [verifyAliasChain],
    mutationFn: verifyAliasChainService,
  });
