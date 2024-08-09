import { useMutation } from '@tanstack/react-query';
import { addNewSubgraph } from 'queries/queryKeys';
import { addChannelSubgraph } from 'queries/services';

export const useAddSubgraph = () =>
  useMutation({
    mutationKey: [addNewSubgraph],
    mutationFn: addChannelSubgraph
  });
