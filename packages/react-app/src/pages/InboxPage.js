import React from "react";
import ReactGA from "react-ga";
import { ethers } from "ethers";
import styled, { useTheme, ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { Item, Button } from "components/SharedStyling";
import { addresses, abis, envConfig } from "@project/contracts";
import { postReq } from "api";

import NotificationToast from "components/NotificationToast";

import Feedbox from "segments/Feedbox";

import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";

import {
	setPushAdmin,
	setCoreReadProvider,
	setCommunicatorReadProvider,
} from "redux/slices/contractSlice";

import GLOBALS from "config/Globals";
export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain;

// Create Header
function InboxPage() {
	// React GA Analytics
	ReactGA.pageview("/inbox");

	const dispatch = useDispatch();
	const { account, chainId, library } = useWeb3React();
	const { epnsReadProvider, epnsCommReadProvider } = useSelector(
		(state) => state.contracts
	);

	// toast related section
	const [toast, showToast] = React.useState(null);
	const clearToast = () => showToast(null);

	const themes = useTheme();
	const onCoreNetwork = ALLOWED_CORE_NETWORK === chainId;

	//clear toast variable after it is shown
	React.useEffect(() => {
		if (toast) {
			clearToast();
		}
	}, [toast]);
	// toast related section

	React.useEffect(() => {
		(async function init() {
			const coreProvider = onCoreNetwork
				? library
				: new ethers.providers.JsonRpcProvider(envConfig.coreRPC);

			// inititalise the read contract for the core network
			const coreContractInstance = new ethers.Contract(
				addresses.epnscore,
				abis.epnscore,
				coreProvider
			);
			// initialise the read contract for the communicator function
			const commAddress = onCoreNetwork
				? addresses.epnsEthComm
				: addresses.epnsPolyComm;
			const commContractInstance = new ethers.Contract(
				commAddress,
				abis.epnsComm,
				library
			);
			dispatch(setCommunicatorReadProvider(commContractInstance));
			dispatch(setCoreReadProvider(coreContractInstance));
		})();
	}, [account, chainId]);

	/**
	 * When we instantiate the contract instances, fetch basic information about the user
	 * Corresponding channel owned.
	 */
	React.useEffect(() => {
		if (!epnsReadProvider || !epnsCommReadProvider) return;

		// save push admin to global state
		epnsReadProvider
			.pushChannelAdmin()
			.then((response) => {
				dispatch(setPushAdmin(response));
			})
			.catch((err) => {
				console.log({ err });
			});

		// EPNS Read Provider Set
		if (epnsReadProvider != null && epnsCommReadProvider != null) {
			// Instantiate Data Stores
			UsersDataStore.instance.init(
				account,
				epnsReadProvider,
				epnsCommReadProvider
			);
			ChannelsDataStore.instance.init(
				account,
				epnsReadProvider,
				epnsCommReadProvider,
				chainId
			);
		}
	}, [epnsReadProvider, epnsCommReadProvider]);

	const registerPubKey = async (encryptionPublicKey) => {
		console.log("called", encryptionPublicKey);
		try {
			const type = {
				Register: [
					{ name: "user", type: "address" },
					{ name: "encryptionKey", type: "string" },
					{ name: "action", type: "string" },
				],
			};

			const message = {
				user: account,
				encryptionKey: encryptionPublicKey,
				action: "Register",
			};

			console.log(message, type);
			let EPNS_DOMAIN = {
				name: "EPNS COMM V1",
				chainId: chainId,
				verifyingContract: epnsCommReadProvider?.address,
			};
			console.log(EPNS_DOMAIN);
			const signature = await library
				.getSigner(account)
				._signTypedData(EPNS_DOMAIN, type, message);

			console.log(signature);

			const objPayload = {
				address: account,
				encryptionKey: encryptionPublicKey,
				signature,
				message,
				op: "write",
				chainId,
				contractAddress: epnsCommReadProvider.address,
			};

			const result = await postReq(
				"/encryption_key/register",
				objPayload
			);
			console.log(result);
		} catch (err) {
			console.log(err);
		}
	};

	const enableSecretNotif = async () => {
		if (!epnsCommReadProvider?.address) return;
		let encryptionPublicKey;
		await library.provider
			.request({
				method: "eth_getEncryptionPublicKey",
				params: [account], // you must have access to the specified account
			})
			.then((result) => {
				encryptionPublicKey = result;
				registerPubKey(encryptionPublicKey);
				console.log(result);
			})
			.catch((error) => {
				if (error.code === 4001) {
					// EIP-1193 userRejectedRequest error
					console.log("User Rejected the Request to the Key");
				} else {
					console.error(error);
				}
			});
	};

	// Render
	return (
		<ThemeProvider theme={themes}>
			<Container>
				<Item>
					<Item margin="16px 20px 0px 0px" self="self-end">
						<Button
							padding="12px"
							direction="row"
							border={`1px solid ${themes.faucetBorder}`}
							bg={
								themes.scheme === "light"
									? GLOBALS.COLORS.GRADIENT_PRIMARY
									: GLOBALS.COLORS.GRADIENT_SECONDARY
							}
							radius="50px"
							onClick={enableSecretNotif}
						>
							<span style={{ color: "#fff" }}>
								Enable Secret Notifications
							</span>
							<></>
						</Button>
					</Item>
				</Item>
				<div className="joyride"></div>
				<Feedbox />
				{toast && (
					<NotificationToast
						notification={toast}
						clearToast={clearToast}
					/>
				)}
			</Container>
		</ThemeProvider>
	);
}

// css style
const Container = styled.div`
	flex-direction: column;
	background: ${(props) => props.theme.mainBg};
	height: calc(
		100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px -
			${(props) => props.theme.interfaceTopPadding}
	);
	align-items: stretch;
	align-self: stretch;
`;

// Export Default
export default InboxPage;
