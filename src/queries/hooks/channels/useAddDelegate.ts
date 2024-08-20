import { useMutation } from '@tanstack/react-query';

//Constants
import { addDelegate } from '../../queryKeys';

//Services
import { addChannelDelegate } from '../../services';

export const useAddDelegate = () =>
  useMutation({
    mutationKey: [addDelegate],
    mutationFn: addChannelDelegate
  });
