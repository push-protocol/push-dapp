import React, { useRef } from "react";
import { useClickAway } from "react-use";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Item, Span, H2 } from "./SharedStyling";
import { useWeb3React } from "@web3-react/core";
import { NotificationItem } from "@epnsproject/frontend-sdk-staging";
import { useSelector } from "react-redux";

const blockchainName = {
	1: "ETH_MAINNET",
	137: "POLYGON_MAINNET",
	42: "ETH_TEST_KOVAN",
	80001: "POLYGON_TEST_MUMBAI",
};

export default function PreviewNotifModal({ onClose, details }) {
	const { channelDetails } = useSelector((state) => state.admin);
	const { chainId } = useWeb3React();

	const themes = useTheme();

	const modalRef = useRef(null);

	useClickAway(modalRef, () => onClose(false));

	return (
		<ThemeProvider theme={themes}>
			<Overlay>
				<PreviewModal ref={modalRef}>
					<Item align="flex-start" padding="0px 0px 20px">
						<H2 textTransform="uppercase" spacing="0.1em">
							<Span weight="200" style={{ color: themes.color }}>
								Preview{" "}
							</Span>
							<Span
								bg="#674c9f"
								color="#fff"
								weight="600"
								padding="0px 8px"
							>
								Notification
							</Span>
						</H2>
					</Item>
					{channelDetails && (
						<NotificationItem
							notificationTitle={details.asub}
							notificationBody={details.amsg}
							cta={details.acta}
							app={channelDetails.name}
							icon={channelDetails.icon}
							image={details.aimg}
							chainName={blockchainName[chainId]}
							theme={themes.scheme}
						/>
					)}
				</PreviewModal>
			</Overlay>
		</ThemeProvider>
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

const PreviewModal = styled.div`
	padding: 20px 30px;
	width: 70%;
	background: ${(props) => props.theme.backgroundBG};
`;
