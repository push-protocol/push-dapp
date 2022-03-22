import React from "react";
import {useState,useEffect} from "react";
// import styled from "styled-components";
import { MultiSelect } from "react-multi-select-component";
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './SearchFilter.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "antd/dist/antd.css";
// import {DatePicker,TimePicker} from "antd";
import TimePicker from 'react-time-picker';
// import TimePicker from 'rc-time-picker';

import styled, {useTheme} from "styled-components";
import {ThemeProvider} from "styled-components";

import { themeLight, themeDark } from "config/Themization";





export default function SearchFilter(props)
{
    // let items=[]
    const [selectedOption, setSelectedOption] = useState([]);
    const [search, setSearch] = useState('');

    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();

    
    const themes = useTheme();

    const [darkMode, setDarkMode] = useState(false);


    const applySearch = async () => {
        console.log(`selected options: ${selectedOption[0].value}, selected keywords : ${search}, selected start date: ${startDate}, selected end date: ${endDate}, selected start time: ${startTime}, selected end time: ${endTime}`);
                            //list of channels ["0xaaa" , "0xbbb"]       //provide a start epoch           //provide an end epoch
        props.filter(search, selectedOption,                        new Date(startDate).getTime()/1000,   new Date(endDate).getTime()/1000);
    }
    // var InputValue = inputValue.value;
    const reset = async () => {

        setStartDate(new Date());
        setEndDate(new Date());
        setSearch('');
        setSelectedOption([]);
        
    }
    console.log(props.notifications);
    var options = [];
    props.notifications.map(each => options.push({label : each.app , value : each.channel }));
    var uniqueOptions = [...new Map(options.map((item) => [item["value"], item])).values()];
    const handleChange = ( selectedOptions) => {
        setSelectedOption(selectedOptions);
        console.log(`selected list is ${selectedOption}`)

    }

    var image='/svg/filterIcon.svg';

    React.useEffect(() => {
        if(themes==='themeDark')
        image='/svg/filterIcon.svg'
        else
        image='/svg/filterw.png'

    },themes)

    
    return(
     <ThemeProvider theme={themes}>

     
         <Container>
            <TopBar>
                <Left>
                {/* src= "/svg/filterIcon.svg" */}
                {!darkMode ? ( <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src='/svg/filterIcon.svg' />) : ( <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src='/svg/filterw.png' />)}
                     {/* <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem" }} src={image} /> */}
                    <span style={{marginTop:"1rem", fontWeight:"400", color:"#B4B4B4"}}>Filter Notifications</span> 
                </Left>
                <Buttons>
                    
                <ButtonFeed bgColor='#e20880' mright="1rem" onClick={applySearch}>
                            Apply
                    </ButtonFeed>    
                    <ButtonFeed bgColor='#35c5f3' onClick={reset}>
                        Reset
                    </ButtonFeed> 
                </Buttons>
            </TopBar>

            <SearchOptions>
                <SectionSearch mright='3.5rem'>
                 
                <SelectChannel>
                    <MultiSelect
                        options={uniqueOptions}
                        valueRenderer={ () => {
                            if(selectedOption.length === 0)  return 'Show Notifications from'
                            return `${selectedOption.length} Selected`
                        }}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        labelledBy="Search Notifications from"
                        className="DropDown"
                        placeholder="Search Notifications from"
                    />

                </SelectChannel>
                <InputWrapper>
                
                <input value={search} type="text" className="input2" placeholder="Search With Keyword" onChange={(e) => {
                    // console.log(e.target.value);
                    setSearch(e.target.value);
                
                }}/>
                </InputWrapper>

                
                    
                </SectionSearch>

                <SectionSearch mleft='3.5rem'>
                        {/* <RangeSection mttop="1.5rem">
                            <DatePicker onChange={(data) => {setStartDate(data)}} style={{borderTopLeftRadius:'5px',borderBottomLeftRadius:"5px",textColor:'#674C9F', borderRight:'1px solid white',WebkitBoxShadow:'0 0 2px 0 white',WebkitBorderBeforeColor:'white',height:"40px",borderColor:"0.5px solid #674C9F"}} className="Date1" placeholder="Start Date"/>
                            <DatePicker onChange={(data) => {setEndDate(data)}} style={{borderTopRightRadius:'5px', borderBottomRightRadius:"5px", borderLeft:'1px solid white',WebkitBoxShadow:'0 0 2px white',WebkitBorderBeforeColor:'white',height:"40px",borderColor:"0.5px solid #674C9F"}} className="success" placeholder="End Date"/>
                        </RangeSection>
                        

                        <RangeSection mtop="1.5rem">
                            <TimePicker onChange={(data) => {setStartTime(data)}} style={{borderTopLeftRadius:'5px',borderBottomLeftRadius:"5px", borderRight:'1px solid white',WebkitBoxShadow:'0 0 2px white',WebkitBorderBeforeColor:'white',height:"40px",width:"9.5rem",borderColor:"0.5px solid #674C9F"}} placeholder="Start Time"  className="success"/>
                            <TimePicker onChange={(data) => {setEndTime(data)}} style={{borderTopRightRadius:'5px', borderBottomRightRadius:"5px", borderLeft:'1px solid white',WebkitBoxShadow:'0 0 2px white',WebkitBorderBeforeColor:'white',width:"9.5rem", height:"40px",borderColor:"0.5px solid #674C9F"}} placeholder="End Time"  className="success"/>
                        </RangeSection>  */}
                        <RangeSection>
                            <DatePicker className="date" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Start Date"/>
                            <img className="dateimg" src="/date.png"/>
                            <Vl></Vl>
                            <DatePicker className="date2" selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="End Date"/>
                            <img className="dateimg" src="/date.png"/>

                        </RangeSection>
                        <RangeSection mtop="1.5rem">
                            {/* <TimePicker/> */}
                            <TimePicker disableClock="true" className="time" onChange={setStartTime} value={startTime} />
                            <img className="dateimg3" src="/date.png"/>
                                <Vl></Vl>
                            <TimePicker disableClock="true" className="time2" onChange={setEndTime} value={endTime} />
                            <img className="dateimg2" src="/date.png"/>
                        </RangeSection>


                        {/* <RangeSection>
                        <TimePicker onChange={setEndTime} value={startTime} />
                        <img className="dateimg" src="/date.png"/>
                            <div class="vl"></div>
                        <TimePicker onChange={setEndTime} value={endTime} />
                        <img className="dateimg" src="/date.png"/>
                        </RangeSection>
                         */}
                     

                    
                </SectionSearch>
            </SearchOptions>
            
           
           
         </Container>
         </ThemeProvider>
    )
}

