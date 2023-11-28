import ManageNotifSettingDropdown from 'components/dropdowns/ManageNotifSettingDropdown';
import { ImageV2 } from 'components/reusables/SharedStylingV2';
import { useAccount } from 'hooks';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { getChannel, getUserSubscriptions } from 'services';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBulkSubscriptions, updateBulkUserSettings } from 'redux/slices/channelSlice';
import { cloneDeep } from 'lodash';
import { AiOutlineMore } from 'react-icons/ai';
import EmptyNotificationSettings from './EmptyNotificationSettings';
import LoaderSpinner from 'primaries/LoaderSpinner';




interface ChannelListItem {
    channel: string;
    icon: string;
    name: string;
    id: number;
    channel_settings: string;
}

const ChannelListSettings = () => {
    const { account, chainId } = useAccount();
    const { subscriptionStatus, userSettings: currentUserSettings } = useSelector((state: any) => state.channels);
    const [channelList, setChannelList] = useState<ChannelListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const navigateToChannels = () => {
        navigate('/channels');
    };

    const fetchChannelDetails = async (channel: string) => {
        const details = await getChannel({ channel });
        if (details) {
            const updatedChannelItem: ChannelListItem = {
                channel,
                id: details.id,
                icon: details.icon,
                name: details.name,
                channel_settings: details.channel_settings,
            };
            return updatedChannelItem;
        } else return undefined;
    };

    const fillData = async (details: any) => {
        const data = await Promise.all(
            Object.keys(details).map(async (channel) => {
                const channelData = await fetchChannelDetails(channel);
                if (channelData) return channelData;
            })
        );
        setChannelList(data);
    };

    useEffect(() => {
        if (!account) return;
        (async function () {
            setIsLoading(true);
            if (Object.keys(subscriptionStatus).length === 0) {
                const userCaipAddress = convertAddressToAddrCaip(account, chainId);
                const subscriptionsArr = await getUserSubscriptions({ userCaipAddress });
                const subscriptionsMapping = {};
                const userSettings = {};
                subscriptionsArr.map(({ channel, user_settings }) => {
                    subscriptionsMapping[channel] = true;
                    userSettings[channel] = user_settings ? JSON.parse(user_settings) : null;
                });
                dispatch(updateBulkSubscriptions(subscriptionsMapping));
                dispatch(updateBulkUserSettings(userSettings));
                await fillData(subscriptionsMapping);
            } else {
                await fillData(subscriptionStatus);
            }
            setIsLoading(false);
        })();
    }, [account]);

    const userSettings = useMemo(() => {
        return cloneDeep(currentUserSettings);
    }, [currentUserSettings]);


    return (
        <>

            {isLoading ? (
                <>
                <CenterContainer>
                    <LoaderSpinner />
                </CenterContainer>

                </>
            ) : (
                <>
                    {channelList.length > 0 ? (
                        channelList.map((channel, index) => (
                            <>
                                {channel && (
                                    <>
                                        <SettingsListItem key={channel.id}>
                                            <SettingsListRow>
                                                <Icon src={channel.icon} />
                                                <ChannelName>{channel.name}</ChannelName>
                                            </SettingsListRow>
                                            <ManageNotifSettingDropdown
                                                userSetting={userSettings[channel.channel]}
                                                centerOnMobile={false}
                                                channelDetail={channel}
                                                onSuccessOptout={() => {
                                                    setChannelList((prevChannelList) =>
                                                        prevChannelList.filter((item) => item?.id !== channel.id)
                                                    );
                                                }}
                                            >
                                                <MoreButtonUI />
                                            </ManageNotifSettingDropdown>
                                        </SettingsListItem>
                                        {index !== channelList.length - 1 && <HR />}
                                    </>
                                )}
                            </>
                        ))
                    ) : (
                        <CenterContainer>
                            <EmptyNotificationSettings
                                title="No Channel Opt-ins"
                                description="Opt-in channels to manage your notification preferences"
                                buttonTitle="Go to Channels"
                                onClick={navigateToChannels}
                                showTopBorder={false}
                            />
                        </CenterContainer>
                    )}
                </>
            )}



        </>
    );
};

export default ChannelListSettings;

const SettingsListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

const SettingsListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(ImageV2)`
  border: 1px solid ${(props) => props.theme.default.borderColor};
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  width: 28px;
  height: 28px;
`;

const ChannelName = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.default.color};
`;

const MoreButtonUI = styled(AiOutlineMore)`
  background: transparent;
  display: flex;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.default.color};
`;

const HR = styled.span`
  background-color: ${(props) => props.theme.default.borderColor};
  width: 100%;
  display: flex;
  height: 1px;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;