import React, { useEffect, useState } from 'react';

import { Item, ItemH, Section } from 'components/SharedStyling';
import GLOBALS from 'config/Globals';
import styled from 'styled-components';


import LoaderSpinner, { LOADERTYPE } from 'components/reusables/loaders/LoaderSpinner';
import ProgressBar from 'components/reusables/progress/ProgressBarUnit';
import Spinner from 'components/reusables/spinners/SpinnerUnit';

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
      <IndividualComps
        caption="components/reusables/progress/ProgressBarUnit"
      >
        <ProgressBar percent={progress} color={GLOBALS.COLORS.PRIMARY_PINK} />
      </IndividualComps>

      {/* Spinner Component */}
      <IndividualComps
        caption="components/reusables/spinner/SpinnerUnit"
      >
        <Spinner />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps
        caption="omponents/reusables/loaders/LoaderSpinner"
      >
        <LoaderSpinner 
          type={LOADERTYPE.SEAMLESS}
          title="Randomized With Long Text, Very Long"
          completed={false}
        />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps
        caption="omponents/reusables/loaders/LoaderSpinner"
      >
        <LoaderSpinner 
          type={LOADERTYPE.STANDALONE}
          title="Randomized"
          completed={false}
        />
      </IndividualComps>

      {/* Loader with Spinner Component */}
      <IndividualComps
        caption="omponents/reusables/loaders/LoaderSpinner"
      >
        <LoaderSpinner 
          type={LOADERTYPE.SEAMLESS}
          title="This time it's done"
          completed={true}
        />
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
  box-shadow: ${GLOBALS.CONSTANTS.MODULE.BOX_SHADOW};
	border-radius: ${GLOBALS.CONSTANTS.MODULE.BORDER_RADIUS}px;
  flex-direction: row;
  flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
	position: relative;
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
