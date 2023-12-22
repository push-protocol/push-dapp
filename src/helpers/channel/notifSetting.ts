import { ChannelSetting, UserSetting } from "./types";

const isSettingType1 = (setting: ChannelSetting) => setting.type === 1;

export const notifChannelSettingFormatString = ({ settings }: { settings: ChannelSetting[] }) => {
    let _notifSettings = [];
    settings && settings.forEach((setting) => 
        isSettingType1(setting) 
            ? _notifSettings.push({ enabled: (setting as ChannelSetting & { type: 1 }).default }) 
            : _notifSettings.push({ value: (setting as ChannelSetting & { type: 2 }).default , enabled: (setting as ChannelSetting & { type: 2 }).enabled }));
    return _notifSettings;
}

export const notifUserSettingFormatString = ({ settings }: { settings: UserSetting[] }) => {
    let _notifSettings = [];
    settings && settings.forEach((setting) => 
        isSettingType1(setting) 
            ? _notifSettings.push({ enabled: setting.user }) 
            : _notifSettings.push({ value: setting.user, enabled: (setting as ChannelSetting & { type: 2 }).enabled }));
    return _notifSettings;
}

export const userSettingsFromDefaultChannelSetting = ({ channelSetting }: { channelSetting: ChannelSetting[] }) => {
    let _userSettings = [];
    channelSetting && channelSetting.forEach((setting) => 
        isSettingType1(setting) 
            ? _userSettings.push({ ...setting, user: setting.default })
            : _userSettings.push({ ...setting, user: setting.default }));
    return _userSettings;
};