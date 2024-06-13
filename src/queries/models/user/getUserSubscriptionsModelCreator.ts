import { UserSubscriptionsResponse } from 'queries/types';

export const getUserSubscriptionsModelCreator = (response: UserSubscriptionsResponse): Array<string> => {
  return response.map((item) => item.channel);
};
