import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { CardActionArea } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { postIPFS } from 'api';
import { updateUser } from 'api/w2w';
import { CID } from 'ipfs-http-client';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import { showCharacters } from './helpers';

import { ChangeEvent } from 'react';
import { FileMessageContent } from '../Files/Files';
import styled from 'styled-components';
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
// import { H1, H2 } from 'primaries/SharedStyling'

interface ProfilePropsType {
  profilePicture: string;
  updateProfile: (image: string) => void;
  setActiveTab: (number: number) => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
});

const Profile = (props: ProfilePropsType): JSX.Element => {
  const { did, connectedUser }: AppContext = useContext<AppContext>(Context);

  const wallets = connectedUser.wallets.split(',');
  const [copiedDid, setCopiedDid] = useState<boolean>(false);
  const [copiedWallet, setCopiedWallet] = useState<boolean>(false);
  const [profile, setProfile] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      CID.parse(props.profilePicture);
      setProfile(props.profilePicture);
    } catch (err) {
      setProfile(props.profilePicture);
    }
  }, [props.profilePicture]);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleClickDid = async (wallet: string) => {
    copyTextToClipboard(wallet).then(() => {
      setCopiedDid(true);
      setTimeout(() => {
        setCopiedDid(false);
      }, 3000);
    });
    setMessage('DID copied successfully');
  };

  const handleClickWallet = async (wallet: string) => {
    copyTextToClipboard(wallet).then(() => {
      setCopiedWallet(true);
      setTimeout(() => {
        setCopiedWallet(false);
      }, 3000);
    });
    setMessage('Wallet copied successfully');
  };

  const changeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    let fileMessageContent: FileMessageContent;
    reader.readAsDataURL(file);
    reader.onloadend = async (e): Promise<void> => {
      fileMessageContent = {
        content: e.target.result as string,
        name: file.name,
        type: file.type,
        size: file.size,
      };
      const cid: string = await postIPFS(JSON.stringify(fileMessageContent));
      setProfile(fileMessageContent.content);
      props.updateProfile(cid);
      await updateUser({ did: did.id, profilePictureCID: cid });
    };
  };

  return (
    <>
      <Container elevation={0}>
        <Header>
          <BackButtonHolder
            aria-label="back"
            onClick={() => props.setActiveTab(0)}
          >
            <BackspaceIcon />
          </BackButtonHolder>
        </Header>

        <CardActionArea sx={{ position: 'relative', background: 'lightgrey', pointerEvents: 'none' }}>
          <CardMedia
            component="img"
            height="140"
            image={profile}
            alt="profile"
          />
        </CardActionArea>

        {/* <Tooltip title="Change profile picture" placement="top-start">
          <div className="changeProfilePicture">
            <img src={profile} alt="profile" />

            <section>
              <IconButton color="primary" aria-label="upload picture" component="label" sx={styles.uploadIcon}>
                <input
                  hidden
                  onChange={changeHandler}
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  type="file"
                />
                <PhotoCamera />
              </IconButton>
            </section>
          </div>
        </Tooltip> */}

        <DetailsContainer>
          <DetailsHeader component="legend">Details</DetailsHeader>

          <DetailsCard>
            <Label component="legend">Wallets:</Label>

            {wallets.map((wallet) => (
              <WalletBox >
                <Value component="legend">{showCharacters(wallet)}</Value>

                {!copiedWallet ? (
                  <IconButton
                    aria-label="back"
                    onClick={() => handleClickWallet(wallet)}
                  >
                    <CopyIcon />
                  </IconButton>
                ) : (
                  <IconButton aria-label="back">
                    <Checkicon />
                  </IconButton>
                )}
              </WalletBox>
            ))}
          </DetailsCard>
        </DetailsContainer>
      </Container>

      <Snackbar
        open={copiedDid || copiedWallet}
        autoHideDuration={3000}
        onClose={() => {
          setCopiedWallet(false);
          setCopiedDid(false);
        }}
      >
        <Alert
          onClose={() => {
            setCopiedWallet(false);
            setCopiedDid(false);
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default Profile;

const Container = styled(Card)`
  width: 100%;
  height: 100%;
  margin-top: 0px;
  z-index: 10;
  background: white;
  // #E20880 pink
`;

const Header = styled(Box)`
  margin-bottom: 2px;
  margin-left: 1px;
  margin-top: 1px;
`;

const WalletBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1;
`;

const BackButtonHolder = styled(IconButton)`
  color: rgb(226, 8, 128);
  margin: 5px;
  &:hover {
    color: rgba(53, 197, 243, 1);
  }
`;
const BackspaceIcon = styled(KeyboardBackspaceIcon)`
  color: rgb(226, 8, 128);
`;

const DetailsContainer = styled(Box)`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
`;

const DetailsHeader = styled(Typography)`
  font-size: 16px;
  margin-bottom: 1px;
  color: #e20880;
  font-family: 'Strawford', Helvetica, sans-serif;
`;

const DetailsCard = styled(Box)`
  margin: 7px 0px;
`;

const Label = styled.h2`
  color: rgba(53, 197, 243, 1);
  font-size: 13px;
  font-family: 'Strawford', Helvetica, sans-serif;
  margin: 0px;
`;

const Value = styled.p`
  color: black;
  font-size: 14px;
  margin: 2px;
  min-width: 200px;
  font-family: 'Strawford', Helvetica, sans-serif;
  display: flex;
  align-items: center;
`;

const CopyIcon = styled(ContentCopyIcon)`
  color: rgb(226, 8, 128);
  font-size: 14px !important;
  margin-top: -0.5px;
`;

const Checkicon = styled(CheckIcon)`
  color: rgb(226, 8, 128);
  font-size: 14px !important;
  margin-top: -0.5px;
`;
