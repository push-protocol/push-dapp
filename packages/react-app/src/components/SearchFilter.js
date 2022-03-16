import React from "react";
import {useState,useEffect} from "react";
import styled from "styled-components";
import { MultiSelect } from "react-multi-select-component";
import './SearchFilter.css';
import "antd/dist/antd.css";
import {DatePicker,TimePicker} from "antd";





export default function SearchFilter()
{
    let items=[]
    const applySearch = async () => {
        console.log(selectedOption);

    }

    const reset = async () => {
        
    }

    // const options = [
    //     { name: 'chocolate', id: 'Chocolate' },
    //     { name: 'strawberry', id: 'Strawberry' },
    //     { name: 'vanilla', id: 'Vanilla' },
    //     { name: 'screen', id: 'Screen' },
    //     { name: 'car', id: 'Car' },
    //     { name: 'game', id: 'Game' },
    //     { name: 'laptop', id: 'Laptop' },
    //     { name: 'mouse', id: 'Mouse' },
    //     { name: 'cable', id: 'Cable' },
    //   ];

    const [startDate,setStartDate] = useState(new Date());

    // const options = [ 'chocolate','strawberry', 'vanilla','screen',  'car', 'game',  'laptop', 'mouse', 'cable'];

      const options = [
        { label: 'chocolate', value: 'Chocolate' },
        { label: 'strawberry', value: 'Strawberry' },
        { label: 'vanilla', value: 'Vanilla' },
        { label: 'screen', value: 'Screen' },
        { label: 'car', value: 'Car' },
        { label: 'game', value: 'Game' },
        { label: 'laptop', value: 'Laptop' },
        { lable: 'mouse', value: 'Mouse' },
        { label: 'cable', value: 'Cable' },
      ];

    const [selectedOption, setSelectedOption] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = ( selectedOptions) => {
        setSelectedOption(selectedOptions);
        console.log(`selected list is ${selectedOption}`)

    }

    // const onRemove = (selectedList, removedItem) => {
    //     setSelectedOption(selectedList);
    //     console.log(`selected list is ${selectedOption}`)
    // }

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // setSelectedOption(items);
    //     console.log(`selected options are ${selectedOption}`);
    //   },selectedOption);

    
    return(
     
        <Container>
            <TopBar>
                <Left>
                    <img style={{height:"20px", width:"20px", marginTop:"1rem", marginLeft:"2rem",marginRight:"1rem"}} src="/svg/filterIcon.svg"/>
                    <span style={{marginTop:"1rem", fontWeight:"400", color:"#B4B4B4"}}>Filter Notifications</span>
                </Left>
                <Buttons>
                    <ButtonFeed bgColor='#e20880' mright="2rem" onClick={applySearch}>
                            Apply
                    </ButtonFeed>    
                    <ButtonFeed bgColor='#35c5f3' onClick={reset}>
                        Reset
                    </ButtonFeed> 
                </Buttons>
            </TopBar>

            <SearchOptions>
                <SectionSearch>
                 
                {/* <Multiselect
                    options={options} // Options to display in the dropdown
                    selectedValues={selectedOption} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    className="DropDown2"
                /> */}
                {/* <ReactMultiSelectCheckboxes options={options} /> */}
                {/* <div className="DropDown"> */}
                <SelectChannel>
                    <MultiSelect
                        options={options}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        labelledBy="Search Notifications from"
                        // className="DropDown"
                        style={{borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}
                    />

                </SelectChannel>
                

                <InputWrapper>
                    <SearchBar
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    
                        // className=""
                        // placeholder="Search with keywords"
                    />
                   
                </InputWrapper>
           
                {/* <Multiselect
                    options={options} // Options to display in the dropdown
                    selectedValues={selectedOption} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    className="DropDown"
                /> */}
                    
                </SectionSearch>

                <SectionSearch>
                        <RangeSection>
                            <DatePicker style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:"10px", borderRight:'1px solid white',WebkitBoxShadow:'0 0 2px 0 white',WebkitBorderBeforeColor:'white',height:"40px", marginRight:"7rem",borderColor:"0.5px solid #674C9F",position:'relative'}} className="success" placeholder=""/>
                            <DatePicker style={{borderTopRightRadius:'10px', borderBottomRightRadius:"10px", borderLeft:'1px solid white',WebkitBoxShadow:'0 0 2px white',WebkitBorderBeforeColor:'white',height:"40px",borderColor:"0.5px solid #674C9F"}} className="success" placeholder=""/>
                        </RangeSection>

                        <RangeSection mtop="1.5rem">
                            <TimePicker style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:"10px", borderRight:'1px solid white',WebkitBoxShadow:'0 0 2px white',WebkitBorderBeforeColor:'white',height:"40px",borderColor:"0.5px solid #674C9F"}} placeholder="" size="large" className="success"/>
                            <TimePicker style={{borderTopRightRadius:'10px', borderBottomRightRadius:"10px", borderLeft:'1px solid white',WebkitBoxShadow:'0 0 2px white',WebkitBorderBeforeColor:'white', height:"40px",borderColor:"0.5px solid #674C9F"}} placeholder="" size="large" className="success"/>
                        </RangeSection> 
                     

                    
                </SectionSearch>
            </SearchOptions>
            
           
        </Container>
    )
}


const SelectChannel = styled.div`
// display: flex;
// flex-direction: row;
border:  0.5px solid #674C9F;
border-radius: 10px;
height: "40px";



`;

const RangeSection = styled.div`
display: flex;
flex-direction: row;
border:  0.5px solid #674C9F;
border-radius: 10px;
justify-content: space-between;
height: "40px";
margin-top:  ${(props) => (props.mtop ? props.mtop : "")};
position: relative;

// &:hover{
//     border:0.5px solid #674C9F;
//     box-shadow: 0 0 2px #674C9F;
// }

// &:focus{
//     border:0.5px solid #674C9F;
//     box-shadow: 0 0 2px #674C9F;
// }

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
border:  0.5px solid #674C9F;
border-radius: 10px;
margin: 1.3rem;
`;


const TopBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom:  0.5px solid #674C9F;
margin-bottom: 1rem;

@media (max-width:500px)
{
    flex-direction: column;
}

`;

const Left = styled.div`
display: flex;
flex-direction: row;
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 2rem;
margin-top: 0.3rem;
margin-bottom: 0.5rem;
@media (max-width: 500px)
{
    margin-right: 0.5rem;
    margin-left: 2rem;
    width: 4rem;
    
}

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
`;


const SearchOptions = styled.div`
display: flex;
flex-direction: row;
margin-left: 2rem;
margin-right: 2rem;
margin-bottom: 1rem;
justify-content: space-between;

`;

const SectionSearch = styled.div`
disply: flex;
flex-direction: column
`;


const InputWrapper = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 600px) {
        width: 100%;
        margin: 2rem 0;
    }
    
// &:active{
//     border:  0.5px solid #674C9F;
// }
`;

const SearchBar = styled.input`
display: flex;
margin-top: 1.5rem;
height: 40px;
width: 25rem;
border-radius: 10px;
border:  0.5px solid #674C9F;

&:active{
    border:  0.5px solid #674C9F;
}

&:hover{
    border:  0.5px solid #674C9F;
}
`;