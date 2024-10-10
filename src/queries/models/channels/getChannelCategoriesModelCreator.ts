import { ChannelCategoriesModelledResponse, ChannelCategoriesResponse } from 'queries';

export const getChannelCategoriesModelledCreator = (
  response: ChannelCategoriesResponse
): ChannelCategoriesModelledResponse => {
  return {
    tags: response?.tags?.tags || [],
    selectFieldTags: response?.tags?.tags?.map((tag) => ({ label: tag, value: tag })) || [],
  };
};
