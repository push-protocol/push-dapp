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
  // const { channelDetails, canVerify } = useSelector((state) => state.admin);
  // const {  canVerify } = useSelector((state) => state.admin);
  const canVerify = false

  const channelDetails = {
    "0": 2,
    "1": 1,
    "2": "0x0000000000000000000000000000000000000000",
    "3": {
        "type": "BigNumber",
        "hex": "0x02b5e3af16b1880000"
    },
    "4": {
        "type": "BigNumber",
        "hex": "0x00"
    },
    "5": {
        "type": "BigNumber",
        "hex": "0x00"
    },
    "6": {
        "type": "BigNumber",
        "hex": "0x00"
    },
    "7": {
        "type": "BigNumber",
        "hex": "0x01d3eed7"
    },
    "8": {
        "type": "BigNumber",
        "hex": "0x01d3eed7"
    },
    "9": {
        "type": "BigNumber",
        "hex": "0x989680"
    },
    "name": "dddada",
    "info": "dada",
    "url": "www.google.com",
    "icon": "data:image/png;base64,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",
    "blockchain": "POLYGON_TEST_MUMBAI",
    "chain_id": "80001",
    "address": "0xD26A7BF7fa0f8F1f3f73B056c9A67565A6aFE63c",
    "channelType": 2,
    "channelState": 1,
    "verifiedBy": "0x0000000000000000000000000000000000000000",
    "poolContribution": {
        "type": "BigNumber",
        "hex": "0x02b5e3af16b1880000"
    },
    "channelHistoricalZ": {
        "type": "BigNumber",
        "hex": "0x00"
    },
    "channelFairShareCount": {
        "type": "BigNumber",
        "hex": "0x00"
    },
    "channelLastUpdate": {
        "type": "BigNumber",
        "hex": "0x00"
    },
    "channelStartBlock": {
        "type": "BigNumber",
        "hex": "0x01d3eed7"
    },
    "channelUpdateBlock": {
        "type": "BigNumber",
        "hex": "0x01d3eed7"
    },
    "channelWeight": {
        "type": "BigNumber",
        "hex": "0x989680"
    },
    "subscribers": [
        "0x03fAD591aEb926bFD95FE1E38D51811167a5ad5c",
        "0x74415bc4c4bf4baecc2dd372426f0a1d016fa924",
        "0xB59Cdc85Cacd15097ecE4C77ed9D225014b4D56D",
        "0xd26a7bf7fa0f8f1f3f73b056c9a67565a6afe63c"
    ]
  }

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