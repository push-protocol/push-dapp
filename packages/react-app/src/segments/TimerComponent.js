import React from "react";
import TimerItem from "../components/TimerItem";
import styled from "styled-components";

const TimerComponent = () => {
    return (
        <Wrapper>
            <TimerItem />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background: url("/DOWNTIME2.png") content-box;
    background-repeat: no-repeat;
    background-size: 100%;
`;
export default TimerComponent;
