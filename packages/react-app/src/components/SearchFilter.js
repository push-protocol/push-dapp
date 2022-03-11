import {React, useState,useEffect} from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import DisplayNotice from "components/DisplayNotice";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function SearchFilter()
{
    // const [search,setSearch] = useState("");


    const applySearch = async () => {

    }

    const reset = async () => {
        
    }


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
                    <span>search</span>
                    <span>search</span>
                </SectionSearch>

                <SectionSearch mtop="1rem">



                {/* <InputWrapper style={{ }} >
                    <SearchBar
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="input"
                        placeholder="Search with keyword"
                    />
                   
                </InputWrapper> */}

                    <span>search</span>
                    <span>search</span>
                </SectionSearch>
            </SearchOptions>
            
           
        </Container>

    )
}


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
flex-direction: column;
margin-left: 2rem;
margin-right: 2rem;
margin-bottom: 1rem;

`;

const SectionSearch = styled.div`
disply: flex;
flex-direction: row;
justify-content: space-between;
margin-top:  ${(props) => (props.mtop ? "1rem" : "")};
`;

const InputWrapper = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 600px) {
        width: 100%;
        margin: 2rem 0;
    }
`;

const SearchBar = styled.input`
    width: 100%;
    padding-right: 50px;
    height: 60px;
    padding-left: 40px;

    background: rgb(255, 255, 255);
    border: 1px solid rgba(169, 169, 169, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    transition: 500ms;
    text-transform: capitalize;
    font-size: 16px;

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
        border: 1px solid #ec008c;
    }
`;