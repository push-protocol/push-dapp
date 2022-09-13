import React, { useEffect, useState } from 'react';

import GLOBALS, { device } from 'config/Globals';
import { Button, Item, ItemH, Section, Span } from 'primaries/SharedStyling';
import { toast } from "react-toastify";
import styled from 'styled-components';

import LoaderSpinner, { LOADERTYPE } from 'components/reusables/loaders/LoaderSpinner';
import ProgressBar from 'components/reusables/progress/ProgressBarUnit';
import Spinner from 'components/reusables/spinners/SpinnerUnit';

import { showNotifcationToast } from 'components/reusables/toasts/toastController';

// Helper Modules
const randomTextWithLines = (maxChar, maxLines) => {
  var lines = '';
  const numLines = Math.floor((Math.random() * maxLines) + 1);
  for (var i = 0; i < numLines; i++) {
    if (i > 0) lines += '<br/>';
    for (var x = 0; x < maxChar; x++) lines += randomText(maxChar);
  }
  return lines;
}

const randomText = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const createRandomToast = () => {
  toast.dark(randomTextWithLines(20, 1), {
    type: toast.TYPE.INFO,
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 10000,
    hideProgressBar: false,
  });
}

const createNotificaionToast = () => {
  const payload = {
    data: {
      app: 'Testing Channel',
      sid: '1372',
      url: 'https://epns.io',
      acta: '',
      aimg: '',
      amsg: 'Testing 3..2..1',
      asub: '',
      icon:
        'https://gateway.ipfs.io/ipfs/bafybeifvqzq7pgr547ridaxceikskfvuxxrfz2m5vlpk7uljikwd3ybesa/QmdKPEWYv1xR6A6pEPPUwfaWSTztjeMWLVaaMjjEMo8foU',
      type: 1,
      epoch: '1663058708',
      etime: null,
      hidden: '0',
      sectype: null
    },
    recipients: '0xb59cdc85cacd15097ece4c77ed9d225014b4d56d',
    notification: {
      body: randomTextWithLines(5, 3),
      title: 'Testing Channel - '
    }
  };

  showNotifcationToast(payload, true);
};

// Create Module
const InternalDevModule = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Do progress bar
    setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setProgress(0);
      }
    }, 100);
  }, [progress]);

  return (
    <Container>
      {/* Progess Bar Component */}
      <IndividualComps caption="components/reusables/progress/ProgressBarUnit">
        <ProgressBar percent={progress} color={GLOBALS.COLORS.PRIMARY_PINK} />
      </IndividualComps>

      {/* Spinner Component */}
      <IndividualComps caption="components/reusables/spinner/SpinnerUnit">
        <Spinner />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="omponents/reusables/loaders/LoaderSpinner">
        <LoaderSpinner type={LOADERTYPE.SEAMLESS} title="Randomized With Long Text, Very Long" completed={false} />
      </IndividualComps>

      {/* Toast Controller */}
      <IndividualComps caption="omponents/reusables/toasts/ToastController">
        <Button
          bg="#e20880"
          color="#fff"
          flex="initial"
          radius="15px"
          padding="20px 20px"
          onClick={() => {
            createNotificaionToast();
          }}
        >
          <Span color="#fff" weight="600" textTransform="none" line="22px" size="16px">
            Trigger Random Notification
          </Span>
        </Button>
      </IndividualComps>

      {/* Toast Controller */}
      <IndividualComps caption="omponents/reusables/toasts/ToastController">
        <Button
          bg="#e20880"
          color="#fff"
          flex="initial"
          radius="15px"
          padding="20px 20px"
          onClick={() => {
            createRandomToast();
          }}
        >
          <Span color="#fff" weight="600" textTransform="none" line="22px" size="16px">
            Trigger Random Toast
          </Span>
        </Button>
      </IndividualComps>
      
      {/* Loader with Spinner Component */}
      <IndividualComps caption="omponents/reusables/loaders/LoaderSpinner">
        <LoaderSpinner type={LOADERTYPE.STANDALONE} title="Randomized" completed={false} />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps caption="omponents/reusables/loaders/LoaderSpinner">
        <LoaderSpinner type={LOADERTYPE.SEAMLESS} title="This time it's done" completed={true} />
      </IndividualComps>

    </Container>
  );
};
export default InternalDevModule;

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(Section)`
  align-items: center;
  align-self: stretch;
  background: ${(props) => props.theme.mainBg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  position: relative;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
  }
`;

const IndividualComps = styled(Item)`
	border-radius: 32px;
	border: 1px solid #ddd;
	margin: 20px;
	min-height: 100px;
	min-width: 25%;
	overflow: hidden;
	padding: 20px;
	
	&:after {
		background: #ddd;
		bottom: 0;
		content: '${(props) => props.caption}';
		font-size: 10px;
		left: 0;
		padding: 2px;
		position: absolute;
		right: 0;
		text-align: center;
	}
`;
