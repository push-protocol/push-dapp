import { useMutation } from '@tanstack/react-query';

import { vaultUserLogin } from '../../queryKeys';

import { PointsVaultUserLoginProps } from '../../types';
import { pointsVaultUserLogin } from '../../services';

export const usePointsVaultUserLogin = (payload: PointsVaultUserLoginProps) =>
  useMutation({
    mutationKey: [vaultUserLogin, payload.username, payload.password],
    mutationFn: pointsVaultUserLogin,
  });
