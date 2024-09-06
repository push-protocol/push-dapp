// process date
const processDateString = (dateString: string) => {
  return new Date(dateString);
};

// Function to find the closest date to the target
const findClosest = (data: any[], accessor: (item: any) => Date, target = Date.now()) => {
  return data.reduce((prev, curr) => {
    const a = Math.abs(accessor(curr).getTime() - target);
    const b = Math.abs(accessor(prev).getTime() - target);
    return a - b < 0 ? curr : prev;
  });
};

// check time to current time
export const checkTimeToCurrent = (updatedAt: string | undefined) => {
  if (!updatedAt) return true;
  const lastActivityDate = new Date(updatedAt).getTime();
  const currentTime = Date.now();
  const timeDifference = currentTime - lastActivityDate;
  const hoursDifference = timeDifference / (1000 * 60 * 60);
  return hoursDifference < 24;
};

// Function to extract the day number from the activity title or type
export const getDayNumber = (activity: any) => {
  const dayMatch = activity?.activityTitle.match(/Day (\d+)/) || activity?.activityType.match(/day(\d+)/);
  return dayMatch ? parseInt(dayMatch[1], 10) : 0;
};

// Function to get the status of activities
export const getActivityStatus = (activities: Record<string, Record<string, any>>) => {
  let firstEmptyActivity = null;
  let latestActivityKey = null;
  let isEmpty = true;

  const nonEmptyActivities: { key: string; updatedAt: Date }[] = [];

  for (const [key, value] of Object.entries(activities)) {
    if (Object.keys(value).length === 0) {
      if (!firstEmptyActivity) {
        firstEmptyActivity = key;
      }
    } else {
      isEmpty = false;
      nonEmptyActivities.push({ key, updatedAt: processDateString(value?.updatedAt) });
    }
  }

  const closestActivity =
    nonEmptyActivities.length > 0 ? findClosest(nonEmptyActivities, (item) => item.updatedAt) : null;

  if (closestActivity) {
    latestActivityKey = closestActivity.key;
  }

  return { isEmpty, firstEmptyActivity, latestActivityKey };
};
