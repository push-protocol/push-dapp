// TODO: Fix this in future. This should be handled on backend.

import { NotificationCountResponse } from '../../types/analytics';

export const getNotificationCountModelCreator = (response: NotificationCountResponse): number => {
  const notifictionAnalyticsData = response.notificationAnalytics;

  let total = 0;

  notifictionAnalyticsData.forEach((item: any) => {
    for (let key in item) {
      if (key === 'date') {
        continue;
      } else {
        total += item[key]?.notification;
      }
    }
  });

  return total;
};
