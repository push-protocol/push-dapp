// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext,useEffect, useState } from 'react';
// Internal Components
import { caip10ToWallet } from 'helpers/w2w';
import { AppContext, Context } from 'sections/chat/ChatMainSection';

// Internal Configs
import { appConfig } from 'config';

interface ENSData {
  ensName: string,
  ensAvatar: string | null
}

export function useResolveEns(username: string): ENSData {
  const [ensName, setEnsName] = useState(null);
  const [ensAvatar, setEnsAvatar] = useState(null);
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
      // Check if the user has an ens avatar. If so, set it.
      provider.getAvatar(checksumWallet).then((avatar) => {
        if (avatar) {
          setEnsAvatar(avatar);
        } else {
          setEnsAvatar(null);
        }
      });
    }
  }, [currentChat]);

  return { ensName, ensAvatar };
}
