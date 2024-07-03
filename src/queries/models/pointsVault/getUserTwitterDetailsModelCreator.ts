import { UserTwitterDetailsModelledResponse, UserTwitterDetailsResponse } from 'queries/types';

export const getUserTwitterDetailsModelCreator = (
  response: UserTwitterDetailsResponse
): UserTwitterDetailsModelledResponse => {
  return {
    id: response.data.id,
    followersCount: response.data.public_metrics.followers_count,
    followingCount: response.data.public_metrics.following_count,
    likeCount: response.data.public_metrics.like_count,
    listedCount: response.data.public_metrics.listed_count,
    name: response.data.name,
    tweetCount: response.data.public_metrics.tweet_count,
    username: response.data.username,
  };
};
