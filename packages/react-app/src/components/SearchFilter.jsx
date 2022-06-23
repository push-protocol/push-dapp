import React from "react";
import {useState,useEffect} from "react";
import { MultiSelect } from "react-multi-select-component";
import './SearchFilter.css';
import styled, {useTheme} from "styled-components";
import {ThemeProvider} from "styled-components";
import DateTimePicker from 'react-datetime-picker';
import Loader from "react-loader-spinner";
import { Item } from './SharedStyling';

export default function SearchFilter(props)
{
    
    const [search, setSearch] = useState('');
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState();
    const themes = useTheme();

    const applySearch = async () => {
        var channels = [];
        selectedOption.length ? selectedOption.map(each => channels.push(each.value)) : (channels = []);
        await props.filterNotifications(search, channels, startDate,endDate);
    }
    
    var options = [];
    props.notifications.map(each => options.push({label : each.app , value : each.channel }));
    var uniqueOptions = [...new Map(options.map((item) => [item["value"], item])).values()];
    const [showFilter,setShowFilter] = useState(false); 
    const [selectedOption, setSelectedOption] = useState(uniqueOptions);
    // console.log(props.notifications);

    const reset = async () => {
        setStartDate(null);
        setEndDate(null);
        setSearch('');
        setSelectedOption(uniqueOptions);
        props.reset();
    }


    return(
     <ThemeProvider theme={themes}>
         <Container>
            <TopBar mbtm={showFilter ? '1rem' : '0px'}>
                <Left>
                {themes.scheme === 'light' ? ( <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src='/svg/filterIcon.svg' />) : ( <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src='/svg/filterw.png' />)}
                {!props.loadFilter?
                    <span className="showfilter" onClick={()=> {showFilter ? setShowFilter(false) : setShowFilter(true)}}>
                        <span className="filter" style={{marginTop:"1rem", fontWeight:"400", color:"#B4B4B4"}} >Filter Notifications</span> 
                        <span className="arrow">
                            <ToggleArrowImg>
                                <img alt="arrow" className={`${showFilter ? "down" : "up"}`} src="/svg/arrow.svg"/> 
                            </ToggleArrowImg>
                        </span>
                    </span>
                    :
                    <span className="showfilter">
                        <span className="filter" style={{marginTop:"1rem", fontWeight:"400", color:"#B4B4B4"}} >Filter Notifications</span> 
                        <Item
                            padding="10px 20px"
                            >
                            <Loader type="Oval" color="#35c5f3" height={20} width={20} />
                        </Item>
                    </span>
                }
                    
                </Left>
                {
                    showFilter ? ( <Buttons>
                    <ButtonFeed bgColor='#e20880' onClick={applySearch}>
                            Apply
                    </ButtonFeed>    
                    <ButtonFeed bgColor='#35c5f3' onClick={reset}>
                        Reset
                    </ButtonFeed> 
                </Buttons>) : (<></>)
                }
               
               
            </TopBar>

            {
                    showFilter ? ( <SearchOptions>
                        <SectionSearch mright='3.5rem' mtop='3.6rem'>
                         
                        <SelectChannel>
                            <SMultiSelect
                                options={uniqueOptions}
                                valueRenderer={ () => {
                                    if(selectedOption.length === 0)  return 'By Channel Name'
                                    return `${selectedOption.length} Selected`
                                }}
                                value={selectedOption}
                                onChange={setSelectedOption}
                                labelledBy="Search Notifications from"
                                placeholder="Search Notifications from"
                            />
        
                        </SelectChannel>
                        <InputWrapper>
                        
                        <input value={search} type="text" className="input2" placeholder="By Keyword" style={{"fontFamily":"Source Sans Pro"}} onChange={(e) => {
                            setSearch(e.target.value);
                        }}/>
                        </InputWrapper> 
                        </SectionSearch>
                        <SectionSearch mleft='3.5rem'>
                            <p style={{fontSize: "1.2rem", color:"#B4B4B4", fontWeight:"500", "fontFamily":"Source Sans Pro" }}>By time of notification sent</p>
                                <RangeSection mtop="0.5rem">
                                    <TimeLabelDiv>
                                        <div>Start Date</div>
                                    </TimeLabelDiv>
                                    <SDateTimePicker className="date" value={startDate} onChange={setStartDate}/>
                                </RangeSection>
                                <RangeSection mttop="1.5rem">
                                    <TimeLabelDiv>
                                        <div>End Date</div>
                                    </TimeLabelDiv>
                                    <SDateTimePicker className="date" value={endDate} onChange={setEndDate}/>
                                </RangeSection>
                        </SectionSearch>
                    </SearchOptions>) : (<></>)
                }
         </Container>
    </ThemeProvider>
    )
}


