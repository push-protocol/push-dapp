import { useQuery } from '@tanstack/react-query';
import { discordDetails } from 'queries/queryKeys';
import { getUserDiscordDetails } from 'queries/services/rewards';

export const useGetUserDiscordDetails = (token: string | undefined) => {
  const query = useQuery({
    queryKey: [discordDetails, token],
    queryFn: () => getUserDiscordDetails(token!),
    enabled: !!token,
  });

  return query;
};
