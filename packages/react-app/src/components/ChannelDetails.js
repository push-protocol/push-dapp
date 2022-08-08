import React from "react";
import moment from "moment";
import { ethers } from "ethers";
import { envConfig } from "@project/contracts";
import styled , {useTheme} from "styled-components";
import { useSelector } from "react-redux";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import ShowDelegates from "./ShowDelegates";
import { Item } from "../primaries/SharedStyling";
import { postReq } from "api";
import { useWeb3React } from "@web3-react/core";
const DATE_FORMAT = "MMMM Do YYYY";

const networkName = {
  42: "Polygon Mumbai",
  1: "Polygon Mainnet"
}

export default function ChannelDetails() {
  const theme = useTheme();
  const { chainId, account } = useWeb3React();
  const { channelDetails, canVerify } = useSelector((state) => state.admin);

  const { CHANNEL_ACTIVE_STATE, CHANNNEL_DEACTIVATED_STATE } = useSelector(
    (state) => state.channels
  );
  const [verifyingChannel, setVerifyingChannel] = React.useState([]);
  const [creationDate, setCreationDate] = React.useState("");
  const [aliasVerified, setAliasVerified] = React.useState(null);
  const { channelState } = channelDetails;
  const channelIsActive = channelState === CHANNEL_ACTIVE_STATE;
  const channelIsDeactivated = channelState === CHANNNEL_DEACTIVATED_STATE;

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

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
      const block = await (new ethers.providers.JsonRpcProvider(envConfig.coreRPC)).getBlock(+bn);
      const date = moment(block.timestamp * 1000);//convert from millisecs
      setCreationDate(date.format(DATE_FORMAT))
    })();
  }, [channelDetails]);

  React.useEffect(() => {
    if (!onCoreNetwork) return;

    (async function() {
      await postReq("/channels/get_alias_details", {
        channel : account,
        op: "read",
      }).then(async ({ data }) => {
        const aliasAccount = data;
        console.log(aliasAccount);
        if (aliasAccount.aliasAddress) {
          const { aliasAddress } = aliasAccount;
            await postReq("/channels/get_alias_verification_status", {
              aliasAddress: aliasAddress,
              op: "read",
            }).then(({ data }) => {
              if (!data) {
                return;
              }
              const { status } = data;
              setAliasVerified(status || false);
              return data;
            });
        }
      });
    })();
  }, [account , chainId]);

  return (
    <ChannelDetailsWrapper>
      <SectionTop>
        <ImageSection src={channelDetails.icon}></ImageSection>

        <Details>
          <ChannelName>
            {channelDetails.name}
            {canVerify && <VerifyImage src="/verify.png"></VerifyImage>}
          </ChannelName>
          <div style={{display:'flex'}}>
              <Subscribers>
              <img style={{paddingTop:'5px',paddingLeft:'6px'}} src="/people.svg" alt="subscount"></img>
              <SubscribersCount>
                {channelDetails.subscribers.length}
              </SubscribersCount>
            </Subscribers>
            <div style={{width:'14px'}}/>
            {
              aliasVerified === false
                ?
                  <AliasStateText>
                    Alias Network Setup Pending
                  </AliasStateText>
                :
                  <ChanneStateText active={channelIsActive}>
                    {channelIsActive
                      ? "Active"
                      : channelIsDeactivated
                      ? "Deactivated"
                      : "Blocked"}
                  </ChanneStateText>
            }
          </div>
          <Date>
            {creationDate && <>Created {creationDate}</>}
          </Date>
        </Details>
      </SectionTop>

      <SectionDes>{channelDetails.info}</SectionDes>
      
      {aliasVerified === false &&
        <Item size="20px" align="flex-start" style={{ fontWeight: 800, color: "#D6097A", marginBottom: "30px" }}>
          Please verify the Channel Alias Address to use the Channel on {networkName[chainId]} Network.
        </Item>
      }
      <SectionDate>
        {canVerify && (
          <Verified>
            <span>verified by:</span>
            <VerifyingIcon src={verifyingChannel.icon}></VerifyingIcon>
            <VerifyingName>{verifyingChannel.name}</VerifyingName>
          </Verified>
        )}
      </SectionDate>
      <ShowDelegates />
    </ChannelDetailsWrapper>
  );
}

const ChannelDetailsWrapper = styled.div`
  padding: 64px 74px;
  padding-bottom: 0;
`;

const SectionTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const ImageSection = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10%;
  margin-right: 20px;
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
  height: 28px;
  left: 586px;
  top: 282px;
  background: #FFDBF0;
  border-radius: 25px;
  margin-top: 10px;
`;

const ChanneStateText = styled.span`
  color: #2DBD81;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: ${(props) => (props.active ? "#2DBD81" : "red")};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  background-color: #C6EFD1;
  padding:4px 12px;
  border-radius:16px;
  margin-top:10px;
  margin-bottom:14px;

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

const AliasStateText = styled.span`
  color: #E3B61C;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #E3B61C;
  display: flex;
  align-items: center;
  background-color: #E9EEC4;
  padding:4px 12px;
  border-radius:16px;
  margin-top:10px;
  margin-bottom:14px;
 
  &::before {
      width:16px;
      height: 16px;
      background: #E3B61C;
      border-radius: 50%;
      content: "";
      display: inline-flex;
      align-items: center;
      margin-right: 6px;
  }
    
`;

const SubscribersCount = styled.span`
  margin-top: 0px;
  margin-left: 6px;
  width: 20px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #CF1C84;
;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 340px;
  font-size: 15px;
  color: #657795;
  text-transform: none;
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
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  color: ${props => props.theme.color};
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
  margin-bottom: 30px;
`;

const SectionDes = styled.div`
  letter-spacing: 0.1em;
  text-transform: none;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: #657795;
`;