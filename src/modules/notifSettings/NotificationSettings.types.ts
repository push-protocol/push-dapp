type NotificationSettingFormValues = {
  settingName: string;
  isDefault: boolean;
  enableRange: boolean;
  rangelowerlimit: number;
  rangeupperlimit: number;
  enableMultiRange: boolean;
  defaultValue: number;
  multirangelowerlimit: number;
  multirangeupperlimit: number;
  sliderStepValue: number;
};

type NotificationSettings = {
  type: number;
  default:
    | boolean
    | number
    | {
        lower: number;
        upper: number;
      };
  enabled?: boolean;
  description: string;
  index?: number;
  lowerLimit?: number;
  upperLimit?: number;
  ticker?: number;
};

type NotificationSettingModal = {
  isOpen: boolean;
  onClose: () => void;
  open: () => void;
};
