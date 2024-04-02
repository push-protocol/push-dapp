import { defaultSnapOrigin } from "config";
import { hoursLeftToTimestamp } from "./TimerHelper";

export * from "./PushTokenContractHelper";

export const updateSnoozeDuration = async (setSnoozeDuration) => {
    const result = await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: { method: 'pushproto_getsnoozeinfo' },
      },
    });
  
    if (result?.enabled === true) {
      const hrsLeft = hoursLeftToTimestamp(result.duration);
      setSnoozeDuration({
        enabled: true,
        hrsLeft: hrsLeft
      });
    } else {
      setSnoozeDuration({
        enabled: false,
        hrsLeft: 0
      });
    }
  };