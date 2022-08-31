import React from "react";
import ReactGA from "react-ga";
import styled, { useTheme, ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { Item, Button } from "../primaries/SharedStyling";
import { envConfig } from "@project/contracts";
import { postReq } from "api";

import { toast as toaster } from "react-toastify";
import NotificationToast from "../primaries/NotificationToast";

import { Oval } from "react-loader-spinner";

import Feedbox from "segments/Feedbox";


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

	// whether secret notif are enabled
	const [enabledSecretNotif, setEnabledSecretNotif] = React.useState(false);

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
		const fetchEncryptionKey = async () => {
			// get public key from Backend API
			let encryptionKey = await postReq('/encryption_key/get_encryption_key', {
				address: account,
				op: "read"
			}).then(res => {
				return res.data?.encryption_key;
			});

			if (encryptionKey != null) {
				setEnabledSecretNotif(true);
			}
		}
		fetchEncryptionKey();
	}, [enabledSecretNotif])

	// toast customize
	const LoaderToast = ({ msg, color }) => (
		<Toaster>
			<Oval color={color} height={30} width={30} />
			<ToasterMsg>{msg}</ToasterMsg>
		</Toaster>
	);

	const NormalToast = ({ msg }) => (
		<Toaster>
			<ToasterMsg>{msg}</ToasterMsg>
		</Toaster>
	)

	const registerPubKey = async (encryptionPublicKey) => {
		let txToast;
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

			let EPNS_DOMAIN = {
				name: "EPNS COMM V1",
				chainId: chainId,
				verifyingContract: epnsCommReadProvider?.address,
			};

			// loader toast
			txToast = toaster.dark(
				<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3" />,
				{
					position: "bottom-right",
					autoClose: false,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				}
			);

			const signature = await library
				.getSigner(account)
				._signTypedData(EPNS_DOMAIN, type, message);

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

			toaster.update(txToast, {
				render: "Successfully enabled secret notifications !",
				type: toaster.TYPE.SUCCESS,
				autoClose: 5000,
			});

			setEnabledSecretNotif(true);
		} catch (err) {
			if (err.code === 4001) {
				// EIP-1193 userRejectedRequest error
				toaster.update(txToast, {
					render: "User denied message signature.",
					type: toaster.TYPE.ERROR,
					autoClose: 5000,
				});
			} else {
				toaster.update(txToast, {
					render: "There was an error registering the public key",
					type: toaster.TYPE.ERROR,
					autoClose: 5000,
				});
				console.log(err);
			}
		}
	};

	const enableSecretNotif = async () => {
		let txToast;
		if (enabledSecretNotif) {
			txToast = toaster.dark(
				<NormalToast msg="Secret Notifications are already enabled." />,
				{
					position: "bottom-right",
					type: toaster.TYPE.SUCCESS,
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				}
			);
			return;
		}
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
					txToast = toaster.dark(
						<NormalToast msg="User denied message EncryptionPublicKey" />,
						{
							position: "bottom-right",
							type: toaster.TYPE.ERROR,
							autoClose: 5000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						}
					);
				} else if (error.code === -32601) {
					console.error(error);
					txToast = toaster.dark(
						<NormalToast msg="Your wallet doesn't support providing public encryption key." />,
						{
							position: "bottom-right",
							type: toaster.TYPE.ERROR,
							autoClose: 5000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						}
					);
				} else {
					console.error(error);
					txToast = toaster.dark(
						<NormalToast msg="There was an error getting public encryption key." />,
						{
							position: "bottom-right",
							type: toaster.TYPE.ERROR,
							autoClose: 5000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						}
					);
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
							disabled={enabledSecretNotif}
						>
							<span style={{ color: "#fff" }}>
								{enabledSecretNotif ? 'Secret Notifications are enabled' : 'Enable Secret Notifications'}
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
	height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
	align-items: stretch;
	align-self: stretch;
`;

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

// Export Default
export default InboxPage;
