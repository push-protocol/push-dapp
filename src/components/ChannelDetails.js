// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React from 'react';

// External Packages
import moment from 'moment';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { getReq, postReq } from 'api';
import { ItemHV2, ItemVV2 } from "components/reusables/SharedStylingV2";
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { useDeviceWidthCheck } from 'hooks';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import { Item } from '../primaries/SharedStyling';
import ChannelSettings from './ChannelSettings';
import ShowDelegates from './ShowDelegates';

// Internal Configs
import { appConfig } from "config";
import GLOBALS, { device } from "config/Globals";
;

const DATE_FORMAT = 'MMMM Do YYYY';

export default function ChannelDetails() {
  const { chainId } = useWeb3React();
  const {
    channelDetails,
    canVerify,
    aliasDetails: { isAliasVerified, aliasAddrFromContract }
  } = useSelector((state) => state.admin);

  const { CHANNEL_ACTIVE_STATE, CHANNNEL_DEACTIVATED_STATE } = useSelector((state) => state.channels);
  const { processingState } = useSelector((state) => state.channelCreation);
  const [verifyingChannel, setVerifyingChannel] = React.useState([]);
  const [creationDate, setCreationDate] = React.useState('');
  const { channelState } = channelDetails;
  const channelIsActive = channelState === CHANNEL_ACTIVE_STATE;
  const channelIsDeactivated = channelState === CHANNNEL_DEACTIVATED_STATE;

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  React.useEffect(() => {
    if (!channelDetails || !canVerify) return;
    (async function() {
      let channelJson = await ChannelsDataStore.instance.getChannelJsonAsync(channelDetails.verifiedBy);
      setVerifyingChannel(channelJson);
    })();
  }, [channelDetails, canVerify]);

  React.useEffect(() => {
    if (!channelDetails) return;
    (async function() {
      const bn = channelDetails.channelStartBlock.toString();

      // using ethers jsonRpcProvider instead of library bcz channels are created on only core chain, that's why block can be fetched from that only
      const block = await new ethers.providers.JsonRpcProvider(appConfig.coreRPC).getBlock(+bn);
      const date = moment(block.timestamp * 1000); //convert from millisecs
      setCreationDate(date.format(DATE_FORMAT));
    })();
  }, [channelDetails]);

  return (
    <ItemVV2>
      <AdaptiveMobileItemHV2 justifyContent="flex-start" alignSelf="stretch" margin="10px 0px 0px 0px">
        <ImageSection src={channelDetails.icon}></ImageSection>

        <AdaptiveMobileItemVV2 alignItems="flex-start" padding="5px 0px">
          <ChannelName>
            {channelDetails.name}
            {canVerify && <VerifyImage src="/verify.png"></VerifyImage>}
          </ChannelName>

          <AdaptiveMobileItemVV2 alignItems="flex-start" flex="initial" padding="5px 0px">
            {/* <div style={{ width: "8px" }} /> */}
            {(onCoreNetwork && aliasAddrFromContract && !isAliasVerified) || (!onCoreNetwork && !isAliasVerified) ? (
              <AliasStateText>Alias Network Setup Pending</AliasStateText>
            ) : (
              <AdaptiveMobileItemHV2 justifyContent="flex-start">
                <Subscribers>
                  <img style={{ width: '15px' }} src="/subcount.svg" alt="subscount"></img>
                  <SubscribersCount>{channelDetails.subscriberCount}</SubscribersCount>
                </Subscribers>
                <ChanneStateText active={channelIsActive}>
                  {channelIsActive ? 'Active' : channelIsDeactivated ? 'Deactivated' : 'Blocked'}
                </ChanneStateText>
              </AdaptiveMobileItemHV2>
            )}

            <Date>{creationDate && <>Created {creationDate}</>}</Date>
          </AdaptiveMobileItemVV2>
        </AdaptiveMobileItemVV2>
      </AdaptiveMobileItemHV2>

      {isMobile && 
        <ItemHV2 zIndex="1" padding="0 0 20px 0">
          <ChannelSettings />
        </ItemHV2>
      }

      <ItemVV2 alignItems="flex-start"><SectionDes>{channelDetails.info}</SectionDes></ItemVV2>
      
      {canVerify &&
        <AdaptiveMobileItemVV2 alignItems="flex-start" padding="5px 0px">
          <SectionDate>
            <Verified>
              <span>verified by:</span>
              <VerifyingIcon src={verifyingChannel.icon}></VerifyingIcon>
              <VerifyingName>{verifyingChannel.name}</VerifyingName>
            </Verified>
          </SectionDate>
        </AdaptiveMobileItemVV2>
      }
      
      {processingState === 0 && 
        <ItemVV2>
          <ShowDelegates />
        </ItemVV2>
      }
    </ItemVV2>
  );
}

const AdaptiveMobileItemVV2 = styled(ItemVV2)`

  @media ${device.mobileL} {
    align-items: center;
  }
`

const AdaptiveMobileItemHV2 = styled(ItemHV2)`
  @media ${device.mobileL} {
    justify-content: center;
  }
`

const ImageSection = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${device.mobileM} {
    width: 70px;
    height: 70px;
    margin-right: 0px;
    border-radius: 20px;
  }
`;

const VerifyImage = styled.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`;

const VerifyingIcon = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 5px;
`;

const VerifyingName = styled.div``;

const Subscribers = styled.div`
  width: 58px;
  height: 26px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
`;

const StateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: Strawford, Source Sans Pro;
`;

const ChanneStateText = styled(StateText)`
  color: #2dbd81;
  color: ${(props) => (props.active ? '#2DBD81' : 'red')};
  background-color: #c6efd1;
  margin-left: 10px;
  ${(props) =>
    props.active &&
    `
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`;

const AliasStateText = styled(StateText)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`;

const SubscribersCount = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    flex-direction: column;
    align-items: center;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  color: #657795;
  margin: 10px 0;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

const Verified = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    color: #ec008c;
    fontsize: 1em;
    fontweight: bolder;
  }
`;

const ChannelName = styled.div`
  display: flex;
  font-family: Strawford, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${(props) => props.theme.color};
  @media ${device.mobileL} {
    flex-direction: column;
    margin-top: 10px;
    font-size: 20px;
  }
`;

const SectionDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const SectionDes = styled.div`
   /* letter-spacing: 0.07em; */
   letter-spacing: 0.025em;
  text-transform: none;
  font-family: Strawford, Source Sans Pro;
  color: #657795;
  margin: 25px 0px 40px 0px;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  padding: 0px 20px 0px 10px;
  text-align: left;
  @media ${device.mobileL} {
    text-align: center;
    margin-top: 10px;
    width:100%;
    padding: 0;
  }
`;
