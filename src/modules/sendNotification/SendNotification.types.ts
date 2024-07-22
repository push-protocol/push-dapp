export type NotificationType = 'broadcast' | 'targeted' | 'subset';
export type NotficationValue = {
  channelAddress: string;
  chainId: string;
  type: NotificationType;
  titleChecked: boolean;
  mediaUrlChecked: boolean;
  ctaLinkChecked: boolean;
  title: string;
  body: string;
  setting: string;
  mediaUrl: string;
  ctaLink: string;
};

export type NotificationOptionType = Array<{ label: string; value: NotificationType }>;
