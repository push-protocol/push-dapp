import { useMutation } from '@tanstack/react-query';

import { pointsVaultUserLoginKey } from '../../queryKeys';

import { pointsVaultUserLogin as pointsVaultUserLoginfunction } from '../../services';

export const usePointsVaultUserLogin = () =>
  useMutation({
    mutationKey: [pointsVaultUserLoginKey],
    mutationFn: pointsVaultUserLoginfunction,
  });
