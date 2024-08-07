export type NotificationProps = {
  isOpen: boolean;
  // icon or image element
  icon: any;
  // notification title
  title: string;
  // notification description
  description: string;
  // action to be completed onclick of the notification item
  onClick: () => void;
  // action to close notification item
  onClose?: () => void;
  // position of notification item
  position?: 'bottom-right' | 'bottom-left';
};
