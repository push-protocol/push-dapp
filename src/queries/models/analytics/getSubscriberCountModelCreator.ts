// TODO: Fix this logic. This should be handled on backend

import { SubscriberCountResponse } from '../../types/analytics';

export default function getDatesArray({ start, end, interval }: { start: Date; end: Date; interval: number }) {
  for (var dateArray: Date[] = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + interval)) {
    dateArray.push(new Date(dt));
  }

  const date = dateArray[dateArray.length - 1];
  if (new Date(date).getDate() !== new Date(end).getDate()) {
    dateArray.push(new Date(end));
  }

  return dateArray;
}

export const getSubscriberCountModelCreator = (
  response: SubscriberCountResponse,
  dates: { start: Date; end: Date }
): number => {
  const subscriberAnalyticsData = response?.subscriberAnalytics;
  let totalSubscribers = 0;
  const dateArray = getDatesArray({
    start: dates.start,
    end: dates.end,
    interval: 1,
  });

  let subscriberArray: { date: string; subscribers: number }[] = [];
  for (let i = 0; i < subscriberAnalyticsData?.length; i++) {
    let total = 0,
      dat = '';
    for (let key in subscriberAnalyticsData[i]) {
      if (key === 'date') {
        dat = subscriberAnalyticsData[i][key];
      } else {
        // @ts-expect-error
        total += subscriberAnalyticsData[i][key].subscriber;
      }
    }
    subscriberArray.push({ date: dat, subscribers: total });
  }

  for (let i = 0; i < dateArray.length; i++) {
    for (let j = 0; j < subscriberArray.length; j++) {
      if (new Date(subscriberArray[j].date).toDateString() === new Date(dateArray[i]).toDateString()) {
        totalSubscribers += subscriberArray[j].subscribers;

        break;
      }
    }
  }

  return totalSubscribers;
};
