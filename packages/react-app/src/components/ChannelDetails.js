import React from "react";
import moment from "moment";
import { ethers } from "ethers";
import { envConfig } from "@project/contracts";
import styled, { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import ShowDelegates from "./ShowDelegates";
import { Item } from "../primaries/SharedStyling";
import { getReq, postReq } from "api";
import { useWeb3React } from "@web3-react/core";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import { AiOutlineUser } from "react-icons/ai";
import { useDeviceWidthCheck } from "hooks";
import ChannelSettings from "./ChannelSettings";

const DATE_FORMAT = "MMMM Do YYYY";

const networkName = {
  42: "Polygon Mumbai",
  1: "Polygon Mainnet",
};

export default function ChannelDetails() {
  const { chainId } = useWeb3React();
  const {
    channelDetails,
    canVerify,
    aliasDetails: { isAliasVerified, aliasAddrFromContract },
  } = useSelector((state) => state.admin);

  const { CHANNEL_ACTIVE_STATE, CHANNNEL_DEACTIVATED_STATE } = useSelector(
    (state) => state.channels
  );
  const { processingState } = useSelector((state) => state.channelCreation);
  const [verifyingChannel, setVerifyingChannel] = React.useState([]);
  const [creationDate, setCreationDate] = React.useState("");
  const { channelState } = channelDetails;
  const channelIsActive = channelState === CHANNEL_ACTIVE_STATE;
  const channelIsDeactivated = channelState === CHANNNEL_DEACTIVATED_STATE;

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  React.useEffect(() => {
    if (!channelDetails || !canVerify) return;
    (async function() {
      let channelJson = await ChannelsDataStore.instance.getChannelJsonAsync(
        channelDetails.verifiedBy
      );
      setVerifyingChannel(channelJson);
    })();
  }, [channelDetails, canVerify]);

  React.useEffect(() => {
    if (!channelDetails) return;
    (async function() {
      const bn = channelDetails.channelStartBlock.toString();

      // using ethers jsonRpcProvider instead of library bcz channels are created on only core chain, that's why block can be fetched from that only
      const block = await new ethers.providers.JsonRpcProvider(
        envConfig.coreRPC
      ).getBlock(+bn);
      const date = moment(block.timestamp * 1000); //convert from millisecs
      setCreationDate(date.format(DATE_FORMAT));
    })();
  }, [channelDetails]);

  return (
    <ChannelDetailsWrapper>
      <SectionTop>
        <ImageSection src={channelDetails.icon}></ImageSection>

        <Details>
          <ChannelName>
            {channelDetails.name}
            {canVerify && <VerifyImage src="/verify.png"></VerifyImage>}
          </ChannelName>
          <ChannelStatusContainer>
            {/* <div style={{ width: "8px" }} /> */}
            {(onCoreNetwork && aliasAddrFromContract && !isAliasVerified) ||
            (!onCoreNetwork && !isAliasVerified) ? (
              <AliasStateText>Alias Network Setup Pending</AliasStateText>
            ) : (
              <>
                <Subscribers>
                  <img
                    style={{ width: "15px" }}
                    src="/subcount.svg"
                    alt="subscount"
                  ></img>
                  <SubscribersCount>
                    {channelDetails.subscribers.length}
                  </SubscribersCount>
                </Subscribers>
                <ChanneStateText active={channelIsActive}>
                  {channelIsActive
                    ? "Active"
                    : channelIsDeactivated
                    ? "Deactivated"
                    : "Blocked"}
                </ChanneStateText>
              </>
            )}
          </ChannelStatusContainer>
          <Date>{creationDate && <>Created {creationDate}</>}</Date>
        </Details>
      </SectionTop>

      {!isMobile ? "" : <ChannelSettings />}

      <SectionDes>{channelDetails.info}</SectionDes>

      <SectionDate>
        {canVerify && (
          <Verified>
            <span>verified by:</span>
            <VerifyingIcon src={verifyingChannel.icon}></VerifyingIcon>
            <VerifyingName>{verifyingChannel.name}</VerifyingName>
          </Verified>
        )}
      </SectionDate>
      {processingState === 0 && <ShowDelegates />}
    </ChannelDetailsWrapper>
  );
}

const ChannelDetailsWrapper = styled.div`
  padding: 20px 30px;
  padding-bottom: 0;
  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const SectionTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    margin-right: 0px;
    border-radius: 20px;
  }
`;

const ChannelStatusContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  // justify-content: center;
  margin: 10px 0px;
  // height: 26px;
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
`;

const ChanneStateText = styled(StateText)`
  color: #2dbd81;
  color: ${(props) => (props.active ? "#2DBD81" : "red")};
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
    content: "";
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
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 340px;
  color: #657795;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media (max-width: 600px) {
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
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${(props) => props.theme.color};
  @media (max-width: 600px) {
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
  letter-spacing: 0.1em;
  text-transform: none;
  color: #657795;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  padding: 0px 20px;
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
    margin-top: 10px;
  }
`;
