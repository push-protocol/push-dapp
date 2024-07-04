export const getRewardsActivityTitle = (activityTitle: string) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/;
  const match = activityTitle?.match(regex);
  if (match) {
    const preText = activityTitle.substring(0, match.index);
    const linkedText = match[1];
    const url = match[2];
    let postText = '';
    if (match.index) {
      postText = activityTitle.substring(match.index + match[0].length);
    }
    return {
      preText,
      linkedText,
      url,
      postText
    };
  } else {
    return null;
  }
};