const SDateTimePicker = styled(DateTimePicker)`
    padding-right: 4px;
    .react-datetime-picker__inputGroup__input{
        font-weight: 500 !important;
        color : ${props => props.theme.scheme === "dark" ? `#fff` :`#000`};
    }

    .react-datetime-picker__button svg {
        stroke : ${props => props.theme.scheme === "dark" ? `#fff` :`#000`};
    }
`

const TimeLabelDiv = styled.div`
    flex: 2;
    padding: 0 10px;
    background-color: #35c5f3;
    align-self: stretch;
    text-align: center;
    color: white;
    font-weight: bold;


    div{
        margin-top: 10px;
        font-family: Source Sans Pro;
    }

    @media(max-width: 400px){
        padding: 0 4px;
    }
`


const SMultiSelect = styled(MultiSelect)`
    font-family: Source Sans Pro;
    .search input{
        color : ${props => props.theme.scheme === "dark" ? `#fff` :`#000`};
    }

    /* Aligns the option label with the checkbox */
    .select-item{
        position: relative;
    }
    .select-item span{
        position: absolute;
        margin-top: 7px;
        margin-left: 22px;
    }

    ${props => props.theme.scheme === "dark" && `
        --rmsc-main: #4285f4;
        --rmsc-hover: #0e0c0a;
        --rmsc-selected: #1d1915;
        --rmsc-border: #333333;
        --rmsc-gray: #555555;
        --rmsc-bg: #000000;
        color: #fff;
    `}
`


const SelectChannel = styled.div`
border: 1px solid ${props => props.theme.faucetBorder};
border-radius: 5px;
font-family: Source Sans Pro;
`;

const RangeSection = styled.div`
display: flex;
flex-direction: row;
border: 1px solid ${props => props.theme.faucetBorder};

border-radius: 5px;
justify-content: space-between;
align-items: center;
height: "40px";

position: relative;
margin-top:  ${(props) => (props.mttop ? props.mttop : "")};
@media(max-width:600px)
{
    margin-top:  ${(props) => (props.mtop ? props.mtop : "")};
}
`;

const Container = styled.div`
width: -webkit-fill-available;
display: flex;
flex-direction: column;
// border:  0.5px solid #674C9F;
// border:${(props) => (props.Border ? props.Border : "")}
border: 1px solid ${props => props.theme.faucetBorder};
border-radius: 10px;
margin: 1.3rem;

@media(max-width: 400px){
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
`;


const TopBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom: 1px solid ${props => props.theme.faucetBorder};
border-top-left-radius: 5px;
border-top-right-radius: 5px;
margin-bottom: ${(props) => (props.mbtm ? props.mbtm : "")};
font-family: Source Sans Pro;
`;

const Left = styled.div`
display: flex;
flex-direction: row;
font-family: Source Sans Pro;
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 2rem;
margin-top: 0.3rem;
margin-bottom: 0.5rem;
@media (max-width: 600px)
{
    margin-right: 1.5rem;
    margin-left: 2rem;
    width: 4rem;
    flex-direction: column;
    
}
font-family: Source Sans Pro;

`;

const ButtonFeed = styled.button`

height: 30px;
margin :3px;
color: white;
width: 75px;
border-radius: 5px;
border: 2px solid white;
background-color:  ${(props) => (props.bgColor ? props.bgColor : "")};
margin-right:  ${(props) => (props.mright ? props.mright : "")};
&:hover {
  cursor: pointer;
  pointer: hand;
}
@media (max-width: 500px)
{
    margin-right:  ${(props) => (props.mright ? "1.5rem" : "")};
}
font-family: Source Sans Pro;
`;


const SearchOptions = styled.div`
display: flex;
flex-direction: row;
margin-left: 2rem;
margin-right: 2rem;
margin-bottom: 1rem;
justify-content: space-between;
font-family: Source Sans Pro;

@media(max-width: 600px)
{
    flex-direction: column;
    justify-content: center;
    align-item: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
`;

const SectionSearch = styled.div`
disply: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
@media(min-width: 600px)
{
    margin-right:  ${(props) => (props.mright ? props.mright : "")};
    margin-left:  ${(props) => (props.mleft ? props.mleft : "")};
    margin-top:  ${(props) => (props.mtop ? props.mtop : "")};
}
`;


const InputWrapper = styled.div`
    display:flex;
    height: 40px;

    border: 1px solid ${props => props.theme.faucetBorder};
    border-radius: 5px;
    margin-top: 1.5rem;
    padding: 1px;
    @media(max-width:600px)
    {
        margin-bottom: 1rem;
    }
`;


const ToggleArrowImg = styled.div`

    .down {
        transform: rotate(-180deg);
        transition: transform .25s;
    }

    .up{
        transform: rotate(-360deg);
        transition: transform .25s;
    }
`
