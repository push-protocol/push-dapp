import { IncomingCall } from 'contexts/VideoCallContext';

interface IsAddressConnectedType {
  toAddress: string;
  incomingCalls: IncomingCall[];
}

const getIsAddressConnected = ({ toAddress, incomingCalls }: IsAddressConnectedType): boolean => {
  let isAddressConnected = false;

  for (let index = 0; index < incomingCalls.length; index++) {
    const incomingCall = incomingCalls[index];
    if (incomingCall.from === toAddress) {
      isAddressConnected = true;
      break;
    }
  }

  return isAddressConnected;
};

export default getIsAddressConnected;
