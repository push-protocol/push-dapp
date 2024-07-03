import { UserTwitterDetailsResponse } from 'queries/types';

export const getUserTwitterDetailsModelCreator = (
  response: UserTwitterDetailsResponse
): UserTwitterDetailsResponse | undefined => {
  if (response.data) return response;
  return undefined;
};
