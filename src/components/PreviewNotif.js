// React + Web3 Essentials
import { useWeb3React } from "@web3-react/core";
import React from "react";

// External Packages
import { useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";

// Internal Compoonents
import { NotificationItem } from "@pushprotocol/uiweb";
import { H2, Item, Span } from "../primaries/SharedStyling";
import { chainNameBackendStandard } from "helpers/UtilityHelper";
import { appConfig } from 'config';

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

export default function PreviewNotif({ details }) {
  const { delegatees, channelDetails } = useSelector((state) => state.admin);
  const { chainId } = useWeb3React();
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  let channelDetail;
  channelDetail = delegatees.filter(
    (delegateeInfo) => (onCoreNetwork ? delegateeInfo.channel : delegateeInfo.alias_address) == details.channelAddress
  )[0];
  if (!channelDetail) channelDetail = channelDetails;

  const theme = useTheme();
  const NotifItem = ({ test }) => {
    return (
      channelDetail && (
        <NotificationItem
          notificationTitle={test?.asub}
          notificationBody={test?.amsg}
          cta={test?.acta}
          app={channelDetail.name}
          icon={channelDetail.icon}
          image={test?.aimg}
          chainName={chainNameBackendStandard[chainId]}
          theme={theme.scheme}
        />
      )
    );
  };

  return (
    <PreviewSpace>
      <Item align="flex-start" margin="30px 0px 10px 0px">
        <Span
          weight="700"
          size="12px"
          spacing="0.2em"
          color="#575D73"
          // style={{ color: theme.color }}
        >
          PREVIEW NOTIFICATION
        </Span>
      </Item>
      <NotifItem test={details} />
    </PreviewSpace>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.scrollBg};
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const PreviewSpace = styled.div`
  margin: 0;
  width: 100%;
`;
