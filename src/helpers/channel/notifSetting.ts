import { ChannelSetting, UserSetting } from './types';

const isSettingType1 = (setting: ChannelSetting) => setting.type === 1;

export type UserSettingType = {
  enabled: boolean;
  value?: number | { lower: number; upper: number };
};

export const notifChannelSettingFormatString = ({ settings }: { settings: ChannelSetting[] }) => {
  let _notifSettings: UserSettingType[] = [];
  settings &&
    settings.forEach((setting) =>
      isSettingType1(setting)
        ? _notifSettings.push({ enabled: (setting as ChannelSetting & { type: 1 }).default })
        : _notifSettings.push({
            value: (setting as ChannelSetting & { type: 2 }).default,
            enabled: (setting as ChannelSetting & { type: 2 }).enabled
          })
    );

  return _notifSettings;
};

export const notifUserSettingFormatString = ({ settings }: { settings: UserSetting[] }) => {
  let _notifSettings = [];
  settings &&
    settings.forEach((setting) =>
      isSettingType1(setting)
        ? _notifSettings.push({ enabled: setting.user })
        : _notifSettings.push({ value: setting.user, enabled: (setting as ChannelSetting & { type: 2 }).enabled })
    );
  return _notifSettings;
};

export const userSettingsFromDefaultChannelSetting = ({ channelSetting }: { channelSetting: ChannelSetting[] }) => {
  let _userSettings = [];
  channelSetting &&
    channelSetting.forEach((setting) =>
      isSettingType1(setting)
        ? _userSettings.push({ ...setting, user: setting.default })
        : _userSettings.push({ ...setting, user: setting.default })
    );
  return _userSettings;
};

const SETTING_DELIMITER = '-';
const SETTING_SEPARATOR = '+';
const RANGE_TYPE = 3;
const SLIDER_TYPE = 2;
const BOOLEAN_TYPE = 1;

export const getMinimalUserSetting = (settings: UserSettingType[]) => {
  if (!settings) {
    return null;
  }

  let numberOfSettings = 0;

  const userSetting = settings.reduce((acc, ele, i) => {
    const enabled = ele.enabled ? 1 : 0;
    if (ele.enabled) numberOfSettings++;

    if (Object.keys(ele).includes('value')) {
      // slider type
      if (typeof ele.value === 'number') {
        acc = acc + SLIDER_TYPE + SETTING_DELIMITER + enabled + SETTING_DELIMITER + ele.value;
      } else {
        acc =
          acc +
          RANGE_TYPE +
          SETTING_DELIMITER +
          enabled +
          SETTING_DELIMITER +
          ele.value?.lower +
          SETTING_DELIMITER +
          ele.value?.upper;
      }
    } else {
      // boolean type
      acc = acc + BOOLEAN_TYPE + SETTING_DELIMITER + enabled;
    }

    if (i !== settings.length - 1) acc = acc + SETTING_SEPARATOR;

    return acc;
  }, '');

  return numberOfSettings + SETTING_SEPARATOR + userSetting;
};
