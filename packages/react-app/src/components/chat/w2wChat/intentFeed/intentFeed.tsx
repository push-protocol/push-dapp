import React, { useState, useEffect, useContext } from 'react';
import './intentFeed.css';
import DefaultIntent from '../defaultIntent/defaultIntent';
import { Context } from '../w2wIndex';
import { fetchIntent } from '../w2wUtils';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { approveIntent } from '../../../../api';
import { intitializeDb } from '../w2wIndexeddb';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface intentFeedProps {
    filteredUserData: {}[],
}

export interface InboxChat {
    name: string,
    avatar: string,
    timestamp: number,
    lastMessage: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NavButton = (props) => {
    const { text, onClick, className } = props;
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};

const IntentFeed = (props: intentFeedProps) => {
    const { did, setChat } = useContext(Context);
    const [receivedIntents, setReceivedIntents] = useState([]);
    const [open, setOpen] = useState(false);
    const [receivedIntentFrom, setReceivedIntentFrom] = useState();
    const [intentMessage, setIntentMessage] = useState();
    const [openSuccessSnackbar, setOpenSuccessSnackBar] = useState(false);
    const [openReprovalSnackbar, setOpenReprovalSnackBar] = useState(false);
    const [toDID, settoDID] = useState();


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    async function resolve_threadhash() {
        let getIntent;
        getIntent = await intitializeDb<string>('Read', 2, 'Intent', did.id, '', 'did');

        if (getIntent === undefined) {
            getIntent = await fetchIntent(did);
            setReceivedIntents(getIntent);
        }
        else {
            getIntent = getIntent.body;
            setReceivedIntents(getIntent);
            getIntent = await fetchIntent(did);
            setReceivedIntents(getIntent);
        }
    }

    useEffect(() => {
        resolve_threadhash();
    }, [props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        setChat(feed);
    }

    function showModal(intentFrom, intentMsg, todid) {
        setReceivedIntentFrom(intentFrom);
        setIntentMessage(intentMsg);
        settoDID(todid);
        handleOpen();
    }

    async function ApproveIntent(status: string) {
        var fromDID = did.id;
        console.log("hello");
        handleClose();
        const res = await approveIntent(fromDID, toDID, status, "1", "sigType");
        if (status == "Approved")
            setOpenSuccessSnackBar(true);
        else
            setOpenReprovalSnackBar(true);
        await resolve_threadhash();
    }


    function displayReceivedIntents() {
        return (
            <>
                {
                    (!receivedIntents?.length) ? (
                        <p style={{ position: 'relative', textAlign: 'center', width: '80%', background: '#d2cfcf', padding: '10px' }}>
                            No received intents !
                        </p>
                    ) :
                        (
                            <>
                                <div>
                                    {receivedIntents.map((intent: any) => (
                                        <div key={intent.threadhash} onClick={() => { setCurrentChat(intent); showModal(intent.wallets, intent.msg.lastMessage, intent.intent_sent_by) }} >
                                            <DefaultIntent inbox={intent} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                }

            </>
        )

    }

    const handleCloseSuccessSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccessSnackBar(false);
    };

    const handleCloseReprovalSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenReprovalSnackBar(false);
    };

    return (
        <>
            <section className='messageFeed_body'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Approve or Reject your Intent
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            You have received an intent from {receivedIntentFrom}.
                        </Typography>
                        <br />
                        <Button onClick={() => { ApproveIntent("Approved") }}>Approve</Button>
                        <Button onClick={() => { ApproveIntent("Reproved") }}>Reject</Button>
                    </Box>
                </Modal>

                {/* Snackbar for successful approval */}
                <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
                    <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
                        Intent succesfully Approved !
                    </Alert>
                </Snackbar>
                {/* Snackbar for rejected intent */}
                <Snackbar open={openReprovalSnackbar} autoHideDuration={6000} onClose={handleCloseReprovalSnackbar}>
                    <Alert onClose={handleCloseReprovalSnackbar} severity="error" sx={{ width: '100%' }}>
                        Intent was Reproved !
                    </Alert>
                </Snackbar>
                {displayReceivedIntents()}
            </section>
        </>
    )

}

export default IntentFeed;