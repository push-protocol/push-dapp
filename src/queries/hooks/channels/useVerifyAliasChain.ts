import { useMutation } from '@tanstack/react-query';

import { verifyAliasChain } from '../../queryKeys';

import { verifyAliasChain as verifyAliasChainService } from '../../services';

export const useVerifyAliasChain = () =>
  useMutation({
    mutationKey: [verifyAliasChain],
    mutationFn: verifyAliasChainService,
  });