const Vl = styled.div`
border-left: 1px solid ${props => props.theme.faucetBorder};
height: 30px;
margin-left: 1rem;
margin-right: 1rem;
margin-top: 5px;

@media(max-width: 600px)
{

    margin-left: 0.5rem;
            margin-right: 0.5rem;

}
`;
const DateAlignment = styled.div`
margin-right: 7rem;

@media(max-width: 600px)
{
    margin-right: 2rem;
}


@media(max-width: 400px)
{
    margin-right: 0rem;
}



@media(max-width: 1000px)
{
    margin-right: 3rem;
}
`;


const SelectChannel = styled.div`
// display: flex;
// flex-direction: row;
// border:  0.1px solid #674C9F;

border: 1px solid ${props => props.theme.faucetBorder};
border-radius: 5px;
height: "40";
flex-grow: 1;
flex: 1;
// max-width: 31rem;
// margin-right: 4rem;
font-family: Source Sans Pro;

@media(max-width: 600px)
{
    // width: 17rem;
}

@media(max-width: 1000px)
{
    // width: 20.1rem;
}
`;

const RangeSection = styled.div`
display: flex;
flex-direction: row;
border: 1px solid ${props => props.theme.faucetBorder};

border-radius: 5px;
justify-content: space-between;
height: "40px";
margin-top:  ${(props) => (props.mtop ? props.mtop : "")};
position: relative;

@media(max-width: 600px)
{
    margin-top:  ${(props) => (props.mttop ? props.mttop : "")};
}


`;
const Section = styled.div`
display:flex;


`;
const Datexyz = styled.div`
display:flex;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
// border:  0.5px solid #674C9F;
// border:${(props) => (props.Border ? props.Border : "")}
border: 1px solid ${props => props.theme.faucetBorder};
border-radius: 10px;
margin: 1.3rem;
`;


const TopBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom: 1px solid ${props => props.theme.faucetBorder};;
margin-bottom: 1rem;
font-family: Source Sans Pro;

@media (max-width:500px)
{
    // flex-direction: column;
}

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
margin-top: 0.6rem;
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
}

`;

const SectionSearch = styled.div`
disply: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
font-family: Source Sans Pro;
@media(min-width: 600px)
{
    
margin-right:  ${(props) => (props.mright ? props.mright : "")};
margin-left:  ${(props) => (props.mleft ? props.mleft : "")};

}
`;


const InputWrapper = styled.div`
    display:flex;
    height: 40px;
    // border: 0.5px solid #674C9F;
    
border: 1px solid ${props => props.theme.faucetBorder};
    border-radius: 5px;
    margin-top: 1.5rem;
    width: 100%;
    padding: 1px;
    @media(max-width:600px)
    {
        margin-bottom: 1rem;
    }
    

`;

const SearchBar = styled.input`
display: flex;
margin-top: 1.5rem;
height: 40px;
// width: 25rem;
border: 0.5px solid #674C9F;
border-radius: 5px;
font-family: Source Sans Pro;

// color: #35C5F3;

input[type="reset"] {
    display: none;
}
&::placeholder {
    letter-spacing: 0.15em;
}
&:hover,
&:active,
&:focus {
    outline: none;
}
&:focus {
    border: 0.5px solid #674C9F;
}

@media(max-width: 600px)
{
    // width: 17rem;
    font-size: 16px;
    padding: 2px;
}

@media(max-width: 1000px)
{
    // width: 20rem;
}
`;


