import React from 'react';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from './reusables/SharedStylingV2';
import styled from 'styled-components';
import Globals from 'config/Globals';
import { LOADER_SPINNER_TYPE } from './reusables/loaders/LoaderSpinner';
import Spinner from './reusables/spinners/SpinnerUnit';
import { ReactComponent as CheckMark } from 'assets/checkmark.svg';

const StepsTransactionModal = ({ onClose, InnerComponentProps }) => {

    const {
        currentTransactionNo,
        totalTransactionNo,
        transactionSteps,
        transactionText,
        setCurrentTransactionNo,
        setTotalTransactionNo,
        setTransactionSteps,
        claimRewards,
        unstakeTokensPaginated,
    } = InnerComponentProps;

    const handleClose = () => {
        setTransactionSteps(0);
        onClose();
    }

    const retryClaimingRewards = async () => {
        setTransactionSteps(0);
        setTotalTransactionNo(0);
        setCurrentTransactionNo(0);
        if(transactionText?.includes('Unstaking')){
            unstakeTokensPaginated();
        }else{
            claimRewards();
        }
    }

    return (
        <Container>

            {totalTransactionNo ? (
                <>
                    <ItemHV2 justifyContent='end'>
                        <Close
                            onClick={() => handleClose()}
                            style={{ cursor: 'pointer' }}
                        />
                    </ItemHV2>


                    {transactionSteps === 0 && (
                        <>
                            <Spinner
                                size={42}
                                color={Globals.COLORS.PRIMARY_PINK}
                                type={LOADER_SPINNER_TYPE.PROCESSING}
                            />

                            <ItemVV2 gap='24px' margin='16px 0 0 0'>

                                <ItemVV2>
                                    <H2V2 fontSize='28px' fontWeight='500' letterSpacing='-0.84px'>
                                        Please sign transaction {" "}
                                        {currentTransactionNo}/{totalTransactionNo}
                                    </H2V2>
                                    <H2V2 fontSize='18px' fontWeight='400' color='#657795'>
                                        Processing your request
                                    </H2V2>
                                </ItemVV2>

                                <H2V2 fontSize='18px' fontWeight='400' color='#657795'>
                                    {transactionText}
                                </H2V2>

                                <ItemVV2 padding='16px'>
                                    <H2V2 fontSize='16px' fontWeight='400' color='#D53A94'>
                                        Confirm the request in your wallet
                                    </H2V2>
                                </ItemVV2>

                            </ItemVV2></>
                    )}

                    {transactionSteps === 1 && (
                        <ItemVV2 gap='24px'>

                            <ItemVV2 gap='9px'>
                                <H2V2 fontSize='28px' fontWeight='500' letterSpacing='-0.84px'>
                                    Transaction Error
                                </H2V2>
                                {/* <H2V2 fontSize='18px' fontWeight='400' color='#657795'>
                                    User denied the transaction signature.
                                </H2V2> */}
                            </ItemVV2>

                            <ItemVV2>
                                <FilledButton onClick={retryClaimingRewards}>Retry</FilledButton>
                            </ItemVV2>
                        </ItemVV2>
                    )}

                    {transactionSteps === 2 && (
                        <ItemVV2 gap='24px'>

                            <ItemVV2>
                                <CheckMark height='50px' width='50px' />

                                <ItemVV2 gap='9px'>
                                    <H2V2 fontSize='28px' fontWeight='500' letterSpacing='-0.84px'>
                                        Transactions Successful
                                    </H2V2>
                                    <H2V2 fontSize='18px' fontWeight='400' color='#657795'>
                                        You have claimed all the rewards.
                                    </H2V2>
                                </ItemVV2>

                            </ItemVV2>

                            <ItemVV2 onClick={handleClose}>
                                <FilledButton>Close</FilledButton>
                            </ItemVV2>


                        </ItemVV2>
                    )}
                </>
            ) : (
                <Spinner
                    size={42}
                    color={Globals.COLORS.PRIMARY_PINK}
                    type={LOADER_SPINNER_TYPE.PROCESSING}
                />

            )}










        </Container>
    );
};

export default StepsTransactionModal;

const Container = styled(ItemVV2)`

    min-width:493px;
    padding:32px 24px;


`

const FilledButton = styled(ButtonV2)`
    min-width:200px;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    & > div{
        display:block;
    }

    @media(max-width:600px){
        font-size: 14px;
    }
    
`;