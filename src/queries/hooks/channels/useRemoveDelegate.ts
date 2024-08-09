import { useMutation } from '@tanstack/react-query';

//Constants
import { removeDelegate } from '../../queryKeys';

//Services
import { removeChannelDelegate } from '../../services';

export const useRemoveDelegate = () =>
  useMutation({
    mutationKey: [removeDelegate],
    mutationFn: removeChannelDelegate
  });
