import { isLengthValid, isValidAddress, isValidUrl } from "./ValidationHelper";



export const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  };

  export const isAllFilledAndValid = ({
    setErrorInfo,
    channelName,
    channelInfo,
    channelURL,
    channelAlias,
    chainDetails,
    coreChainId
  }): boolean => {
    setErrorInfo('');

    if (isEmpty(channelName) || isEmpty(channelInfo) || isEmpty(channelURL) || (isEmpty(channelAlias) && chainDetails !== coreChainId)){
      if (
        isEmpty(channelName)
      ) {
        setErrorInfo(x => ({
          ...x,
          name: 'Please, enter the channel name.',
        }));
      }

      if (isEmpty(channelInfo)) {
        setErrorInfo(x => ({
          ...x,
          description: 'Please, enter the channel description',
        }));
      }

      if (isEmpty(channelURL)) {
        setErrorInfo(x => ({
          ...x,
          url: 'Please, enter the channel url',
        }));
      }

      if (isEmpty(channelAlias) && chainDetails !== coreChainId) {
        setErrorInfo(x => ({
          ...x,
          address:'Please, enter the channel address',
        }));
      }
    return false
  }

    if (!isLengthValid(channelName, 125)) {
      setErrorInfo(x => ({
        ...x,
        name: 'Channel Name should not exceed 125 characters! Please retry!',
      }));
      
      return false;
    }
    if (!isLengthValid(channelURL, 125)) {
      setErrorInfo(x => ({
        ...x,
        url: 'Channel Url should not exceed 125 characters! Please retry!',
      }));
      return false;
    }
    if(chainDetails !== coreChainId && !isValidAddress(channelAlias)) {
      setErrorInfo(x => ({
        ...x,
        address: 'Channel Alias address is invalid! Please enter a valid address!',
      }));
      
      return false;
    }
    if (!isValidUrl(channelURL)) {
      setErrorInfo(x => ({
        ...x,
        url: 'Channel URL is invalid! Please enter a valid url!',
      }));
      return false;
    }

    return true;
  };