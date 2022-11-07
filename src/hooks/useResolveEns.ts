// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext,useEffect, useState } from 'react';
// Internal Components
import { caip10ToWallet } from 'helpers/w2w';
import { AppContext, Context } from 'sections/chat/ChatMainSection';

// Internal Configs
import { appConfig } from 'config';

//new Return type
interface ensNameAndAvatar {
  ensName: string;
  ensAvatar: string | null;
}

export function useResolveEns(username: string): ensNameAndAvatar {
  const [ensName, setEnsName] = useState(null);
  /**
   * Create new state to store ensAvatar
   */
   const [ensAvatar, setEnsAvatar] = useState<string | null>(null);
  const { currentChat }: AppContext = useContext<AppContext>(Context);

  useEffect(() => {
    if (username) {
      const walletLowercase = caip10ToWallet(username).toLowerCase();
      const checksumWallet = ethers.utils.getAddress(walletLowercase);

      let provider = ethers.getDefaultProvider('mainnet');
      if (
        window.location.hostname == 'app.push.org' ||
        window.location.hostname == 'staging.push.org' ||
        window.location.hostname == 'dev.push.org' ||
        window.location.hostname == 'alpha.push.org' ||
        window.location.hostname == 'w2w.push.org'
      ) {
        provider = new ethers.providers.InfuraProvider('mainnet', appConfig.infuraAPIKey);
      }

      provider.lookupAddress(checksumWallet).then((ens) => {
        if (ens) {
          console.log('in here');
          setEnsName(ens);
        } else {
          setEnsName(null);
        }
      });
      /**
       * Use current provider to check if there is an ensAvatar linked to the address,
       * if yes, set ensAvatar state to the ensAvatar linked to the checksum address
       * else, set state to null
       */
       provider.getAvatar(checksumWallet).then((avatar) => avatar ? setEnsAvatar(avatar) : setEnsAvatar(null)).catch((err) => setEnsAvatar(null))
    }
  }, [currentChat]);

  //return ensName and ensAvatar instead of just ensName
  return {ensName, ensAvatar};
}
