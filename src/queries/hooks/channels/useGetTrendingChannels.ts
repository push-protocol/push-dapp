import { useQuery } from '@tanstack/react-query';

import { TrendingChannelsParams } from '../../types';
import { trendingChannels } from '../../queryKeys';
import { getTrendingChannels } from '../../services';

export const useGetTrendingChannels = (options: TrendingChannelsParams) =>
  useQuery({ queryKey: [trendingChannels, options], queryFn: () => getTrendingChannels(options) });
