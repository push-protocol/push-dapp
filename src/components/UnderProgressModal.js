import React from 'react';
import styled, { css,keyframes} from 'styled-components';
import {MdClose} from 'react-icons/md';
import {FaTelegramPlane,FaDiscord} from 'react-icons/fa';

const UnderProgressModal=()=>{
    const [show,setShow]=React.useState(true);
    React.useEffect(()=>{

    },[])
    return(
        <>
        <Modal show={show}>
        {/* <ModalHeader> */}
            <MdClose  className='closeIcon' style={{margin:"15px"}} fontSize="1.5rem" onClick={e=>setShow(false)}/>
        {/* </ModalHeader> */}
        {/* <ModalBody>
        <h1>Hi User,
            <br/>
             We Are Currently Migrating This Site 
             <br/>To The Mainnet
            <br/>
         So You May Face Some Downtime Here.</h1>
        </ModalBody>
        <ModalFooter>
            <h3>If You Want To Report an Issue Join Here:</h3>
            <div className='contact'>
            <FaTelegramPlane color='#4292e4' fontSize="1.5rem" onClick={e=>window.open("https://t.me/epnsproject")}/>
            <FaDiscord color='#aa24b9' fontSize="1.5rem" onClick={e=>window.open("https://discord.gg/YVPB99F9W5")}/>
            </div>
        </ModalFooter> */}
        <DownTimeImg src='/DOWNTIME2.png' alt="downTime"/>
        </Modal>
        </>
    )
}


const animateappear =keyframes`
    
0%{
    opacity:0;
    transform:scale(.4);
}
100%{
    opacity:1;  
    transform: scale(1);
}

`;
const DownTimeImg=styled.img`
    height: 800px;
    width: 900px;
`;
const Modal=styled.div`
    display: ${props => {
        if(props.show)return "block";
        else return "none !important"
    }};
    background:#c6edfa;
    box-shadow:4px 4px 10px gray;
    height:500px;
    width:870px;
    flex-direction:column;
    border-radius:10px;
    position:absolute;
    z-index:5;
    top:2%;
    display: flex;
    justify-content:center;
    align-items:center;
    animation:${animateappear} .1s linear  ;

    .closeIcon{
        position: absolute;
        top:0.1rem;
        right:.1rem;
        color:white;
        z-index:4;
    }
`;
const ModalHeader=styled.div`
    display: flex;
    align-items:center;
    align-content:flex-end;
    justify-content:flex-end;
    width: 100%;
    max-height: 30px;
    flex:1;
`;

const ModalFooter=styled.div`
    display: flex;
    align-items:center;
    text-align:left;
    align-content:flex-start;
    justify-content:flex-start;
    width: 100%;
    flex:2;

    h3{
        color:#454b4d;
        font-weight:200 !important;
    }
    .contact{
        display: flex;
        justify-content:space-around;
        width: 10%;
    }

`;

const ModalBody=styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    flex-direction:column;
    flex:3;
    padding-top:10px;
    
    h1{
        color:black;
        line-height:60px;
        text-transform:none;
        font-family: 'Roboto', sans-serif;
    }

    
`;

export default UnderProgressModal;