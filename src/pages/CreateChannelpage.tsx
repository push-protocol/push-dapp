import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "blocks";

import { ContentLayout } from "common";
import APP_PATHS from "config/AppPaths";

import { useAccount } from "hooks";

// import { CreateChannel } from "modules/createChannel";
import { useGetChannelDetails } from "queries";

import LoaderSpinner, { LOADER_TYPE } from "components/reusables/loaders/LoaderSpinner";

const CreateChannelpage = () => {

  const { account } = useAccount();
  const navigate = useNavigate();

  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);

  console.log("Channel Details in create channel", channelDetails);


  useEffect(() => {
    if (channelDetails) {
      navigate(`${APP_PATHS.ChannelDashboard}/${account}`)
    }
  }, [channelDetails])

  if (loadingChannelDetails) {
    return <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <LoaderSpinner
        type={LOADER_TYPE.SEAMLESS}
        title="Loading Channel Details. Please wait..."
      />
    </Box>
  }

  if (!channelDetails) {
    return (
      <ContentLayout>
        <div>Create Channel</div>
      </ContentLayout>
    )
  }

};

export default CreateChannelpage;