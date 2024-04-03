import React from 'react';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from './reusables/SharedStylingV2';
import styled, { useTheme } from 'styled-components';
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
        unstakeErrorMessage,
        setUnstakeErrorMessage
    } = InnerComponentProps;

    const handleClose = () => {
        setTransactionSteps(0);
        setUnstakeErrorMessage(null);
        onClose();
    }

    const retryClaimingRewards = async () => {
        setTransactionSteps(0);
        setTotalTransactionNo(0);
        setCurrentTransactionNo(0);
        if (transactionText?.includes('Unstaking')) {
            unstakeTokensPaginated();
        } else {
            claimRewards();
        }
    }

    const theme = useTheme();

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
                                    <H2V2 fontSize='20px' fontWeight='500' letterSpacing='-0.84px'>
                                        Please sign transaction {" "}
                                        {currentTransactionNo}/{totalTransactionNo}
                                    </H2V2>
                                    <H2V2 fontSize='16px' fontWeight='400' color='#657795'>
                                        Processing your request
                                    </H2V2>
                                </ItemVV2>

                                <H2V2 fontSize='16px' fontWeight='400' color='#657795'>
                                    {transactionText}
                                </H2V2>

                                <ItemVV2 padding='16px'>
                                    <H2V2 fontSize='14px' fontWeight='400' color='#D53A94'>
                                        Confirm the request in your wallet
                                    </H2V2>
                                </ItemVV2>

                            </ItemVV2></>
                    )}

                    {transactionSteps === 1 && (
                        <ItemVV2 gap='24px'>


                            <ItemVV2 gap='9px'>
                                <H2V2 fontSize='20px' fontWeight='500' letterSpacing='-0.84px'>
                                    Transaction Error
                                </H2V2>
                                <H2V2 fontSize='16px' fontWeight='400' color='#657795'>
                                    {unstakeErrorMessage}
                                </H2V2>
                            </ItemVV2>

                            <ItemHV2 gap="5px">
                                <EmptyButton
                                    color={theme.activeButtonText}
                                    background={'transparent'}
                                    border={`1px solid ${theme.activeButtonText}`}
                                    onClick={handleClose}
                                >
                                    Close
                                </EmptyButton>
                                <FilledButton onClick={retryClaimingRewards}>Retry</FilledButton>
                            </ItemHV2>

                        </ItemVV2>
                    )}

                    {transactionSteps === 2 && (
                        <ItemVV2 gap='24px'>

                            <ItemVV2>
                                <CheckMark height='50px' width='50px' />

                                <ItemVV2 gap='9px'>
                                    <H2V2 color={theme.stakingPrimaryText} fontSize='20px' fontWeight='500' letterSpacing='-0.84px'>
                                        Transactions Successful
                                    </H2V2>
                                    <H2V2 fontSize='16px' fontWeight='400' color='#657795'>
                                        You have claimed all the rewards.
                                    </H2V2>
                                </ItemVV2>

                            </ItemVV2>

                            <ItemVV2 gap="5px" maxWidth="115px" height="48px" alignSelf="center">
                                <EmptyButton
                                    color="#FFFFFF"
                                    background="#D53A94"
                                    border={`1px solid #D53A94`}
                                    onClick={handleClose}
                                >
                                    Close
                                </EmptyButton>
                            </ItemVV2>


                        </ItemVV2>
                    )}

                    {transactionSteps == 3 && (
                        <ItemVV2 gap='24px'>

                            <ItemVV2 gap='9px'>
                                <H2V2 color={theme.stakingPrimaryText} fontSize='20px' fontWeight='500' letterSpacing='-0.84px'>
                                    Transaction Error
                                </H2V2>
                                <H2V2 fontSize='16px' fontWeight='400' color='#657795'>
                                    {unstakeErrorMessage}
                                </H2V2>
                            </ItemVV2>

                            <ItemVV2 gap="5px" minWidth="115px" height="48px" alignSelf="center">
                                <EmptyButton
                                    color="#FFFFFF"
                                    background="#D53A94"
                                    border={`1px solid #D53A94`}
                                    onClick={handleClose}
                                >
                                    Close
                                </EmptyButton>
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
    min-width: 300px;
    max-width: 350px;
    padding: 24px 32px;


`

const Button = styled.div`
    width: 115px;
    height: 40px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FilledButton = styled(Button)`
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    color: #FFFFFF;
    @media(max-width:600px){
        font-size: 14px;
    }
    
`;

const EmptyButton = styled(Button)`
    border-radius: 8px;
    border: ${(props)=>props.border};
    color: ${(props)=>props.color};
    background:${(props)=>props.background};

    &:hover{
        opacity:1;
    }

    

`