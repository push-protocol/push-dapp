import { useQuery } from '@tanstack/react-query';

import { getTrendingChannels } from 'queries/services';
import { trendingChannels } from '../../queryKeys';
import { TrendingChannelsParams } from 'queries/types/channels';

export const useGetTrendingChannels = (options: TrendingChannelsParams) =>
  useQuery({ queryKey: [trendingChannels, options], queryFn: () => getTrendingChannels(options) });
