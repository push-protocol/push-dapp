import { ethers } from 'ethers';
import { addresses } from 'config';

const guestWalletAddress = '0x0000000000000000000000000000000000000001';

// USDC Contract ABI (ERC-20 standard)
const USDC_ABI = ['function balanceOf(address owner) view returns (uint256)'];
const USDC_CA_ABI = ['function transfer(address to, uint256 amount) public returns (bool)'];

// Function to get USDC balance
export const getUSDCBalance = async (
  walletAddress: string,
  usdcContractAddress: string,
  provider: ethers.providers.Web3Provider,
  connect: () => void,
  isWalletConnected: boolean,
) => {
  if (!isWalletConnected) {
    connect();
  }

  if (walletAddress === guestWalletAddress) return;

  try {
    const usdcContract = new ethers.Contract(usdcContractAddress, USDC_ABI, provider);
    const balance = await usdcContract.balanceOf(walletAddress);
    return ethers.utils.formatUnits(balance, 6);
  } catch (error) {
    console.error('Error fetching USDC balance:', error);
    throw error;
  }
};

// Function to send USDC
export const sendUSDC = async (amount: number, recipient: string, provider: ethers.providers.Web3Provider) => {
  try {
    const signer = provider.getSigner();
    const usdcContractAddress = addresses?.usdcTokenAddress;
    const usdcContract = new ethers.Contract(usdcContractAddress, USDC_CA_ABI, signer);
    const amountInSmallestUnit = ethers.utils.parseUnits(amount.toString(), 6);
    const tx = await usdcContract.transfer(recipient, amountInSmallestUnit);
    console.log('Transaction sent:', tx.hash);

    // Wait for confirmation
    const receipt = await tx.wait();
    console.log('Transaction confirmed:', receipt);
    return receipt;
  } catch (error) {
    console.error('Error sending USDC:', error);
    throw error;
  }
};
