// External Packages
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillExclamationCircle } from 'react-icons/ai';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import ChannelsModule from 'modules/channels/ChannelsModule';
import { Dropdown } from 'blocks/dropdown/Dropdown';
import { Menu } from 'blocks/menu/Menu';
import { MenuItem } from 'blocks/menu/MenuItem';

// Internal Configs
import APP_PATHS from 'config/AppPaths';
import GLOBALS from 'config/Globals';

// Other Information section
const ChannelsPage = ({ loadTeaser, playTeaser, channelID }) => {
  let { channelid } = useParams();
  const calculatedChannelID = channelid ? channelid : channelID;

  // RENDER
  return (
    <Container>
      <Dropdown
        overlay={
          <Menu>
            <MenuItem
              icon = {() => (<AiFillExclamationCircle
                color="red"
              />)}
              onClick = {() => {alert('wewe')}}
              label = "Archive" 
              />
            <MenuItem
              icon = {() => (<AiFillExclamationCircle
                color="red"
              />)}
              onClick={() => {}}
              label="New Archive" 
            />
            <MenuItem
              icon = {() => (<AiFillExclamationCircle
                color="red"
              />)}
              onClick={() => {}}
              label="New Test" 
            />
            <MenuItem
              icon = {() => (<AiFillExclamationCircle
                color="red"
              />)}
              onClick={() => {}}
              label="Delete"
            />
            toggleButton
      </Menu>
        }
      >
        {/* {(isOpen) = <button>Click me</button>} */}
      </Dropdown>


      {/* <Menu>
        <MenuItem
          icon = {() => (<AiFillExclamationCircle
            color="red"
          />)}
          onClick = {() => {alert('wewe')}}
          label = "Archive" 
          />
        <MenuItem
          icon = {() => (<AiFillExclamationCircle
            color="red"
          />)}
          onClick={() => {}}
          label="New Archive" 
        />
        <MenuItem
          icon = {() => (<AiFillExclamationCircle
            color="red"
          />)}
          onClick={() => {}}
          label="New Test" 
        />
        <MenuItem
          icon = {() => (<AiFillExclamationCircle
            color="red"
          />)}
          onClick={() => {}}
          label="Delete"
        />
      </Menu> */}
      <ChannelsModule
        channelID={calculatedChannelID}
        loadTeaser={loadTeaser}
        playTeaser={playTeaser}
      />
    </Container>
  );
};
export default ChannelsPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;
