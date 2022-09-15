// React + Web3 Essentials
import { useWeb3React } from "@web3-react/core";
import React from "react";

// External Packages
import { useSelector } from "react-redux";
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Compoonents
import { NotificationItem } from "@epnsproject/sdk-uiweb";
import { H2, Item, Span } from "../primaries/SharedStyling";

const blockchainName = {
  1: "ETH_MAINNET",
  137: "POLYGON_MAINNET",
  42: "ETH_TEST_KOVAN",
  80001: "POLYGON_TEST_MUMBAI",
};

export default function PreviewNotif({ details }) {
  const { delegatees, channelDetails } = useSelector((state) => state.admin);
  const { chainId } = useWeb3React();

  let channelDetail;
  channelDetail = delegatees.filter(
    (delegateeInfo) => delegateeInfo.address == details.channelAddress
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
          chainName={blockchainName[chainId]}
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
  margin: 20px 20px;
  width: 100%;
`;
