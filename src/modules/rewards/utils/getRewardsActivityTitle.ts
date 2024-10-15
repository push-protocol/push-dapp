export const getRewardsActivityTitle = (activityTitle: string) => {
  if (!activityTitle) return null; // Ensure activityTitle is not null or undefined

  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const matches = Array.from(activityTitle.matchAll(regex)); // Convert iterator to an array

  if (matches.length >= 1) {
    const preText = activityTitle.substring(0, matches[0].index);
    const linkedText = matches[0][1];
    const url = matches[0][2];

    let innerText = '';
    let secondLinkedText = '';
    let secondUrl = '';
    let postText = '';

    if (matches.length >= 2) {
      innerText = activityTitle.substring(matches[0].index + matches[0][0].length, matches[1].index);
      secondLinkedText = matches[1][1];
      secondUrl = matches[1][2];
      postText = activityTitle.substring(matches[1].index + matches[1][0].length);
    } else {
      postText = activityTitle.substring(matches[0].index + matches[0][0].length);
    }

    return {
      preText,
      linkedText,
      url,
      innerText,
      secondLinkedText,
      secondUrl,
      postText,
    };
  } else {
    return null;
  }
};
