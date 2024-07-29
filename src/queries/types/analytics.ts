type EntityKey = `eip155${number}`;

export type NotificationCountResponse = {
  channelDetails: {
    [key: string]: {
      channel: string;
      icon: string;
      name: string;
    };
  };
  notificationAnalytics: {
    [K in EntityKey]: {
      notification: number;
    };
  } & { date: string }[];
};

export type SubscriberCountResponse = {
  channelDetails: {
    [key: string]: {
      channel: string;
      icon: string;
      name: string;
    };
  };
  subscriberAnalytics: {
    [K in EntityKey]: {
      subscriber: number;
    };
  } & { date: string }[];
};
