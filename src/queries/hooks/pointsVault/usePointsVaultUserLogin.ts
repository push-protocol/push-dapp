import { useMutation } from '@tanstack/react-query';

import { pointsVaultUserLogin } from '../../queryKeys';

import { pointsVaultUserLogin as pointsVaultUserLoginfunction } from '../../services';

export const usePointsVaultUserLogin = () =>
  useMutation({
    mutationKey: [pointsVaultUserLogin],
    mutationFn: pointsVaultUserLoginfunction,
  });
