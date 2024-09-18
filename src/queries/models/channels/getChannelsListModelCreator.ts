import { ChannelsListModelledResponse } from 'queries/types';

//any remodelling needed in the response can be done here
export const getChannelsListModelCreator = (response: ChannelsListModelledResponse): ChannelsListModelledResponse => {
  console.debug(response, 'response');
  return response;
};
